import { useState } from "react";
import Header from "./components/Header";
import SideBav from "./components/SideBav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import UpgradePlan from "./components/UpgradePlan";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

export default function App() {
  const [downloadIcon, setDownloadIcon] = useState();
  const [selectedMenu, setSelectedMenu] = useState(1);

  const [updateStorage, setUpdateStorage] = useState({});
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>

      <Header downloadIcon={setDownloadIcon} />
      
      <div className="fixed w-64">
        <SideBav selectedMenu={(value) => setSelectedMenu(value)} />
      </div>
      <div className="ml-64 grid grid-cols-6">
        {/* body */}
        <div className="col-span-2 h-screen overflow-y-auto border p-5 shadow-sm">
          {/* control plane  */}
          {selectedMenu === 1 && <IconController />}
          {selectedMenu === 2 && <BackgroundController />}
          {selectedMenu === 3 && <UpgradePlan />}
        </div>
        <div className="col-span-3 border shadow-sm">
          {/* icon preview */}
          <LogoPreview downloadIcon={downloadIcon} />
        </div>
        <div className="col-span-1">
          {/* ad  */}
          advertise
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}
