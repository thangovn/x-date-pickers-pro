"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerViewDesktop = DateRangePickerViewDesktop;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _styles = require("@mui/material/styles");

var _internals = require("@mui/x-date-pickers/internals");

var _dateRangeManager = require("./date-range-manager");

var _DateRangePickerDay = require("../DateRangePickerDay");

var _dateUtils = require("../internal/utils/date-utils");

var _utils = require("../internal/utils/utils");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["calendars", "changeMonth", "components", "componentsProps", "currentlySelectingRangeEnd", "currentMonth", "parsedValue", "disableFuture", "disablePast", "leftArrowButtonText", "maxDate", "minDate", "onSelectedDaysChange", "renderDay", "rightArrowButtonText"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DateRangePickerViewDesktopRoot = (0, _styles.styled)('div')({
  display: 'flex',
  flexDirection: 'row'
});
const DateRangePickerViewDesktopContainer = (0, _styles.styled)('div')(({
  theme
}) => ({
  '&:not(:last-of-type)': {
    borderRight: `2px solid ${theme.palette.divider}`
  }
}));
const DAY_RANGE_SIZE = 40;
const weeksContainerHeight = (DAY_RANGE_SIZE + _internals.DAY_MARGIN * 2) * 6;
const DateRangePickerViewDesktopCalendar = (0, _styles.styled)(_internals.DayPicker)({
  minWidth: 312,
  minHeight: weeksContainerHeight
});
const DateRangePickerViewDesktopArrowSwitcher = (0, _styles.styled)(_internals.PickersArrowSwitcher)({
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

const deprecatedPropsWarning = (0, _internals.buildDeprecatedPropsWarning)('Props for translation are deprecated. See https://mui.com/x/react-date-pickers/localization for more information.');
/**
 * @ignore - internal component.
 */

function DateRangePickerViewDesktop(props) {
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
    renderDay = (_, dateRangeProps) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateRangePickerDay.DateRangePickerDay, (0, _extends2.default)({}, dateRangeProps)),
    rightArrowButtonText: rightArrowButtonTextProp
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  deprecatedPropsWarning({
    leftArrowButtonText: leftArrowButtonTextProp,
    rightArrowButtonText: rightArrowButtonTextProp
  });
  const localeText = (0, _internals.useLocaleText)();
  const leftArrowButtonText = leftArrowButtonTextProp != null ? leftArrowButtonTextProp : localeText.previousMonth;
  const rightArrowButtonText = rightArrowButtonTextProp != null ? rightArrowButtonTextProp : localeText.nextMonth;
  const utils = (0, _internals.useUtils)();
  const defaultDates = (0, _internals.useDefaultDates)();
  const minDate = minDateProp != null ? minDateProp : defaultDates.minDate;
  const maxDate = maxDateProp != null ? maxDateProp : defaultDates.maxDate;
  const [rangePreviewDay, setRangePreviewDay] = React.useState(null);
  const isNextMonthDisabled = (0, _internals.useNextMonthDisabled)(currentMonth, {
    disableFuture,
    maxDate
  });
  const isPreviousMonthDisabled = (0, _internals.usePreviousMonthDisabled)(currentMonth, {
    disablePast,
    minDate
  });
  const previewingRange = (0, _dateRangeManager.calculateRangePreview)({
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
    if (!(0, _dateUtils.isWithinRange)(utils, newPreviewRequest, parsedValue)) {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerViewDesktopRoot, {
    children: getCalendarsArray(calendars).map((_, index) => {
      const monthOnIteration = utils.setMonth(currentMonth, utils.getMonth(currentMonth) + index);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateRangePickerViewDesktopContainer, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerViewDesktopArrowSwitcher, {
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
        }), /*#__PURE__*/(0, React.createElement)(DateRangePickerViewDesktopCalendar, (0, _extends2.default)({}, other, {
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          key: index,
          selectedDays: parsedValue,
          onFocusedDayChange: _utils.doNothing,
          onSelectedDaysChange: handleSelectedDayChange,
          currentMonth: monthOnIteration,
          TransitionProps: CalendarTransitionProps,
          renderDay: (day, __, DayProps) => renderDay(day, (0, _extends2.default)({
            isPreviewing: (0, _dateUtils.isWithinRange)(utils, day, previewingRange),
            isStartOfPreviewing: (0, _dateUtils.isStartOfRange)(utils, day, previewingRange),
            isEndOfPreviewing: (0, _dateUtils.isEndOfRange)(utils, day, previewingRange),
            isHighlighting: (0, _dateUtils.isWithinRange)(utils, day, parsedValue),
            isStartOfHighlighting: (0, _dateUtils.isStartOfRange)(utils, day, parsedValue),
            isEndOfHighlighting: (0, _dateUtils.isEndOfRange)(utils, day, parsedValue),
            onMouseEnter: () => handlePreviewDayChange(day)
          }, DayProps))
        }))]
      }, index);
    })
  });
}