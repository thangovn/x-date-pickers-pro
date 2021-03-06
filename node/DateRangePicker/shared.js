"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateRangePickerValueManager = void 0;
exports.useDateRangePickerDefaultizedProps = useDateRangePickerDefaultizedProps;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _internals = require("@mui/x-date-pickers/internals");

var _styles = require("@mui/material/styles");

var _dateUtils = require("../internal/utils/date-utils");

const deprecatedPropsWarning = (0, _internals.buildDeprecatedPropsWarning)('Props for translation are deprecated. See https://mui.com/x/react-date-pickers/localization for more information.');

function useDateRangePickerDefaultizedProps(props, name) {
  var _themeProps$startText, _themeProps$endText;

  const utils = (0, _internals.useUtils)();
  const defaultDates = (0, _internals.useDefaultDates)(); // This is technically unsound if the type parameters appear in optional props.
  // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

  const themeProps = (0, _styles.useThemeProps)({
    props,
    name
  });
  deprecatedPropsWarning({
    startText: themeProps.startText,
    endText: themeProps.endText
  });
  const localeText = (0, _internals.useLocaleText)();
  const startText = (_themeProps$startText = themeProps.startText) != null ? _themeProps$startText : localeText.start;
  const endText = (_themeProps$endText = themeProps.endText) != null ? _themeProps$endText : localeText.end;
  return (0, _extends2.default)({
    calendars: 2,
    inputFormat: utils.formats.keyboardDate,
    minDate: defaultDates.minDate,
    maxDate: defaultDates.maxDate
  }, themeProps, {
    endText,
    startText
  });
}

const dateRangePickerValueManager = {
  emptyValue: [null, null],
  getTodayValue: utils => [utils.date(), utils.date()],
  parseInput: _dateUtils.parseRangeInputValue,
  areValuesEqual: (utils, a, b) => utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1])
};
exports.dateRangePickerValueManager = dateRangePickerValueManager;