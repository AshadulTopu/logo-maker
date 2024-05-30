import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function Header({ downloadIcon }) {
  return (
    <header className="flex items-center justify-between border p-4 shadow-sm">
      <div className="logo">
        <h1 className="text-5xl font-semibold">Logo</h1>
      </div>
      <Button
        className="flex items-center gap-2"
        onClick={() => downloadIcon(Date.now())}
      >
        <Download className="h-4 w-4" /> Download
      </Button>
    </header>
  );
}
