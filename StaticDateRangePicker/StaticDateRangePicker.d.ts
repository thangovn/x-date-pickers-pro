import * as React from 'react';
import { StaticPickerProps, PickersStaticWrapperSlotsComponent, DateInputSlotsComponent, PickersStaticWrapperSlotsComponentsProps } from '@mui/x-date-pickers/internals';
import { DateRangePickerViewSlotsComponent, DateRangePickerViewSlotsComponentsProps } from '../DateRangePicker/DateRangePickerView';
import { BaseDateRangePickerProps } from '../DateRangePicker/shared';
export interface StaticDateRangePickerSlotsComponent extends PickersStaticWrapperSlotsComponent, DateRangePickerViewSlotsComponent, DateInputSlotsComponent {
}
export interface StaticDateRangePickersSlotsComponentsProps extends PickersStaticWrapperSlotsComponentsProps, DateRangePickerViewSlotsComponentsProps {
}
export declare type StaticDateRangePickerProps<TInputDate, TDate> = StaticPickerProps<BaseDateRangePickerProps<TInputDate, TDate>> & {
    /**
     * Overrideable components.
     * @default {}
     */
    components?: Partial<StaticDateRangePickerSlotsComponent>;
    /**
     * The props used for each component slot.
     * @default {}
     */
    componentsProps?: Partial<StaticDateRangePickersSlotsComponentsProps>;
};
declare type StaticDateRangePickerComponent = (<TInputDate, TDate = TInputDate>(props: StaticDateRangePickerProps<TInputDate, TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [StaticDateRangePicker API](https://mui.com/x/api/date-pickers/static-date-range-picker/)
 */
export declare const StaticDateRangePicker: StaticDateRangePickerComponent;
export {};
