import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { icons } from "lucide-react";
import { useEffect, useState } from "react";
import { iconList } from "./constants/icons";

export default function IconList({ selectedIcon, showIcon }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [colorFullIconList, setColorFullIconList] = useState([]);
  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return <LucidIcon size={size} color={color} />;
  };

  const colorFullIconUrl = `https://logoexpress.tubeguruji.com`;

  const getColorIconList = async () => {
    try {
      const response = await axios.get(colorFullIconUrl + "/getIcons.php");
      //   console.log(response.data);
      setColorFullIconList(response.data);
      //   return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getColorIconList();
  }, []);

  return (
    <div>
      <div className="">
        <span>Icon</span>
        <div
          className="my-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-gray-200 p-3"
          onClick={() => setOpenDialog(true)}
        >
          {/* <Smile /> */}
          {showIcon?.includes(".png") ? (
            <img
              src={colorFullIconUrl + "/png/" + showIcon}
              alt="icon"
              className="h-[36px] w-[36px]"
            />
          ) : (
            <Icon name={showIcon} color={"#000000"} size={24} />
          )}
          {/* <Icon name={showIcon} color={"#000000"} size={24} /> */}
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose an icon</DialogTitle>

            <Tabs defaultValue="b_w">
              <TabsList>
                <TabsTrigger value="b_w">Black and White Icon</TabsTrigger>
                <TabsTrigger value="c_i">Colorful Icon</TabsTrigger>
              </TabsList>
              <TabsContent value="b_w">
                <div className="grid max-h-[500px] grid-cols-6 gap-2 overflow-auto">
                  {iconList.map((icon, index) => (
                    <div
                      className="h-[50px] w-[50px] cursor-pointer rounded-sm bg-gray-300 p-3 duration-300 hover:bg-gray-200"
                      key={index}
                      onClick={() => {
                        setOpenDialog(false);
                        selectedIcon(icon);
                      }}
                    >
                      <Icon name={icon} color={"#000000"} size={24} />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="c_i">
                <div className="grid max-h-[500px] grid-cols-6 gap-2 overflow-auto">
                  {colorFullIconList.map((icon, index) => (
                    <div
                      className="h-[50px] w-[50px] cursor-pointer rounded-sm bg-gray-300 p-3 duration-300 hover:bg-gray-200"
                      key={index}
                      onClick={() => {
                        setOpenDialog(false);
                        selectedIcon(icon);
                      }}
                    >
                      <img src={colorFullIconUrl + "/png/" + icon} alt={icon} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
