import * as React from 'react';
import { DateInputProps, ExportedDateInputProps, MuiTextFieldProps } from '@mui/x-date-pickers/internals';
import { CurrentlySelectingRangeEndProps, DateRange } from '../internal/models/dateRange';
import { DateRangeValidationError } from '../internal/hooks/validation/useDateRangeValidation';
export interface ExportedDateRangePickerInputProps<TInputDate, TDate> extends Omit<ExportedDateInputProps<TInputDate, TDate>, 'renderInput'> {
    /**
     * The `renderInput` prop allows you to customize the rendered input.
     * The `startProps` and `endProps` arguments of this render prop contains props of [TextField](https://mui.com/material-ui/api/text-field/#props),
     * that you need to forward to the range start/end inputs respectively.
     * Pay specific attention to the `ref` and `inputProps` keys.
     * @example
     * ```jsx
     * <DateRangePicker
     *  renderInput={(startProps, endProps) => (
     *   <React.Fragment>
     *     <TextField {...startProps} />
     *     <Box sx={{ mx: 2 }}> to </Box>
     *     <TextField {...endProps} />
     *   </React.Fragment>;
     *  )}
     * />
     * ````
     * @param {MuiTextFieldProps} startProps Props that you need to forward to the range start input.
     * @param {MuiTextFieldProps} endProps Props that you need to forward to the range end input.
     * @returns {React.ReactElement} The range input to render.
     */
    renderInput: (startProps: MuiTextFieldProps, endProps: MuiTextFieldProps) => React.ReactElement;
    onChange: (date: DateRange<TDate>, keyboardInputValue?: string) => void;
}
export interface DateRangeInputProps<TInputDate, TDate> extends ExportedDateRangePickerInputProps<TInputDate, TDate>, Omit<DateInputProps<TInputDate, TDate>, keyof ExportedDateRangePickerInputProps<TInputDate, TDate> | 'rawValue' | 'validationError'>, CurrentlySelectingRangeEndProps {
    startText: React.ReactNode;
    endText: React.ReactNode;
    validationError: DateRangeValidationError;
    rawValue: DateRange<TInputDate>;
}
declare type DatePickerInputComponent = <TInputDate, TDate>(props: DateRangeInputProps<TInputDate, TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
/**
 * @ignore - internal component.
 */
export declare const DateRangePickerInput: DatePickerInputComponent;
export {};
