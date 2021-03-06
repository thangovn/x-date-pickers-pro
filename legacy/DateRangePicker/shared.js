import _extends from "@babel/runtime/helpers/esm/extends";
import { buildDeprecatedPropsWarning, useDefaultDates, useLocaleText, useUtils } from '@mui/x-date-pickers/internals';
import { useThemeProps } from '@mui/material/styles';
import { parseRangeInputValue } from '../internal/utils/date-utils';
var deprecatedPropsWarning = buildDeprecatedPropsWarning('Props for translation are deprecated. See https://mui.com/x/react-date-pickers/localization for more information.');
export function useDateRangePickerDefaultizedProps(props, name) {
  var _themeProps$startText, _themeProps$endText;

  var utils = useUtils();
  var defaultDates = useDefaultDates(); // This is technically unsound if the type parameters appear in optional props.
  // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

  var themeProps = useThemeProps({
    props: props,
    name: name
  });
  deprecatedPropsWarning({
    startText: themeProps.startText,
    endText: themeProps.endText
  });
  var localeText = useLocaleText();
  var startText = (_themeProps$startText = themeProps.startText) != null ? _themeProps$startText : localeText.start;
  var endText = (_themeProps$endText = themeProps.endText) != null ? _themeProps$endText : localeText.end;
  return _extends({
    calendars: 2,
    inputFormat: utils.formats.keyboardDate,
    minDate: defaultDates.minDate,
    maxDate: defaultDates.maxDate
  }, themeProps, {
    endText: endText,
    startText: startText
  });
}
export var dateRangePickerValueManager = {
  emptyValue: [null, null],
  getTodayValue: function getTodayValue(utils) {
    return [utils.date(), utils.date()];
  },
  parseInput: parseRangeInputValue,
  areValuesEqual: function areValuesEqual(utils, a, b) {
    return utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1]);
  }
};