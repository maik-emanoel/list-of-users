import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditUserForm from "./EditUserForm";

export default function EditUserDialog({
  user,
}: {
  user: { id: number; name: string; job: string; age: number } | null;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit user</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle>Edit user</DialogTitle>

          <EditUserForm user={user} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
