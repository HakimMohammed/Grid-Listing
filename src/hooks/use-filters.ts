import { useState, useMemo } from "react";
import { Product } from "@/data";
import {
    Filter,
    FilterType,
    RangeSliderFilter,
} from "@/types";

export type FilterValue =
    | string         // TextInput, Select, Buttons
    | string[]       // Checkbox (multiple values)
    | [number, number]; // Range

export type FilterState = Record<string, FilterValue>;

export function useFilters(filters: Filter[], originalData: Product[]) {

    const [filterValues, setFilterValues] = useState<FilterState>(() => {
        const initialState: FilterState = {};

        for (const filter of filters) {
            switch (filter.type) {
                case FilterType.TextInput:
                    initialState[filter.label] = "";
                    break;
                case FilterType.Checkbox:
                    initialState[filter.label] = [];
                    break;
                case FilterType.RangeSlider:
                    const range = filter as RangeSliderFilter;
                    initialState[filter.label] = [range.values.min, range.values.max];
                    break;
                case FilterType.Select:
                case FilterType.Buttons:
                    initialState[filter.label] = "";
                    break;
            }
        }

        return initialState;
    });

    const setFilterValue = (label: string, value: FilterValue) => {
        setFilterValues((prev) => ({
            ...prev,
            [label]: value,
        }));
    };

    const resetAllFilters = () => {
        setFilterValues(() => {
            const reset: FilterState = {};
            for (const filter of filters) {
                switch (filter.type) {
                    case FilterType.TextInput:
                    case FilterType.Select:
                    case FilterType.Buttons:
                        reset[filter.label] = "";
                        break;
                    case FilterType.Checkbox:
                        reset[filter.label] = [];
                        break;
                    case FilterType.RangeSlider:
                        const range = filter as RangeSliderFilter;
                        reset[filter.label] = [range.values.min, range.values.max];
                        break;
                }
            }
            return reset;
        });
    };

    const filteredData = useMemo(() => {
        return originalData.filter((item) => {
            return filters.every((filter) => {
                const value = filterValues[filter.label];

                switch (filter.type) {
                    case FilterType.TextInput: {
                        const query = (value as string).toLowerCase();
                        if (!query) return true;

                        return filter.fields.some((field) => {
                            const itemValue = item[field];
                            return typeof itemValue === "string" && itemValue.toLowerCase().includes(query);
                        });
                    }

                    case FilterType.Checkbox: {
                        const selected = value as string[];
                        if (selected.length === 0) return true;

                        return filter.fields.some((field) => {
                            const itemValue = item[field];
                            return selected.includes(String(itemValue));
                        });
                    }

                    case FilterType.RangeSlider: {
                        const [min, max] = value as [number, number];
                        return filter.fields.every((field) => {

                            const itemValue = item[field];
                            return typeof itemValue === "number" && itemValue >= min && itemValue <= max;

                        });
                    }

                    case FilterType.Select:
                    case FilterType.Buttons: {
                        const selected = value as string;
                        if (!selected) return true;

                        return filter.fields.some((field) => {
                            const itemValue = item[field];
                            return String(itemValue) === selected;
                        });
                    }

                    default:
                        return true;
                }
            });
        });
    }, [filters, filterValues, originalData]);

    return {
        filteredData,
        setFilterValue,
        resetAllFilters,
        activeFilterValues: filterValues,
    };
}