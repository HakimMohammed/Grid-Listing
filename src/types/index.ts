import { ComponentType, SVGProps } from "react";

export enum FilterType {
  Checkbox = "checkbox",
  TextInput = "text",
  RangeSlider = "range",
  Select = "select",
  Buttons = "buttons",
}

type BaseFilter = {
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type CheckboxFilter = BaseFilter & {
  type: FilterType.Checkbox;
  values: {
    label: string;
    value: string;
  }[];
};

export type TextInputFilter = BaseFilter & {
  type: FilterType.TextInput;
  values: {
    label: string;
    value: string;
  }[];
};

export type RangeSliderFilter = BaseFilter & {
  type: FilterType.RangeSlider;
  values: {
    min: number;
    max: number;
  };
};

export type SelectFilter = BaseFilter & {
  type: FilterType.Select;
  values: {
    label: string;
    value: string;
  }[];
};

export type ButtonsFilter = BaseFilter & {
  type: FilterType.Buttons;
  values: {
    label: string;
    value: string;
  }[];
};
export type Filter =
  | CheckboxFilter
  | TextInputFilter
  | RangeSliderFilter
  | SelectFilter
  | ButtonsFilter;