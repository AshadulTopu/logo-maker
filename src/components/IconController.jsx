import { Smile } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";

export default function IconController() {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState();

  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: "smile",
    };

    // Update localStorage
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [size, color, rotate]);

  return (
    <div>
      <div className="">
        <span>Icon</span>
        <div className="my-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-gray-200 p-3">
          <Smile />
        </div>
      </div>
      <div className="pb-4">
        <div className="flex items-center justify-between p-2">
          <span>size</span>
          <span>{size} px</span>
        </div>
        <Slider
          defaultValue={[280]}
          max={512}
          step={1}
          onValueChange={(event) => setSize(event[0])}
        />
      </div>

      <div className="pb-4">
        <div className="flex items-center justify-between p-2">
          <span>Rotate</span>
          <span>{rotate} ↻</span>
        </div>
        <Slider
          defaultValue={[0]}
          max={360}
          step={1}
          onValueChange={(event) => setRotate(event[0])}
        />
      </div>

      <div className="pb-4">
        <span>Icon Color</span>
        <ColorPickerController
          hideController={true}
          selectedColor={(value) => setColor(value)}
        />
      </div>
    </div>
  );
}
