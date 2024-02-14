"use client";

import { useRouter } from "next/navigation";
import { TableCell, TableRow } from "./ui/table";
import { useToast } from "./ui/use-toast";
import { TrashIcon } from "@radix-ui/react-icons";

interface UserProps {
  users: {
    id: number;
    name: string;
    job: string;
    age: number;
  }[];
}

export default function TableUsersRow({ users }: UserProps) {
  const router = useRouter();
  const { toast } = useToast();

  async function handleDeleteUser(userId: number) {
    try {
      const response = await fetch("/api/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userId),
      });

      console.log(await response.json());
      router.refresh();
      toast({ title: "User deleted successfully", variant: "destructive" });
    } catch (error) {
      console.log("Error to delete user", error);
      toast({ title: "Error to delete user", variant: "destructive" });
    }
  }

  return (
    <>
      {users.map((user) => {
        return (
          <TableRow
            key={user.id}
            onClick={() => router.push(`/user/${user.id}`)}
          >
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.job}</TableCell>
            <TableCell className="text-right">{user.age}</TableCell>
            <TableCell>
              <TrashIcon
                className="mx-auto size-5 cursor-pointer"
                onClick={() => handleDeleteUser(user.id)}
              />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
