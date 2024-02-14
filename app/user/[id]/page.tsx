import EditUserDialog from "@/components/EditUserDialog";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";

export default async function User({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const userId = params.id;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });

  return (
    <div className="w-full h-full">
      <header className="w-full flex justify-between">
        <h1 className="text-2xl first-letter:uppercase">User, {user?.name}</h1>

        <EditUserDialog user={user} />
      </header>

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
          <TableRow>
            <TableCell className="font-medium">{user?.id}</TableCell>
            <TableCell>{user?.name}</TableCell>
            <TableCell>{user?.job}</TableCell>
            <TableCell className="text-right">{user?.age}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
