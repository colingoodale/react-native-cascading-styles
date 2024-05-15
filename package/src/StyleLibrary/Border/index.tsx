import { BorderRadius } from "./BorderRadius";
import { BorderWidth } from "./BorderWidth";
import { BorderStyles } from "./BorderStyles";
import { IndividualBorderSides } from "./IndividualBorderSides";
import { BorderRadiusAndSpecificSides } from "./BorderRadiusAndSpecificSides";

const Border = {
  ...BorderRadius,
  ...BorderWidth,
  ...BorderStyles,
  ...IndividualBorderSides,
  ...BorderRadiusAndSpecificSides,
};

export default Border;
