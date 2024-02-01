import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";

export default function UsersTable() {
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
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>Maik Emanoel</TableCell>
          <TableCell>Dev Front-end</TableCell>
          <TableCell className="text-right">20</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
