import { StyleSheet } from "react-native";

export const AlignmentUtilities = StyleSheet.create({
  // Justification Utilities (along the main axis)
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  justifySpaceAround: {
    justifyContent: "space-around",
  },
  justifySpaceEvenly: {
    justifyContent: "space-evenly",
  },

  // Alignment Utilities (along the cross axis)
  alignStart: {
    alignItems: "flex-start",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  alignStretch: {
    alignItems: "stretch",
  },

  // Flex Wrap Utilities
  noWrap: {
    flexWrap: "nowrap",
  },
  wrap: {
    flexWrap: "wrap",
  },

  // Alignment for Flex Direction Row (Cross Axis)
  alignContentStart: {
    alignContent: "flex-start",
  },
  alignContentCenter: {
    alignContent: "center",
  },
  alignContentEnd: {
    alignContent: "flex-end",
  },
  alignContentSpaceBetween: {
    alignContent: "space-between",
  },
  alignContentSpaceAround: {
    alignContent: "space-around",
  },
  alignContentStretch: {
    alignContent: "stretch",
  },

  // Flex Grow and Shrink Utilities
  flexGrow: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },

  // Self Alignment (for individual item alignment)
  selfStart: {
    alignSelf: "flex-start",
  },
  selfCenter: {
    alignSelf: "center",
  },
  selfEnd: {
    alignSelf: "flex-end",
  },
  selfStretch: {
    alignSelf: "stretch",
  },
});
