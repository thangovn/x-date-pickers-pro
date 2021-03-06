import * as React from 'react';
import { BasePickerProps, PickerStateValueManager, ValidationProps } from '@mui/x-date-pickers/internals';
import { ExportedDateRangePickerViewProps } from './DateRangePickerView';
import { DateRangeValidationError } from '../internal/hooks/validation/useDateRangeValidation';
import { DateRange } from '../internal/models';
import { ExportedDateRangePickerInputProps } from './DateRangePickerInput';
export interface BaseDateRangePickerProps<TInputDate, TDate> extends Omit<BasePickerProps<DateRange<TInputDate>, DateRange<TDate>>, 'orientation'>, ExportedDateRangePickerViewProps<TDate>, ValidationProps<DateRangeValidationError, DateRange<TInputDate>>, ExportedDateRangePickerInputProps<TInputDate, TDate> {
    /**
     * Text for end input label and toolbar placeholder.
     * @default 'End'
     * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization
     */
    endText?: React.ReactNode;
    /**
     * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
     * @default '__/__/____'
     */
    mask?: ExportedDateRangePickerInputProps<TInputDate, TDate>['mask'];
    /**
     * Callback fired when the value (the selected date range) changes @DateIOType.
     * @template TDate
     * @param {DateRange<TDate>} date The new parsed date range.
     * @param {string} keyboardInputValue The current value of the keyboard input.
     */
    onChange: (date: DateRange<TDate>, keyboardInputValue?: string) => void;
    /**
     * Text for start input label and toolbar placeholder.
     * @default 'Start'
     * @deprecated Use the `localeText` prop of `LocalizationProvider` instead, see https://mui.com/x/react-date-pickers/localization
     */
    startText?: React.ReactNode;
}
export declare type DefaultizedProps<Props> = Props & {
    inputFormat: string;
};
export declare function useDateRangePickerDefaultizedProps<TInputDate, TDate, Props extends BaseDateRangePickerProps<TInputDate, TDate>>(props: Props, name: string): DefaultizedProps<Props> & Required<Pick<BaseDateRangePickerProps<TInputDate, TDate>, 'calendars' | 'startText' | 'endText'>>;
export declare const dateRangePickerValueManager: PickerStateValueManager<[any, any], [any, any], any>;
