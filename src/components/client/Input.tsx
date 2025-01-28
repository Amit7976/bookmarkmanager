import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="bookmark_file">Bookmark File</Label>
      <Input id="bookmark_file" type="file" />
    </div>
  );
}
