import _extends from "@babel/runtime/helpers/esm/extends";
import { buildDeprecatedPropsWarning, useDefaultDates, useLocaleText, useUtils } from '@mui/x-date-pickers/internals';
import { useThemeProps } from '@mui/material/styles';
import { parseRangeInputValue } from '../internal/utils/date-utils';
const deprecatedPropsWarning = buildDeprecatedPropsWarning('Props for translation are deprecated. See https://mui.com/x/react-date-pickers/localization for more information.');
export function useDateRangePickerDefaultizedProps(props, name) {
  var _themeProps$startText, _themeProps$endText;

  const utils = useUtils();
  const defaultDates = useDefaultDates(); // This is technically unsound if the type parameters appear in optional props.
  // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

  const themeProps = useThemeProps({
    props,
    name
  });
  deprecatedPropsWarning({
    startText: themeProps.startText,
    endText: themeProps.endText
  });
  const localeText = useLocaleText();
  const startText = (_themeProps$startText = themeProps.startText) != null ? _themeProps$startText : localeText.start;
  const endText = (_themeProps$endText = themeProps.endText) != null ? _themeProps$endText : localeText.end;
  return _extends({
    calendars: 2,
    inputFormat: utils.formats.keyboardDate,
    minDate: defaultDates.minDate,
    maxDate: defaultDates.maxDate
  }, themeProps, {
    endText,
    startText
  });
}
export const dateRangePickerValueManager = {
  emptyValue: [null, null],
  getTodayValue: utils => [utils.date(), utils.date()],
  parseInput: parseRangeInputValue,
  areValuesEqual: (utils, a, b) => utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1])
};