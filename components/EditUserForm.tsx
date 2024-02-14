"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

export default function EditUserForm({
  user,
}: {
  user: { id: number; name: string; job: string; age: number } | null;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const { toast } = useToast();

  async function handleEditUserData(data: any) {
    const dataWithUserId = {
      id: user?.id,
      ...data,
    };

    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithUserId),
      });

      console.log(await response.json());
      router.replace("/");
      router.refresh();
      toast({ title: "User edited successfully", className: "bg-green-600" });
    } catch (error) {
      console.log("Error to edit user", error);
      toast({ title: "Error to edit user" });
    }
  }

  return (
    <form onSubmit={handleSubmit(handleEditUserData)}>
      <div className="flex flex-col flex-wrap gap-4 pb-6">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input
            placeholder="Name"
            id="name"
            {...register("name", { required: true, value: user?.name })}
          />
          {errors.name?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs mt-1">
              Name is required
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <div className="w-full">
            <label htmlFor="job" className="sr-only">
              Job
            </label>
            <Input
              placeholder="Job"
              id="job"
              {...register("job", { required: true, value: user?.job })}
            />
            {errors.job?.type === "required" && (
              <p role="alert" className="text-red-500 text-xs mt-1">
                Job is required
              </p>
            )}
          </div>
          <div className="w-auto">
            <label htmlFor="age" className="sr-only">
              Age
            </label>
            <Input
              placeholder="Age"
              id="age"
              type="number"
              min={1}
              {...register("age", { required: true, value: user?.age })}
            />
            {errors.age?.type === "required" && (
              <p role="alert" className="text-red-500 text-xs mt-1">
                Age is required
              </p>
            )}
          </div>
        </div>
      </div>

      <Button className="w-full" type="submit">
        Save
      </Button>
    </form>
  );
}
