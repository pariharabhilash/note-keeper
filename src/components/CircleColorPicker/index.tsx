import React from "react";
import { Wrapper } from "./styles";
import Circle from "./Circle";
import { TCircleColorProps, TColor, TColors } from "./types";

export const colors = [
  { hex: "#FFFFFF", selected: true },
  { hex: "#D1A2DA", selected: false },
  { hex: "#5B9DDD", selected: false },
  { hex: "#FFD540", selected: false },
  { hex: "#FF899F", selected: false },
  { hex: "#EBC9F2", selected: false },
  { hex: "#93D7FD", selected: false },
  { hex: "#9ADB4C", selected: false },
  { hex: "#E3EC4F", selected: false },
];

const CircleColorPicker = ({
  colors: colorsList,
  onChange,
}: TCircleColorProps) => {
  const [currentColors, setCurrentColors] = React.useState<TColors>(
    colorsList || colors
  );
  const onChangeColor = (colorHex: string) => {
    const updatedColors = currentColors.map((color: TColor) => {
      color.selected = color.hex === colorHex;
      return color;
    });
    setCurrentColors([...updatedColors]);
    onChange && onChange(colorHex);
  };
  return (
    <Wrapper>
      {currentColors.map((color) => (
        <Circle
          key={color.hex}
          onChange={onChangeColor}
          selected={color.selected}
          color={color.hex}
        />
      ))}
    </Wrapper>
  );
};

export default CircleColorPicker;
