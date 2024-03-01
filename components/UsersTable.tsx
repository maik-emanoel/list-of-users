import { headers } from "next/headers";
import TableUsersRow from "./TableUsersRow";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "./ui/table";

export default async function UsersTable({ name }: { name: string | undefined }) {
  const nameParam = name !== undefined ? `?name=${name}` : ''
  const fetchUsers = await fetch(`${process.env.BASE_URL}/api/user${nameParam}`, {
    cache: "no-store",
  });

  const users = await fetchUsers.json();

  return (
    <Table>
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
