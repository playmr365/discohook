import { useTranslation } from "react-i18next";
import Select, { ClassNamesConfig, GroupBase, Props } from "react-select";

export type StringSelectProps = Props & { label?: string };

export const selectClassNames: ClassNamesConfig<
  unknown,
  boolean,
  GroupBase<unknown>
> = {
  control: () =>
    "!rounded !bg-[#ebebeb] dark:!bg-[#1e1f22] !border !border-black/[0.08] dark:!border-transparent hover:!border-[#c4c9ce] dark:hover:!border-[#020202] transition-[border] duration-200 !font-medium",
  multiValueLabel: () => "dark:!text-[#ddd]",
  singleValue: () => "dark:!text-[#ddd]",
  input: () => "dark:!text-[#ddd]",
  menu: () => "!rounded dark:!bg-[#2b2d31]",
  option: () =>
    "!rounded dark:!bg-[#2b2d31] dark:hover:!bg-[#36373d] !font-semibold !text-sm",
};

export const StringSelect: React.FC<StringSelectProps> = (props) => {
  const { t } = useTranslation();
  return (
    <label className="block">
      {props.label && <p className="text-sm">{props.label}</p>}
      <Select
        {...props}
        placeholder={props.placeholder ?? t("defaultPlaceholder")}
        classNames={{
          ...selectClassNames,
          ...(props.classNames ?? {}),
        }}
      />
    </label>
  );
};
