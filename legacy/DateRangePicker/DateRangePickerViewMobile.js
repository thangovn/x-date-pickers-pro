import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["changeMonth", "components", "componentsProps", "parsedValue", "leftArrowButtonText", "maxDate", "minDate", "onSelectedDaysChange", "renderDay", "rightArrowButtonText", "disabled", "readOnly"];
import * as React from 'react';
import { PickersCalendarHeader, useDefaultDates, useUtils, DayPicker } from '@mui/x-date-pickers/internals';
import { doNothing } from '../internal/utils/utils';
import { DateRangePickerDay } from '../DateRangePickerDay';
import { isWithinRange, isStartOfRange, isEndOfRange } from '../internal/utils/date-utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var onlyDayView = ['day'];
/**
 * @ignore - internal component.
 */

export function DateRangePickerViewMobile(props) {
  var changeMonth = props.changeMonth,
      components = props.components,
      componentsProps = props.componentsProps,
      parsedValue = props.parsedValue,
      leftArrowButtonText = props.leftArrowButtonText,
      maxDateProp = props.maxDate,
      minDateProp = props.minDate,
      onSelectedDaysChange = props.onSelectedDaysChange,
      _props$renderDay = props.renderDay,
      _renderDay = _props$renderDay === void 0 ? function (_, dayProps) {
    return /*#__PURE__*/_jsx(DateRangePickerDay, _extends({}, dayProps));
  } : _props$renderDay,
      rightArrowButtonText = props.rightArrowButtonText,
      disabled = props.disabled,
      readOnly = props.readOnly,
      other = _objectWithoutProperties(props, _excluded);

  var utils = useUtils();
  var defaultDates = useDefaultDates();
  var minDate = minDateProp != null ? minDateProp : defaultDates.minDate;
  var maxDate = maxDateProp != null ? maxDateProp : defaultDates.maxDate; // When disable, limit the view to the selected range

  var _parsedValue = _slicedToArray(parsedValue, 2),
      start = _parsedValue[0],
      end = _parsedValue[1];

  var minDateWithDisabled = disabled && start || minDate;
  var maxDateWithDisabled = disabled && end || maxDate;
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
      renderDay: function renderDay(day, _, DayProps) {
        return _renderDay(day, _extends({
          isPreviewing: false,
          isStartOfPreviewing: false,
          isEndOfPreviewing: false,
          isHighlighting: isWithinRange(utils, day, parsedValue),
          isStartOfHighlighting: isStartOfRange(utils, day, parsedValue),
          isEndOfHighlighting: isEndOfRange(utils, day, parsedValue)
        }, DayProps));
      }
    }))]
  });
}