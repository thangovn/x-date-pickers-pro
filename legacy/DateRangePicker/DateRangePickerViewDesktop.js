import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["calendars", "changeMonth", "components", "componentsProps", "currentlySelectingRangeEnd", "currentMonth", "parsedValue", "disableFuture", "disablePast", "leftArrowButtonText", "maxDate", "minDate", "onSelectedDaysChange", "renderDay", "rightArrowButtonText"];
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useDefaultDates, useUtils, useLocaleText, PickersArrowSwitcher, usePreviousMonthDisabled, useNextMonthDisabled, DayPicker, buildDeprecatedPropsWarning, DAY_MARGIN } from '@mui/x-date-pickers/internals';
import { calculateRangePreview } from './date-range-manager';
import { DateRangePickerDay } from '../DateRangePickerDay';
import { isWithinRange, isStartOfRange, isEndOfRange } from '../internal/utils/date-utils';
import { doNothing } from '../internal/utils/utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";
var DateRangePickerViewDesktopRoot = styled('div')({
  display: 'flex',
  flexDirection: 'row'
});
var DateRangePickerViewDesktopContainer = styled('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    '&:not(:last-of-type)': {
      borderRight: "2px solid ".concat(theme.palette.divider)
    }
  };
});
var DAY_RANGE_SIZE = 40;
var weeksContainerHeight = (DAY_RANGE_SIZE + DAY_MARGIN * 2) * 6;
var DateRangePickerViewDesktopCalendar = styled(DayPicker)({
  minWidth: 312,
  minHeight: weeksContainerHeight
});
var DateRangePickerViewDesktopArrowSwitcher = styled(PickersArrowSwitcher)({
  padding: '16px 16px 8px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

function getCalendarsArray(calendars) {
  switch (calendars) {
    case 1:
      return [0];

    case 2:
      return [0, 0];

    case 3:
      return [0, 0, 0];
    // this will not work in IE11, but allows to support any amount of calendars

    default:
      return new Array(calendars).fill(0);
  }
}

var deprecatedPropsWarning = buildDeprecatedPropsWarning('Props for translation are deprecated. See https://mui.com/x/react-date-pickers/localization for more information.');
/**
 * @ignore - internal component.
 */

export function DateRangePickerViewDesktop(props) {
  var calendars = props.calendars,
      changeMonth = props.changeMonth,
      components = props.components,
      componentsProps = props.componentsProps,
      currentlySelectingRangeEnd = props.currentlySelectingRangeEnd,
      currentMonth = props.currentMonth,
      parsedValue = props.parsedValue,
      disableFuture = props.disableFuture,
      disablePast = props.disablePast,
      leftArrowButtonTextProp = props.leftArrowButtonText,
      maxDateProp = props.maxDate,
      minDateProp = props.minDate,
      onSelectedDaysChange = props.onSelectedDaysChange,
      _props$renderDay = props.renderDay,
      _renderDay = _props$renderDay === void 0 ? function (_, dateRangeProps) {
    return /*#__PURE__*/_jsx(DateRangePickerDay, _extends({}, dateRangeProps));
  } : _props$renderDay,
      rightArrowButtonTextProp = props.rightArrowButtonText,
      other = _objectWithoutProperties(props, _excluded);

  deprecatedPropsWarning({
    leftArrowButtonText: leftArrowButtonTextProp,
    rightArrowButtonText: rightArrowButtonTextProp
  });
  var localeText = useLocaleText();
  var leftArrowButtonText = leftArrowButtonTextProp != null ? leftArrowButtonTextProp : localeText.previousMonth;
  var rightArrowButtonText = rightArrowButtonTextProp != null ? rightArrowButtonTextProp : localeText.nextMonth;
  var utils = useUtils();
  var defaultDates = useDefaultDates();
  var minDate = minDateProp != null ? minDateProp : defaultDates.minDate;
  var maxDate = maxDateProp != null ? maxDateProp : defaultDates.maxDate;

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rangePreviewDay = _React$useState2[0],
      setRangePreviewDay = _React$useState2[1];

  var isNextMonthDisabled = useNextMonthDisabled(currentMonth, {
    disableFuture: disableFuture,
    maxDate: maxDate
  });
  var isPreviousMonthDisabled = usePreviousMonthDisabled(currentMonth, {
    disablePast: disablePast,
    minDate: minDate
  });
  var previewingRange = calculateRangePreview({
    utils: utils,
    range: parsedValue,
    newDate: rangePreviewDay,
    currentlySelectingRangeEnd: currentlySelectingRangeEnd
  });
  var handleSelectedDayChange = React.useCallback(function (day) {
    setRangePreviewDay(null);
    onSelectedDaysChange(day);
  }, [onSelectedDaysChange]);

  var handlePreviewDayChange = function handlePreviewDayChange(newPreviewRequest) {
    if (!isWithinRange(utils, newPreviewRequest, parsedValue)) {
      setRangePreviewDay(newPreviewRequest);
    } else {
      setRangePreviewDay(null);
    }
  };

  var CalendarTransitionProps = React.useMemo(function () {
    return {
      onMouseLeave: function onMouseLeave() {
        return setRangePreviewDay(null);
      }
    };
  }, []);
  var selectNextMonth = React.useCallback(function () {
    changeMonth(utils.getNextMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  var selectPreviousMonth = React.useCallback(function () {
    changeMonth(utils.getPreviousMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  return /*#__PURE__*/_jsx(DateRangePickerViewDesktopRoot, {
    children: getCalendarsArray(calendars).map(function (_, index) {
      var monthOnIteration = utils.setMonth(currentMonth, utils.getMonth(currentMonth) + index);
      return /*#__PURE__*/_jsxs(DateRangePickerViewDesktopContainer, {
        children: [/*#__PURE__*/_jsx(DateRangePickerViewDesktopArrowSwitcher, {
          onLeftClick: selectPreviousMonth,
          onRightClick: selectNextMonth,
          isLeftHidden: index !== 0,
          isRightHidden: index !== calendars - 1,
          isLeftDisabled: isPreviousMonthDisabled,
          isRightDisabled: isNextMonthDisabled,
          leftArrowButtonText: leftArrowButtonText,
          components: components,
          componentsProps: componentsProps,
          rightArrowButtonText: rightArrowButtonText,
          children: utils.format(monthOnIteration, 'monthAndYear')
        }), /*#__PURE__*/_createElement(DateRangePickerViewDesktopCalendar, _extends({}, other, {
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          key: index,
          selectedDays: parsedValue,
          onFocusedDayChange: doNothing,
          onSelectedDaysChange: handleSelectedDayChange,
          currentMonth: monthOnIteration,
          TransitionProps: CalendarTransitionProps,
          renderDay: function renderDay(day, __, DayProps) {
            return _renderDay(day, _extends({
              isPreviewing: isWithinRange(utils, day, previewingRange),
              isStartOfPreviewing: isStartOfRange(utils, day, previewingRange),
              isEndOfPreviewing: isEndOfRange(utils, day, previewingRange),
              isHighlighting: isWithinRange(utils, day, parsedValue),
              isStartOfHighlighting: isStartOfRange(utils, day, parsedValue),
              isEndOfHighlighting: isEndOfRange(utils, day, parsedValue),
              onMouseEnter: function onMouseEnter() {
                return handlePreviewDayChange(day);
              }
            }, DayProps));
          }
        }))]
      }, index);
    })
  });
}