import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["calendars", "className", "currentlySelectingRangeEnd", "parsedValue", "DateInputProps", "defaultCalendarMonth", "disableAutoMonthSwitching", "disableFuture", "disableHighlightToday", "disablePast", "endText", "isMobileKeyboardViewOpen", "maxDate", "minDate", "onDateChange", "onMonthChange", "open", "reduceAnimations", "setCurrentlySelectingRangeEnd", "shouldDisableDate", "showToolbar", "startText", "toggleMobileKeyboardView", "toolbarFormat", "toolbarTitle"];
import * as React from 'react';
import PropTypes from 'prop-types';
import { Watermark } from '@mui/x-license-pro';
import { useUtils, WrapperVariantContext, MobileKeyboardInputView, defaultReduceAnimations, useCalendarState } from '@mui/x-date-pickers/internals';
import { isRangeValid } from '../internal/utils/date-utils';
import { calculateRangeChange } from './date-range-manager';
import { DateRangePickerToolbar } from './DateRangePickerToolbar';
import { DateRangePickerViewMobile } from './DateRangePickerViewMobile';
import { DateRangePickerInput } from './DateRangePickerInput';
import { DateRangePickerViewDesktop } from './DateRangePickerViewDesktop';
import { getReleaseInfo } from '../internal/utils/releaseInfo';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var releaseInfo = getReleaseInfo();

/**
 * @ignore - internal component.
 */
function DateRangePickerViewRaw(props) {
  var calendars = props.calendars,
      className = props.className,
      currentlySelectingRangeEnd = props.currentlySelectingRangeEnd,
      parsedValue = props.parsedValue,
      DateInputProps = props.DateInputProps,
      defaultCalendarMonth = props.defaultCalendarMonth,
      _props$disableAutoMon = props.disableAutoMonthSwitching,
      disableAutoMonthSwitching = _props$disableAutoMon === void 0 ? false : _props$disableAutoMon,
      disableFuture = props.disableFuture,
      disableHighlightToday = props.disableHighlightToday,
      disablePast = props.disablePast,
      endText = props.endText,
      isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
      maxDate = props.maxDate,
      minDate = props.minDate,
      onDateChange = props.onDateChange,
      onMonthChange = props.onMonthChange,
      open = props.open,
      _props$reduceAnimatio = props.reduceAnimations,
      reduceAnimations = _props$reduceAnimatio === void 0 ? defaultReduceAnimations : _props$reduceAnimatio,
      setCurrentlySelectingRangeEnd = props.setCurrentlySelectingRangeEnd,
      shouldDisableDate = props.shouldDisableDate,
      showToolbar = props.showToolbar,
      startText = props.startText,
      toggleMobileKeyboardView = props.toggleMobileKeyboardView,
      toolbarFormat = props.toolbarFormat,
      toolbarTitle = props.toolbarTitle,
      other = _objectWithoutProperties(props, _excluded);

  var utils = useUtils();
  var wrapperVariant = React.useContext(WrapperVariantContext);

  var _parsedValue = _slicedToArray(parsedValue, 2),
      start = _parsedValue[0],
      end = _parsedValue[1];

  var _useCalendarState = useCalendarState({
    date: start || end,
    defaultCalendarMonth: defaultCalendarMonth,
    disableFuture: disableFuture,
    disablePast: disablePast,
    disableSwitchToMonthOnDayFocus: true,
    maxDate: maxDate,
    minDate: minDate,
    onMonthChange: onMonthChange,
    reduceAnimations: reduceAnimations,
    shouldDisableDate: shouldDisableDate
  }),
      changeMonth = _useCalendarState.changeMonth,
      calendarState = _useCalendarState.calendarState,
      isDateDisabled = _useCalendarState.isDateDisabled,
      onMonthSwitchingAnimationEnd = _useCalendarState.onMonthSwitchingAnimationEnd,
      changeFocusedDay = _useCalendarState.changeFocusedDay;

  var toShowToolbar = showToolbar != null ? showToolbar : wrapperVariant !== 'desktop';

  var scrollToDayIfNeeded = function scrollToDayIfNeeded(day) {
    if (!day || !utils.isValid(day) || isDateDisabled(day)) {
      return;
    }

    var currentlySelectedDate = currentlySelectingRangeEnd === 'start' ? start : end;

    if (currentlySelectedDate === null) {
      // do not scroll if one of ages is not selected
      return;
    }

    var displayingMonthRange = wrapperVariant === 'mobile' ? 0 : calendars - 1;
    var currentMonthNumber = utils.getMonth(calendarState.currentMonth);
    var requestedMonthNumber = utils.getMonth(day);

    if (!utils.isSameYear(calendarState.currentMonth, day) || requestedMonthNumber < currentMonthNumber || requestedMonthNumber > currentMonthNumber + displayingMonthRange) {
      var newMonth = currentlySelectingRangeEnd === 'start' ? currentlySelectedDate : // If need to focus end, scroll to the state when "end" is displaying in the last calendar
      utils.addMonths(currentlySelectedDate, -displayingMonthRange);
      changeMonth(newMonth);
    }
  };

  React.useEffect(function () {
    if (disableAutoMonthSwitching || !open) {
      return;
    }

    scrollToDayIfNeeded(currentlySelectingRangeEnd === 'start' ? start : end);
  }, [currentlySelectingRangeEnd, parsedValue]); // eslint-disable-line

  var handleSelectedDayChange = React.useCallback(function (newDate) {
    var _calculateRangeChange = calculateRangeChange({
      newDate: newDate,
      utils: utils,
      range: parsedValue,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd
    }),
        nextSelection = _calculateRangeChange.nextSelection,
        newRange = _calculateRangeChange.newRange;

    setCurrentlySelectingRangeEnd(nextSelection);
    var isFullRangeSelected = currentlySelectingRangeEnd === 'end' && isRangeValid(utils, newRange);
    onDateChange(newRange, wrapperVariant, isFullRangeSelected ? 'finish' : 'partial');
  }, [currentlySelectingRangeEnd, parsedValue, onDateChange, setCurrentlySelectingRangeEnd, utils, wrapperVariant]);

  var renderView = function renderView() {
    var sharedCalendarProps = _extends({
      parsedValue: parsedValue,
      changeFocusedDay: changeFocusedDay,
      onSelectedDaysChange: handleSelectedDayChange,
      reduceAnimations: reduceAnimations,
      disableHighlightToday: disableHighlightToday,
      onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
      changeMonth: changeMonth,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      disableFuture: disableFuture,
      disablePast: disablePast,
      minDate: minDate,
      maxDate: maxDate,
      shouldDisableDate: shouldDisableDate
    }, calendarState, other);

    switch (wrapperVariant) {
      case 'desktop':
        {
          return /*#__PURE__*/_jsx(DateRangePickerViewDesktop, _extends({
            calendars: calendars
          }, sharedCalendarProps));
        }

      default:
        {
          return /*#__PURE__*/_jsx(DateRangePickerViewMobile, _extends({}, sharedCalendarProps));
        }
    }
  };

  return /*#__PURE__*/_jsxs("div", {
    className: className,
    children: [/*#__PURE__*/_jsx(Watermark, {
      packageName: "x-date-pickers-pro",
      releaseInfo: releaseInfo
    }), toShowToolbar && /*#__PURE__*/_jsx(DateRangePickerToolbar, {
      parsedValue: parsedValue,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText,
      toolbarTitle: toolbarTitle,
      toolbarFormat: toolbarFormat
    }), isMobileKeyboardViewOpen ? /*#__PURE__*/_jsx(MobileKeyboardInputView, {
      children: /*#__PURE__*/_jsx(DateRangePickerInput, _extends({
        disableOpenPicker: true,
        ignoreInvalidInputs: true
      }, DateInputProps))
    }) : renderView()]
  });
}

export var DateRangePickerView = DateRangePickerViewRaw;
process.env.NODE_ENV !== "production" ? DateRangePickerViewRaw.propTypes = {
  calendars: PropTypes.oneOf([1, 2, 3]),
  disableAutoMonthSwitching: PropTypes.bool
} : void 0;