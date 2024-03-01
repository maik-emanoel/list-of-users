import CreateUserDialog from "@/components/CreateUserDialog";
import Filter from "@/components/Filter";
import UsersTable from "@/components/UsersTable";

export default function Home({
  searchParams,
}: {
  searchParams: {
    name: string | undefined;
  };
}) {
  return (
    <div className="w-full h-full space-y-4">
      <header className="w-full flex justify-between">
        <h1 className="text-3xl font-bold">Users</h1>
      </header>

      <div className="flex justify-between">
        <Filter />
        <CreateUserDialog />
      </div>

      <UsersTable name={searchParams.name} />
    </div>
  );
}
