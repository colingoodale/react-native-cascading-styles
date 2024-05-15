import { CustomUtilities } from "./CustomUtilities";
import { FontSize } from "./FontSize";
import { FontStyles } from "./FontStyles";
import { FontWeights } from "./FontWeights";
import { TextDecorations } from "./TextDecorations";
import { TextAlignment } from "./TextAlignment";

export const Typography = {
  ...CustomUtilities,
  ...FontSize,
  ...FontStyles,
  ...FontWeights,
  ...TextDecorations,
  ...TextAlignment,
};

export default Typography;
