export type ColorProps = {
  color: string;
  selected: boolean;
  onChange: (color: string) => void;
};

export type TColor = {
  hex: string;
  selected: boolean;
};

export type TColors = Array<TColor>;

export type TCircleColorProps = {
  onChange: (colors: string) => void;
  colors: TColors;
};
