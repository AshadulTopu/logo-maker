import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export default function ColorPickerController({
  hideController = false,
  selectedColor,
}) {
  const [color, setColor] = useState("rgba(255,255,255,1)");

  return (
    <ColorPicker
      value={color}
      onChange={(e) => {
        setColor(e);
        selectedColor(e);
      }}
      hideControls={hideController}
    />
  );
}
