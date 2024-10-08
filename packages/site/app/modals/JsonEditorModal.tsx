import { ButtonStyle } from "discord-api-types/v10";
import { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { twJoin } from "tailwind-merge";
import { ZodSchema } from "zod";
import { Button } from "~/components/Button";
import { Checkbox } from "~/components/Checkbox";
import { useError } from "~/components/Error";
import { TextArea } from "~/components/TextArea";
import { cycleCopyText } from "~/util/text";
import { Modal, ModalProps } from "./Modal";

export interface JsonEditorProps<T = Record<string, any>> {
  data: T;
  update: (data: T) => void;
  schema: ZodSchema;
}

export const JsonEditorModal = (
  props: ModalProps & Partial<JsonEditorProps>,
) => {
  const { t } = useTranslation();

  const [error, setError] = useError(t);
  const [valid, setValid] = useState(true);
  const [wordWrap, setWordWrap] = useState(true);
  const [value, setValue] = useReducer(
    (_: string, cur: string) => {
      let parsed: any;
      try {
        parsed = JSON.parse(cur);
      } catch (e) {
        setError({ message: String(e) });
        setValid(false);
      }
      if (parsed && props.schema) {
        const safeParsed = props.schema
          // Unsure why this doesn't do anything to our ZodObject
          // .strict()
          .safeParse(parsed);
        if (safeParsed.success) {
          setError(undefined);
          setValid(true);
        } else {
          setError({
            message: JSON.stringify(safeParsed.error.format(), undefined, 2),
          });
          setValid(false);
        }
      }
      return cur;
    },
    JSON.stringify(props.data, undefined, 2),
  );

  useEffect(() => {
    setValue(JSON.stringify(props.data, undefined, 2));
  }, [props.data]);

  return (
    <Modal title={t("jsonEditor")} {...props}>
      {props.data !== undefined && error}
      <TextArea
        label=""
        dir="ltr"
        className={twJoin(
          "w-full min-h-96 text-sm font-code",
          !wordWrap
            ? "whitespace-pre [overflow-wrap:normal] overflow-x-scroll"
            : undefined,
        )}
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <div className="mt-2">
        <Checkbox
          label={t("wordWrap")}
          checked={wordWrap}
          onChange={(e) => setWordWrap(e.currentTarget.checked)}
        />
      </div>
      <div className="mt-4 space-x-2 rtl:space-x-reverse">
        <Button
          discordstyle={ButtonStyle.Secondary}
          onClick={(e) => cycleCopyText(value, t, e.currentTarget)}
        >
          {t("copy")}
        </Button>
        <Button
          discordstyle={ButtonStyle.Secondary}
          onClick={() => {
            try {
              setValue(JSON.stringify(JSON.parse(value), undefined, 2));
            } catch {}
          }}
        >
          {t("jsonPrettify")}
        </Button>
        <Button
          disabled={!valid}
          onClick={() => {
            if (props.update) props.update(JSON.parse(value));
            props.setOpen(false);
          }}
        >
          {t("save")}
        </Button>
      </div>
    </Modal>
  );
};
