"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerViewMobile = DateRangePickerViewMobile;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _internals = require("@mui/x-date-pickers/internals");

var _utils = require("../internal/utils/utils");

var _DateRangePickerDay = require("../DateRangePickerDay");

var _dateUtils = require("../internal/utils/date-utils");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["changeMonth", "components", "componentsProps", "parsedValue", "leftArrowButtonText", "maxDate", "minDate", "onSelectedDaysChange", "renderDay", "rightArrowButtonText", "disabled", "readOnly"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const onlyDayView = ['day'];
/**
 * @ignore - internal component.
 */

function DateRangePickerViewMobile(props) {
  const {
    changeMonth,
    components,
    componentsProps,
    parsedValue,
    leftArrowButtonText,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onSelectedDaysChange,
    renderDay = (_, dayProps) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateRangePickerDay.DateRangePickerDay, (0, _extends2.default)({}, dayProps)),
    rightArrowButtonText,
    disabled,
    readOnly
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const utils = (0, _internals.useUtils)();
  const defaultDates = (0, _internals.useDefaultDates)();
  const minDate = minDateProp != null ? minDateProp : defaultDates.minDate;
  const maxDate = maxDateProp != null ? maxDateProp : defaultDates.maxDate; // When disable, limit the view to the selected range

  const [start, end] = parsedValue;
  const minDateWithDisabled = disabled && start || minDate;
  const maxDateWithDisabled = disabled && end || maxDate;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_internals.PickersCalendarHeader, (0, _extends2.default)({
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
    }, other)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_internals.DayPicker, (0, _extends2.default)({}, other, {
      minDate: minDate,
      maxDate: maxDate,
      disabled: disabled,
      readOnly: readOnly,
      selectedDays: parsedValue,
      onSelectedDaysChange: onSelectedDaysChange,
      onFocusedDayChange: _utils.doNothing,
      renderDay: (day, _, DayProps) => renderDay(day, (0, _extends2.default)({
        isPreviewing: false,
        isStartOfPreviewing: false,
        isEndOfPreviewing: false,
        isHighlighting: (0, _dateUtils.isWithinRange)(utils, day, parsedValue),
        isStartOfHighlighting: (0, _dateUtils.isStartOfRange)(utils, day, parsedValue),
        isEndOfHighlighting: (0, _dateUtils.isEndOfRange)(utils, day, parsedValue)
      }, DayProps))
    }))]
  });
}