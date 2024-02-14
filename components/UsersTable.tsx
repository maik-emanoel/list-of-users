import TableUsersRow from "./TableUsersRow";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "./ui/table";
import { prisma } from "@/lib/prisma";

export default async function UsersTable() {
  const users = await prisma.user.findMany()

  return (
    <Table className="mt-4">
      <TableCaption>A list of your users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Job</TableHead>
          <TableHead className="text-right">Age</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableUsersRow users={users} />
      </TableBody>
    </Table>
  );
}
