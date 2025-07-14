import { ComponentType, SVGProps } from "react";
import {Product} from "@/data";

export enum FilterType {
  Checkbox = "checkbox",
  TextInput = "text",
  RangeSlider = "range",
  Select = "select",
  Buttons = "buttons",
}

type BaseFilter = {
  label: string;
  fields: (keyof Product)[];
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
  placeholder: string;
};

export type RangeSliderFilter = BaseFilter & {
  type: FilterType.RangeSlider;
  values: {
    min: number;
    max: number;
  };
};

export type DisplayFilter = {
  initialValue: string;
  onChange?: (value: string) => void;
  values: {
    label: string;
    value: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    itemsPerPage: number;
  }[];
}

// export type SelectFilter = BaseFilter & {
//   type: FilterType.Select;
//   values: {
//     label: string;
//     value: string;
//     field: keyof Product;
//     direction: "asc" | "desc";
//   }[];
// };

// type ButtonsFilterValue = {
//   label?: string;
//   icon?: ComponentType<SVGProps<SVGSVGElement>>;
//   value: string;
//   itemsPerPage?: number;
// };

// export type ButtonsFilter = BaseFilter & {
//   type: FilterType.Buttons;
//   initialValue?: string;
//   onChange?: (value: string) => void;
//   values: ButtonsFilterValue[];
// };

export type Filter =
  | CheckboxFilter
  | TextInputFilter
  | RangeSliderFilter;
  // | SelectFilter
  // | ButtonsFilter;
