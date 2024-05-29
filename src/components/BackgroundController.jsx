import React, { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

export default function BackgroundController() {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState("#000000");

  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    // Update localStorage
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [rounded, color, padding]);

  return (
    <div>
      <div className="py-2">
        <div className="flex items-center justify-between p-2">
          <span>Rounded</span>
          <span>{rounded} px</span>
        </div>
        <Slider
          defaultValue={[0]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>
      <div className="py-2">
        <div className="flex items-center justify-between p-2">
          <span>Padding</span>
          <span>{padding} px</span>
        </div>
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>

      <div className="pb-4">
        <span>Icon Color</span>
        <ColorPickerController
          hideController={false}
          selectedColor={(value) => setColor(value)}
        />
      </div>
    </div>
  );
}
