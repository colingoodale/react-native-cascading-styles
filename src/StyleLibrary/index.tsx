import React from "react";
import { StyleSheet } from "react-native";

import CommonComponentStyles from "./common-component-styles";
import GridStyles from "./grid";
import Typography from "./Typography";
import Border from "./Border";
import Position from "./Position";
import VisibilityOpacity from "./Visibility-Opacity";
import Shadow from "./Shadow";
import Animation from "./Animation";

const StyleLibrary = {
  ...CommonComponentStyles,
  ...GridStyles,
  ...Typography,
  ...Border,
  ...Position,
  ...VisibilityOpacity,
  ...Shadow,
  ...Animation,
};

export default StyleLibrary;
