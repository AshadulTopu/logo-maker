import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

export default function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0,
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0,
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#000000",
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    // Update context
    setUpdateStorage(updateValue);

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
          defaultValue={[rounded]}
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
          defaultValue={[padding]}
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
