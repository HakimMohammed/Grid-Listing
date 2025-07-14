import { ComponentType, SVGProps } from "react";
import { Product } from "@/data";

export enum FilterType {
  Checkbox = "checkbox",
  TextInput = "text",
  RangeSlider = "range",
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
};

export type SortFilter = {
  fields: (keyof Product)[];
};

export type Filter = CheckboxFilter | TextInputFilter | RangeSliderFilter;
