import { Router } from 'itty-router';
import { PlatformAlgorithm, isValidRequest } from 'discord-verify';
import { appCommands, respond } from './commands.js';
import { InteractionType, InteractionResponseType, APIInteraction, APIApplicationCommandInteractionDataOption, ApplicationCommandOptionType, ApplicationCommandType } from 'discord-api-types/v10'
import { client } from 'discord-api-methods';
import { InteractionContext } from './interactions.js';

const router = Router();

router.get('/', (_, env) => {
  return new Response(`👋 ${env.DISCORD_APPLICATION_ID}`);
});

router.post('/', async (request, env) => {
  const { isValid, interaction } = await server.verifyDiscordRequest(
    request,
    env,
  );
  if (!isValid || !interaction) {
    return new Response('Bad request signature.', { status: 401 });
  }

  client.setToken(env.DISCORD_TOKEN);

  if (interaction.type === InteractionType.Ping) {
    return respond({ type: InteractionResponseType.Pong });
  }

  if (interaction.type === InteractionType.ApplicationCommand) {
    let qualifiedOptions = '';
    if (interaction.data.type === ApplicationCommandType.ChatInput) {
      const appendOption = (option: APIApplicationCommandInteractionDataOption) => {
        if (option.type === ApplicationCommandOptionType.SubcommandGroup) {
          qualifiedOptions += ' ' + option.name;
          for (const opt of option.options) {
            appendOption(opt)
          }
        } else if (option.type === ApplicationCommandOptionType.Subcommand) {
          qualifiedOptions += ' ' + option.name;
        }
      }
      for (const option of interaction.data.options ?? []) {
        appendOption(option);
      }
    }

    const appCommand = appCommands[interaction.data.type][interaction.data.name];
    if (!appCommand) {
      return respond({ error: 'Unknown command' });
    }

    const handler = appCommand.handlers[qualifiedOptions.trim() || "BASE"]
    if (!handler) {
      return respond({ error: 'Cannot handle this command' });
    }

    const ctx = new InteractionContext(client, interaction, env.DISCORD_APPLICATION_ID);
    return respond(await handler(ctx));
  }

  console.error('Unknown Type');
  return respond({ error: 'Unknown Type' });
});
router.all('*', () => new Response('Not Found.', { status: 404 }));

async function verifyDiscordRequest(request: Request, env: any) {
  const signature = request.headers.get('x-signature-ed25519');
  const timestamp = request.headers.get('x-signature-timestamp');
  const valid =
    signature &&
    timestamp &&
    (await isValidRequest(request, env.DISCORD_PUBLIC_KEY, PlatformAlgorithm.Cloudflare));
  if (!valid) {
    return { isValid: false };
  }

  const body = await request.json() as APIInteraction;
  return { interaction: body, isValid: true };
}

const server = {
  verifyDiscordRequest: verifyDiscordRequest,
  fetch: async function (request: Request, env: any) {
    return router.handle(request, env);
  },
};

export default server;
