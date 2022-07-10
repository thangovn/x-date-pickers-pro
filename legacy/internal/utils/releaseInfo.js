import { ponyfillGlobal } from '@mui/utils';
export var getReleaseInfo = function getReleaseInfo() {
  var releaseInfo = "MTY1NzE0NDgwMDAwMA==";

  if (process.env.NODE_ENV !== 'production') {
    // A simple hack to set the value in the test environment (has no build step).
    // eslint-disable-next-line no-useless-concat
    if (releaseInfo === '__RELEASE' + '_INFO__') {
      // eslint-disable-next-line no-underscore-dangle
      return ponyfillGlobal.__MUI_RELEASE_INFO__;
    }
  }

  return releaseInfo;
};