import variable from "./../variables/platform";
import commonColor from '../variables/commonColor';

export default (variables = variable) => {
  const pickerTheme = {
    ".note": {
      color: commonColor.brandSecondary
    },
    width: 90,
    marginRight: -4
  };

  return pickerTheme;
};
