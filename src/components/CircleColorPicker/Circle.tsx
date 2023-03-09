import React from "react";
import InvertColor from "../../utils/invert-color";
import * as material from "material-colors";
import { CircleWrapper, CheckIcon } from "./styles";
import { ColorProps } from "./types";

const Circle = ({ color = material.black[50], selected, onChange }: ColorProps) => {
  const invertColor = InvertColor(color, true);
  return (
    <CircleWrapper onClick={() => onChange(color)} color={color}>
      {selected && <CheckIcon size={28} color={invertColor} />}
    </CircleWrapper>
  );
};

export default Circle;
