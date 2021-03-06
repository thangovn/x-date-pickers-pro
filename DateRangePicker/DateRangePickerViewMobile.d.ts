/// <reference types="react" />
import { ExportedCalendarHeaderProps, ExportedDateValidationProps, DayPickerProps, PickersCalendarHeaderSlotsComponent, PickersCalendarHeaderSlotsComponentsProps } from '@mui/x-date-pickers/internals';
import { DateRange } from '../internal/models/dateRange';
import { ExportedDesktopDateRangeCalendarProps } from './DateRangePickerViewDesktop';
export interface DateRangePickerViewMobileSlotsComponent extends PickersCalendarHeaderSlotsComponent {
}
export interface DateRangePickerViewMobileSlotsComponentsProps extends PickersCalendarHeaderSlotsComponentsProps {
}
export interface ExportedMobileDateRangeCalendarProps<TDate> extends Pick<ExportedDesktopDateRangeCalendarProps<TDate>, 'renderDay'> {
}
interface DesktopDateRangeCalendarProps<TDate> extends ExportedMobileDateRangeCalendarProps<TDate>, Omit<DayPickerProps<TDate>, 'selectedDays' | 'renderDay' | 'onFocusedDayChange'>, ExportedDateValidationProps<TDate>, ExportedCalendarHeaderProps<TDate> {
    /**
     * Overrideable components.
     * @default {}
     */
    components?: Partial<DateRangePickerViewMobileSlotsComponent>;
    /**
     * The props used for each component slot.
     * @default {}
     */
    componentsProps?: Partial<DateRangePickerViewMobileSlotsComponentsProps>;
    parsedValue: DateRange<TDate>;
    changeMonth: (date: TDate) => void;
}
/**
 * @ignore - internal component.
 */
export declare function DateRangePickerViewMobile<TDate>(props: DesktopDateRangeCalendarProps<TDate>): JSX.Element;
export {};
