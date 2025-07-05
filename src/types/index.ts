import { ComponentType, SVGProps } from "react";

export enum FilterType {
  Checkbox,
  TextInput,
  RangeSlider,
  Select,
  Buttons,
}

type FilterValue = {
  label: string;
  value: string | number | boolean;
};

export type Filter = {
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  type: FilterType;
  values?: FilterValue[];
};