"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerView = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _xLicensePro = require("@mui/x-license-pro");

var _internals = require("@mui/x-date-pickers/internals");

var _dateUtils = require("../internal/utils/date-utils");

var _dateRangeManager = require("./date-range-manager");

var _DateRangePickerToolbar = require("./DateRangePickerToolbar");

var _DateRangePickerViewMobile = require("./DateRangePickerViewMobile");

var _DateRangePickerInput = require("./DateRangePickerInput");

var _DateRangePickerViewDesktop = require("./DateRangePickerViewDesktop");

var _releaseInfo = require("../internal/utils/releaseInfo");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["calendars", "className", "currentlySelectingRangeEnd", "parsedValue", "DateInputProps", "defaultCalendarMonth", "disableAutoMonthSwitching", "disableFuture", "disableHighlightToday", "disablePast", "endText", "isMobileKeyboardViewOpen", "maxDate", "minDate", "onDateChange", "onMonthChange", "open", "reduceAnimations", "setCurrentlySelectingRangeEnd", "shouldDisableDate", "showToolbar", "startText", "toggleMobileKeyboardView", "toolbarFormat", "toolbarTitle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const releaseInfo = (0, _releaseInfo.getReleaseInfo)();

/**
 * @ignore - internal component.
 */
function DateRangePickerViewRaw(props) {
  const {
    calendars,
    className,
    currentlySelectingRangeEnd,
    parsedValue,
    DateInputProps,
    defaultCalendarMonth,
    disableAutoMonthSwitching = false,
    disableFuture,
    disableHighlightToday,
    disablePast,
    endText,
    isMobileKeyboardViewOpen,
    maxDate,
    minDate,
    onDateChange,
    onMonthChange,
    open,
    reduceAnimations = _internals.defaultReduceAnimations,
    setCurrentlySelectingRangeEnd,
    shouldDisableDate,
    showToolbar,
    startText,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarTitle
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const utils = (0, _internals.useUtils)();
  const wrapperVariant = React.useContext(_internals.WrapperVariantContext);
  const [start, end] = parsedValue;
  const {
    changeMonth,
    calendarState,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    changeFocusedDay
  } = (0, _internals.useCalendarState)({
    date: start || end,
    defaultCalendarMonth,
    disableFuture,
    disablePast,
    disableSwitchToMonthOnDayFocus: true,
    maxDate,
    minDate,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate
  });
  const toShowToolbar = showToolbar != null ? showToolbar : wrapperVariant !== 'desktop';

  const scrollToDayIfNeeded = day => {
    if (!day || !utils.isValid(day) || isDateDisabled(day)) {
      return;
    }

    const currentlySelectedDate = currentlySelectingRangeEnd === 'start' ? start : end;

    if (currentlySelectedDate === null) {
      // do not scroll if one of ages is not selected
      return;
    }

    const displayingMonthRange = wrapperVariant === 'mobile' ? 0 : calendars - 1;
    const currentMonthNumber = utils.getMonth(calendarState.currentMonth);
    const requestedMonthNumber = utils.getMonth(day);

    if (!utils.isSameYear(calendarState.currentMonth, day) || requestedMonthNumber < currentMonthNumber || requestedMonthNumber > currentMonthNumber + displayingMonthRange) {
      const newMonth = currentlySelectingRangeEnd === 'start' ? currentlySelectedDate : // If need to focus end, scroll to the state when "end" is displaying in the last calendar
      utils.addMonths(currentlySelectedDate, -displayingMonthRange);
      changeMonth(newMonth);
    }
  };

  React.useEffect(() => {
    if (disableAutoMonthSwitching || !open) {
      return;
    }

    scrollToDayIfNeeded(currentlySelectingRangeEnd === 'start' ? start : end);
  }, [currentlySelectingRangeEnd, parsedValue]); // eslint-disable-line

  const handleSelectedDayChange = React.useCallback(newDate => {
    const {
      nextSelection,
      newRange
    } = (0, _dateRangeManager.calculateRangeChange)({
      newDate,
      utils,
      range: parsedValue,
      currentlySelectingRangeEnd
    });
    setCurrentlySelectingRangeEnd(nextSelection);
    const isFullRangeSelected = currentlySelectingRangeEnd === 'end' && (0, _dateUtils.isRangeValid)(utils, newRange);
    onDateChange(newRange, wrapperVariant, isFullRangeSelected ? 'finish' : 'partial');
  }, [currentlySelectingRangeEnd, parsedValue, onDateChange, setCurrentlySelectingRangeEnd, utils, wrapperVariant]);

  const renderView = () => {
    const sharedCalendarProps = (0, _extends2.default)({
      parsedValue,
      changeFocusedDay,
      onSelectedDaysChange: handleSelectedDayChange,
      reduceAnimations,
      disableHighlightToday,
      onMonthSwitchingAnimationEnd,
      changeMonth,
      currentlySelectingRangeEnd,
      disableFuture,
      disablePast,
      minDate,
      maxDate,
      shouldDisableDate
    }, calendarState, other);

    switch (wrapperVariant) {
      case 'desktop':
        {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateRangePickerViewDesktop.DateRangePickerViewDesktop, (0, _extends2.default)({
            calendars: calendars
          }, sharedCalendarProps));
        }

      default:
        {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateRangePickerViewMobile.DateRangePickerViewMobile, (0, _extends2.default)({}, sharedCalendarProps));
        }
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_xLicensePro.Watermark, {
      packageName: "x-date-pickers-pro",
      releaseInfo: releaseInfo
    }), toShowToolbar && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateRangePickerToolbar.DateRangePickerToolbar, {
      parsedValue: parsedValue,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText,
      toolbarTitle: toolbarTitle,
      toolbarFormat: toolbarFormat
    }), isMobileKeyboardViewOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_internals.MobileKeyboardInputView, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateRangePickerInput.DateRangePickerInput, (0, _extends2.default)({
        disableOpenPicker: true,
        ignoreInvalidInputs: true
      }, DateInputProps))
    }) : renderView()]
  });
}

const DateRangePickerView = DateRangePickerViewRaw;
exports.DateRangePickerView = DateRangePickerView;
process.env.NODE_ENV !== "production" ? DateRangePickerViewRaw.propTypes = {
  calendars: _propTypes.default.oneOf([1, 2, 3]),
  disableAutoMonthSwitching: _propTypes.default.bool
} : void 0;