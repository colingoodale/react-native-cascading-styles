import { Positioning } from "./Positioning";
import { PositionTypes } from "./PositionTypes";
import { ZIndexUtility } from "./ZIndexUtility";

const Position = {
  ...Positioning,
  ...PositionTypes,
  ...ZIndexUtility,
};

export default Position;
