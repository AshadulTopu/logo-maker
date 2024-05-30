import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function LogoPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  //   const colorFullIconUrl = `https://logoexpress.tubeguruji.com`;

  useEffect(() => {
    //   setStorageValue(JSON.parse(localStorage.getItem("value")));
    const storageData = JSON.parse(localStorage.getItem("value"));
    // console.log(storageData);
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadLogo();
    }
  }, [downloadIcon]);

  const downloadLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogoDiv, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: null,
    }).then((canvas) => {
      //   const link = document.createElement("a");
      //   link.download = "logo.png";
      //   link.href = canvas.toDataURL();
      //   link.click();
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "Ashadul_Topu_Logo.png";
      downloadLink.click();
    });
  };

  //   if (!storageValue) return <div>No value</div>;

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return (
      <LucidIcon
        size={size}
        color={color}
        style={{ transform: `rotate( ${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        id="downloadLogoDiv"
        className="h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            background: storageValue?.bgColor,
            // padding: storageValue?.bgPadding,
            borderRadius: storageValue?.bgRounded,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <img
              //   src={colorFullIconUrl + "/png/" + storageValue?.icon}
              src={"/png/" + storageValue?.icon}
              alt="icon"
              style={{
                height: storageValue?.iconSize,
                width: storageValue?.iconSize,
                transform: `rotate( ${storageValue?.iconRotate}deg)`,
                aspectRatio: 1,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
          {/* <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          /> */}
        </div>
      </div>
    </div>
  );
}
