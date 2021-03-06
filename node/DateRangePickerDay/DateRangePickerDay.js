"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerDay = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _xLicensePro = require("@mui/x-license-pro");

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _internals = require("@mui/x-date-pickers/internals");

var _PickersDay = require("@mui/x-date-pickers/PickersDay");

var _dateRangePickerDayClasses = require("./dateRangePickerDayClasses");

var _releaseInfo = require("../internal/utils/releaseInfo");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["className", "day", "outsideCurrentMonth", "isEndOfHighlighting", "isEndOfPreviewing", "isHighlighting", "isPreviewing", "isStartOfHighlighting", "isStartOfPreviewing", "selected"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const releaseInfo = (0, _releaseInfo.getReleaseInfo)();

const useUtilityClasses = ownerState => {
  const {
    isHighlighting,
    outsideCurrentMonth,
    isStartOfHighlighting,
    isStartOfMonth,
    isEndOfHighlighting,
    isEndOfMonth,
    isPreviewing,
    isStartOfPreviewing,
    isEndOfPreviewing,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root', isHighlighting && !outsideCurrentMonth && 'rangeIntervalDayHighlight', (isStartOfHighlighting || isStartOfMonth) && 'rangeIntervalDayHighlightStart', (isEndOfHighlighting || isEndOfMonth) && 'rangeIntervalDayHighlightEnd'],
    rangeIntervalPreview: ['rangeIntervalPreview', isPreviewing && !outsideCurrentMonth && 'rangeIntervalDayPreview', (isStartOfPreviewing || isStartOfMonth) && 'rangeIntervalDayPreviewStart', (isEndOfPreviewing || isEndOfMonth) && 'rangeIntervalDayPreviewEnd'],
    day: ['day', !selected && 'notSelectedDate', !isHighlighting && 'dayOutsideRangeInterval', !selected && isHighlighting && 'dayInsideRangeInterval']
  };
  return (0, _material.unstable_composeClasses)(slots, _dateRangePickerDayClasses.getDateRangePickerDayUtilityClass, classes);
};

const endBorderStyle = {
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '50%'
};
const startBorderStyle = {
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '50%'
};
const DateRangePickerDayRoot = (0, _styles.styled)('div', {
  name: 'MuiDateRangePickerDay',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  [`&:first-of-type .${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayPreview}`]: (0, _extends2.default)({}, startBorderStyle, {
    borderLeftColor: theme.palette.divider
  }),
  [`&:last-of-type .${_dateRangePickerDayClasses.dateRangePickerDayClasses.rangeIntervalDayPreview}`]: (0, _extends2.default)({}, endBorderStyle, {
    borderRightColor: theme.palette.divider
  })
}, ownerState.isHighlighting && !ownerState.outsideCurrentMonth && {
  borderRadius: 0,
  color: theme.palette.primary.contrastText,
  backgroundColor: (0, _styles.alpha)(theme.palette.primary.light, 0.6),
  '&:first-of-type': startBorderStyle,
  '&:last-of-type': endBorderStyle
}, (ownerState.isStartOfHighlighting || ownerState.isStartOfMonth) && (0, _extends2.default)({}, startBorderStyle, {
  paddingLeft: 0,
  marginLeft: _internals.DAY_MARGIN / 2
}), (ownerState.isEndOfHighlighting || ownerState.isEndOfMonth) && (0, _extends2.default)({}, endBorderStyle, {
  paddingRight: 0,
  marginRight: _internals.DAY_MARGIN / 2
})));
DateRangePickerDayRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: _propTypes.default.object.isRequired
};
const DateRangePickerDayRangeIntervalPreview = (0, _styles.styled)('div', {
  name: 'MuiDateRangePickerDay',
  slot: 'RangeIntervalPreview'
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  // replace default day component margin with transparent border to avoid jumping on preview
  border: '2px solid transparent'
}, ownerState.isPreviewing && !ownerState.outsideCurrentMonth && (0, _extends2.default)({
  borderRadius: 0,
  border: `2px dashed ${theme.palette.divider}`,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent'
}, (ownerState.isStartOfPreviewing || ownerState.isStartOfMonth) && (0, _extends2.default)({
  borderLeftColor: theme.palette.divider
}, startBorderStyle), (ownerState.isEndOfPreviewing || ownerState.isEndOfMonth) && (0, _extends2.default)({
  borderRightColor: theme.palette.divider
}, endBorderStyle))));
DateRangePickerDayRangeIntervalPreview.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: _propTypes.default.object.isRequired
};
const DateRangePickerDayDay = (0, _styles.styled)(_PickersDay.PickersDay, {
  name: 'MuiDateRangePickerDay',
  slot: 'Day'
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  // Required to overlap preview border
  transform: 'scale(1.1)',
  '& > *': {
    transform: 'scale(0.9)'
  }
}, !ownerState.selected && {
  backgroundColor: 'transparent'
}, !ownerState.isHighlighting && {
  '&:hover': {
    border: `1px solid ${theme.palette.grey[500]}`
  }
}, !ownerState.selected && ownerState.isHighlighting && {
  color: theme.palette.getContrastText((0, _styles.alpha)(theme.palette.primary.light, 0.6))
}));
const DateRangePickerDayRaw = /*#__PURE__*/React.forwardRef(function DateRangePickerDay(props, ref) {
  const {
    className,
    day,
    outsideCurrentMonth,
    isHighlighting,
    isPreviewing,
    selected = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  (0, _xLicensePro.useLicenseVerifier)('x-date-pickers-pro', releaseInfo);
  const utils = (0, _internals.useUtils)();
  const isEndOfMonth = utils.isSameDay(day, utils.endOfMonth(day));
  const isStartOfMonth = utils.isSameDay(day, utils.startOfMonth(day));
  const shouldRenderHighlight = isHighlighting && !outsideCurrentMonth;
  const shouldRenderPreview = isPreviewing && !outsideCurrentMonth;
  const ownerState = (0, _extends2.default)({}, props, {
    selected,
    isStartOfMonth,
    isEndOfMonth
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerDayRoot, {
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerDayRangeIntervalPreview, {
      role: "cell",
      className: classes.rangeIntervalPreview,
      ownerState: ownerState,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerDayDay, (0, _extends2.default)({}, other, {
        ref: ref,
        disableMargin: true,
        day: day,
        selected: selected,
        outsideCurrentMonth: outsideCurrentMonth,
        className: classes.day,
        ownerState: ownerState
      }))
    })
  });
});
process.env.NODE_ENV !== "production" ? DateRangePickerDayRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * The date to show.
   */
  day: _propTypes.default.any.isRequired,

  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: _propTypes.default.bool,

  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: _propTypes.default.bool,
  isAnimating: _propTypes.default.bool,

  /**
   * Set to `true` if the `day` is the end of a highlighted date range.
   */
  isEndOfHighlighting: _propTypes.default.bool.isRequired,

  /**
   * Set to `true` if the `day` is the start of a highlighted date range.
   */
  isEndOfPreviewing: _propTypes.default.bool.isRequired,

  /**
   * Set to `true` if the `day` is in a highlighted date range.
   */
  isHighlighting: _propTypes.default.bool.isRequired,

  /**
   * Set to `true` if the `day` is in a preview date range.
   */
  isPreviewing: _propTypes.default.bool.isRequired,

  /**
   * Set to `true` if the `day` is the start of a highlighted date range.
   */
  isStartOfHighlighting: _propTypes.default.bool.isRequired,

  /**
   * Set to `true` if the `day` is the end of a highlighted date range.
   */
  isStartOfPreviewing: _propTypes.default.bool.isRequired,
  onDayFocus: _propTypes.default.func,
  onDaySelect: _propTypes.default.func.isRequired,

  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: _propTypes.default.bool.isRequired,

  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: _propTypes.default.bool,

  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: _propTypes.default.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: _propTypes.default.bool
} : void 0;

const propsAreEqual = (prevProps, nextProps) => {
  return prevProps.isHighlighting === nextProps.isHighlighting && prevProps.isEndOfHighlighting === nextProps.isEndOfHighlighting && prevProps.isStartOfHighlighting === nextProps.isStartOfHighlighting && prevProps.isPreviewing === nextProps.isPreviewing && prevProps.isEndOfPreviewing === nextProps.isEndOfPreviewing && prevProps.isStartOfPreviewing === nextProps.isStartOfPreviewing && (0, _internals.areDayPropsEqual)(prevProps, nextProps);
};
/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [DateRangePickerDay API](https://mui.com/x/api/date-pickers/date-range-picker-day/)
 */


const DateRangePickerDay = /*#__PURE__*/React.memo(DateRangePickerDayRaw, propsAreEqual);
exports.DateRangePickerDay = DateRangePickerDay;