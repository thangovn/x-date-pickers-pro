"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _styles = require("@mui/material/styles");

var _internals = require("@mui/x-date-pickers/internals");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["currentlySelectingRangeEnd", "disableOpenPicker", "endText", "onBlur", "onChange", "open", "openPicker", "rawValue", "rawValue", "readOnly", "renderInput", "setCurrentlySelectingRangeEnd", "startText", "TextFieldProps", "validationError"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DateRangePickerInputRoot = (0, _styles.styled)('div')(({
  theme
}) => ({
  display: 'flex',
  alignItems: 'baseline',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

/**
 * @ignore - internal component.
 */
const DateRangePickerInput = /*#__PURE__*/React.forwardRef(function DateRangePickerInput(props, ref) {
  const {
    currentlySelectingRangeEnd,
    disableOpenPicker,
    endText,
    onBlur,
    onChange,
    open,
    openPicker,
    rawValue: [start, end],
    readOnly,
    renderInput,
    setCurrentlySelectingRangeEnd,
    startText,
    TextFieldProps,
    validationError: [startValidationError, endValidationError]
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const utils = (0, _internals.useUtils)();
  const startRef = React.useRef(null);
  const endRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) {
      return;
    }

    if (currentlySelectingRangeEnd === 'start') {
      var _startRef$current;

      (_startRef$current = startRef.current) == null ? void 0 : _startRef$current.focus();
    } else if (currentlySelectingRangeEnd === 'end') {
      var _endRef$current;

      (_endRef$current = endRef.current) == null ? void 0 : _endRef$current.focus();
    }
  }, [currentlySelectingRangeEnd, open]); // TODO: rethink this approach. We do not need to wait for calendar to be updated to rerender input (looks like freezing)
  // TODO: so simply break 1 react's commit phase in 2 (first for input and second for calendars) by executing onChange in the next tick

  const lazyHandleChangeCallback = React.useCallback((...args) => (0, _internals.executeInTheNextEventLoopTick)(() => onChange(...args)), [onChange]);

  const handleStartChange = (date, inputString) => {
    lazyHandleChangeCallback([date, utils.date(end)], inputString);
  };

  const handleEndChange = (date, inputString) => {
    lazyHandleChangeCallback([utils.date(start), date], inputString);
  };

  const openRangeStartSelection = () => {
    if (setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('start');
    }

    if (!readOnly && !disableOpenPicker) {
      openPicker();
    }
  };

  const openRangeEndSelection = () => {
    if (setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('end');
    }

    if (!readOnly && !disableOpenPicker) {
      openPicker();
    }
  };

  const focusOnRangeEnd = () => {
    if (open && setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('end');
    }
  };

  const focusOnRangeStart = () => {
    if (open && setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('start');
    }
  };

  const startInputProps = (0, _internals.useMaskedInput)((0, _extends2.default)({}, other, {
    readOnly,
    rawValue: start,
    onChange: handleStartChange,
    label: startText,
    validationError: startValidationError !== null,
    TextFieldProps: (0, _extends2.default)({}, TextFieldProps, {
      ref: startRef,
      focused: open && currentlySelectingRangeEnd === 'start'
    }),
    inputProps: {
      onClick: openRangeStartSelection,
      onKeyDown: (0, _internals.onSpaceOrEnter)(openRangeStartSelection),
      onFocus: focusOnRangeStart
    }
  }));
  const endInputProps = (0, _internals.useMaskedInput)((0, _extends2.default)({}, other, {
    readOnly,
    label: endText,
    rawValue: end,
    onChange: handleEndChange,
    validationError: endValidationError !== null,
    TextFieldProps: (0, _extends2.default)({}, TextFieldProps, {
      ref: endRef,
      focused: open && currentlySelectingRangeEnd === 'end'
    }),
    inputProps: {
      onClick: openRangeEndSelection,
      onKeyDown: (0, _internals.onSpaceOrEnter)(openRangeEndSelection),
      onFocus: focusOnRangeEnd
    }
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DateRangePickerInputRoot, {
    onBlur: onBlur,
    ref: ref,
    children: renderInput(startInputProps, endInputProps)
  });
});
exports.DateRangePickerInput = DateRangePickerInput;