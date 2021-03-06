import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["calendars", "changeMonth", "components", "componentsProps", "currentlySelectingRangeEnd", "currentMonth", "parsedValue", "disableFuture", "disablePast", "leftArrowButtonText", "maxDate", "minDate", "onSelectedDaysChange", "renderDay", "rightArrowButtonText"];
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
const DateRangePickerViewDesktopRoot = styled('div')({
  display: 'flex',
  flexDirection: 'row'
});
const DateRangePickerViewDesktopContainer = styled('div')(({
  theme
}) => ({
  '&:not(:last-of-type)': {
    borderRight: `2px solid ${theme.palette.divider}`
  }
}));
const DAY_RANGE_SIZE = 40;
const weeksContainerHeight = (DAY_RANGE_SIZE + DAY_MARGIN * 2) * 6;
const DateRangePickerViewDesktopCalendar = styled(DayPicker)({
  minWidth: 312,
  minHeight: weeksContainerHeight
});
const DateRangePickerViewDesktopArrowSwitcher = styled(PickersArrowSwitcher)({
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

const deprecatedPropsWarning = buildDeprecatedPropsWarning('Props for translation are deprecated. See https://mui.com/x/react-date-pickers/localization for more information.');
/**
 * @ignore - internal component.
 */

export function DateRangePickerViewDesktop(props) {
  const {
    calendars,
    changeMonth,
    components,
    componentsProps,
    currentlySelectingRangeEnd,
    currentMonth,
    parsedValue,
    disableFuture,
    disablePast,
    leftArrowButtonText: leftArrowButtonTextProp,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onSelectedDaysChange,
    renderDay = (_, dateRangeProps) => /*#__PURE__*/_jsx(DateRangePickerDay, _extends({}, dateRangeProps)),
    rightArrowButtonText: rightArrowButtonTextProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  deprecatedPropsWarning({
    leftArrowButtonText: leftArrowButtonTextProp,
    rightArrowButtonText: rightArrowButtonTextProp
  });
  const localeText = useLocaleText();
  const leftArrowButtonText = leftArrowButtonTextProp ?? localeText.previousMonth;
  const rightArrowButtonText = rightArrowButtonTextProp ?? localeText.nextMonth;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const minDate = minDateProp ?? defaultDates.minDate;
  const maxDate = maxDateProp ?? defaultDates.maxDate;
  const [rangePreviewDay, setRangePreviewDay] = React.useState(null);
  const isNextMonthDisabled = useNextMonthDisabled(currentMonth, {
    disableFuture,
    maxDate
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(currentMonth, {
    disablePast,
    minDate
  });
  const previewingRange = calculateRangePreview({
    utils,
    range: parsedValue,
    newDate: rangePreviewDay,
    currentlySelectingRangeEnd
  });
  const handleSelectedDayChange = React.useCallback(day => {
    setRangePreviewDay(null);
    onSelectedDaysChange(day);
  }, [onSelectedDaysChange]);

  const handlePreviewDayChange = newPreviewRequest => {
    if (!isWithinRange(utils, newPreviewRequest, parsedValue)) {
      setRangePreviewDay(newPreviewRequest);
    } else {
      setRangePreviewDay(null);
    }
  };

  const CalendarTransitionProps = React.useMemo(() => ({
    onMouseLeave: () => setRangePreviewDay(null)
  }), []);
  const selectNextMonth = React.useCallback(() => {
    changeMonth(utils.getNextMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  const selectPreviousMonth = React.useCallback(() => {
    changeMonth(utils.getPreviousMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  return /*#__PURE__*/_jsx(DateRangePickerViewDesktopRoot, {
    children: getCalendarsArray(calendars).map((_, index) => {
      const monthOnIteration = utils.setMonth(currentMonth, utils.getMonth(currentMonth) + index);
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
          renderDay: (day, __, DayProps) => renderDay(day, _extends({
            isPreviewing: isWithinRange(utils, day, previewingRange),
            isStartOfPreviewing: isStartOfRange(utils, day, previewingRange),
            isEndOfPreviewing: isEndOfRange(utils, day, previewingRange),
            isHighlighting: isWithinRange(utils, day, parsedValue),
            isStartOfHighlighting: isStartOfRange(utils, day, parsedValue),
            isEndOfHighlighting: isEndOfRange(utils, day, parsedValue),
            onMouseEnter: () => handlePreviewDayChange(day)
          }, DayProps))
        }))]
      }, index);
    })
  });
}