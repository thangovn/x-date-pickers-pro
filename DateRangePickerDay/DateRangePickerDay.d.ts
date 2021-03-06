import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateRangePickerDayClasses } from './dateRangePickerDayClasses';
export interface DateRangePickerDayProps<TDate> extends Omit<PickersDayProps<TDate>, 'classes'> {
    /**
     * Set to `true` if the `day` is in a highlighted date range.
     */
    isHighlighting: boolean;
    /**
     * Set to `true` if the `day` is the end of a highlighted date range.
     */
    isEndOfHighlighting: boolean;
    /**
     * Set to `true` if the `day` is the start of a highlighted date range.
     */
    isStartOfHighlighting: boolean;
    /**
     * Set to `true` if the `day` is in a preview date range.
     */
    isPreviewing: boolean;
    /**
     * Set to `true` if the `day` is the start of a highlighted date range.
     */
    isEndOfPreviewing: boolean;
    /**
     * Set to `true` if the `day` is the end of a highlighted date range.
     */
    isStartOfPreviewing: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<DateRangePickerDayClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
}
declare type DateRangePickerDayComponent = <TDate>(props: DateRangePickerDayProps<TDate> & React.RefAttributes<HTMLButtonElement>) => JSX.Element;
/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [DateRangePickerDay API](https://mui.com/x/api/date-pickers/date-range-picker-day/)
 */
export declare const DateRangePickerDay: DateRangePickerDayComponent;
export {};
