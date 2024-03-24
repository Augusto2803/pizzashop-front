import { Separator } from "@radix-ui/react-separator";
import { Pizza } from "lucide-react";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" />
      </div>
    </div>
  );
}
