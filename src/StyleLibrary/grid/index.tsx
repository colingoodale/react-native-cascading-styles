import { StyleSheet } from "react-native";

import { RowsAndColumns } from "./RowsAndColumns";
import { SpacingUtilies } from "./SpacingUtilities";
import { AlignmentUtilities } from "./AlignmentUtilities";

const GridStyles = {
  ...RowsAndColumns,
  ...SpacingUtilies,
  ...AlignmentUtilities,
};

export default GridStyles;
