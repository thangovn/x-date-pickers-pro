import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["changeMonth", "components", "componentsProps", "parsedValue", "leftArrowButtonText", "maxDate", "minDate", "onSelectedDaysChange", "renderDay", "rightArrowButtonText", "disabled", "readOnly"];
import * as React from 'react';
import { PickersCalendarHeader, useDefaultDates, useUtils, DayPicker } from '@mui/x-date-pickers/internals';
import { doNothing } from '../internal/utils/utils';
import { DateRangePickerDay } from '../DateRangePickerDay';
import { isWithinRange, isStartOfRange, isEndOfRange } from '../internal/utils/date-utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const onlyDayView = ['day'];
/**
 * @ignore - internal component.
 */

export function DateRangePickerViewMobile(props) {
  const {
    changeMonth,
    components,
    componentsProps,
    parsedValue,
    leftArrowButtonText,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onSelectedDaysChange,
    renderDay = (_, dayProps) => /*#__PURE__*/_jsx(DateRangePickerDay, _extends({}, dayProps)),
    rightArrowButtonText,
    disabled,
    readOnly
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const minDate = minDateProp != null ? minDateProp : defaultDates.minDate;
  const maxDate = maxDateProp != null ? maxDateProp : defaultDates.maxDate; // When disable, limit the view to the selected range

  const [start, end] = parsedValue;
  const minDateWithDisabled = disabled && start || minDate;
  const maxDateWithDisabled = disabled && end || maxDate;
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx(PickersCalendarHeader, _extends({
      components: components,
      componentsProps: componentsProps,
      leftArrowButtonText: leftArrowButtonText,
      maxDate: maxDateWithDisabled,
      minDate: minDateWithDisabled,
      onMonthChange: changeMonth,
      openView: "day",
      rightArrowButtonText: rightArrowButtonText,
      views: onlyDayView,
      disabled: disabled
    }, other)), /*#__PURE__*/_jsx(DayPicker, _extends({}, other, {
      minDate: minDate,
      maxDate: maxDate,
      disabled: disabled,
      readOnly: readOnly,
      selectedDays: parsedValue,
      onSelectedDaysChange: onSelectedDaysChange,
      onFocusedDayChange: doNothing,
      renderDay: (day, _, DayProps) => renderDay(day, _extends({
        isPreviewing: false,
        isStartOfPreviewing: false,
        isEndOfPreviewing: false,
        isHighlighting: isWithinRange(utils, day, parsedValue),
        isStartOfHighlighting: isStartOfRange(utils, day, parsedValue),
        isEndOfHighlighting: isEndOfRange(utils, day, parsedValue)
      }, DayProps))
    }))]
  });
}