import CreateUserDialog from "@/components/CreateUserDialog";
import UsersTable from "@/components/UsersTable";

export default function Home() {
  return (
    <div className="w-full h-full">
      <header className="w-full flex justify-between">
        <h1 className="text-2xl">Users</h1>

        <CreateUserDialog />
      </header>

      <UsersTable />
    </div>
  );
}
