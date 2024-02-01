import CreateUserDialog from "@/components/CreateUserDialog";
import UsersTable from "@/components/UsersTable";

export default function Home() {
  return (
    <main className="pt-16 max-w-[700px] mx-auto min-h-screen flex flex-col items-center space-y-8">
      <header className="w-full flex justify-between">
        <h1 className="text-2xl">Users</h1>

        <CreateUserDialog />
      </header>

      <UsersTable />
    </main>
  );
}
