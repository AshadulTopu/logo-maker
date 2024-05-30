// import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

export default function IconController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0,
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#ffffff",
  );
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  // console.log(icon);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      icon: icon,
      // icon: Smile,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
    };

    // Update context
    setUpdateStorage(updateValue);

    // Update localStorage
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [size, color, rotate, icon]);

  return (
    <div>
      {/* <div className="">
        <span>Icon</span>
        <div className="my-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-gray-200 p-3">
          <Smile />
        </div>
      </div> */}
      <IconList selectedIcon={(icon) => setIcon(icon)} showIcon={icon} />
      <div className="pb-4">
        <div className="flex items-center justify-between p-2">
          <span>size</span>
          <span>{size} px</span>
        </div>
        <Slider
          defaultValue={[size]}
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
          defaultValue={[rotate]}
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
