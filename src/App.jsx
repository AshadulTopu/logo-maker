import { useState } from "react";
import Header from "./components/Header";
import SideBav from "./components/SideBav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import UpgradePlan from "./components/UpgradePlan";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState(1);
  return (
    <>
      <Header />
      <div className="fixed w-64">
        <SideBav selectedMenu={(value) => setSelectedMenu(value)} />
      </div>
      <div className="fixed ml-64 grid w-full grid-cols-6">
        {/* body */}
        <div className="col-span-2 h-screen overflow-y-auto border p-5 shadow-sm">
          {/* control plane  */}
          {selectedMenu === 1 && <IconController />}
          {selectedMenu === 2 && <BackgroundController />}
          {selectedMenu === 3 && <UpgradePlan />}
        </div>
        <div className="col-span-3">{/* icon preview */}</div>
        <div className="col-span-1">{/* ad  */}</div>
      </div>
    </>
  );
}
