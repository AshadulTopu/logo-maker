import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between border p-4 shadow-sm">
      <div className="logo">
        <h1 className="text-5xl font-semibold">Logo</h1>
      </div>
      <Button className="flex items-center gap-2">
        <Download className="h-4 w-4" /> Download
      </Button>
    </header>
  );
}
