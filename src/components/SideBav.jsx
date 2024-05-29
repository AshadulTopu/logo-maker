import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";

export default function SideBav({ selectedMenu }) {
  const [activeMenu, setActiveMenu] = useState(1);
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  return (
    <div>
      <div className="h-screen border shadow-sm">
        {menuList.map((menu) => (
          <span
            className={`my-2 flex cursor-pointer items-center gap-2 p-2 px-7 text-lg text-gray-500 hover:bg-primary hover:text-white ${activeMenu === menu.id && "bg-primary text-white"}`}
            key={menu.id}
            onClick={() => {
              setActiveMenu(menu.id);
              selectedMenu(menu.id);
            }}
          >
            <menu.icon />
            {menu.name}
          </span>
        ))}
      </div>
    </div>
  );
}
