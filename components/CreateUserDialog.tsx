import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateUserForm from "./CreateUserForm";

export default function CreateUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Create new user
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle>Create new user</DialogTitle>

          <CreateUserForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
