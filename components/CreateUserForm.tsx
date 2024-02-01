"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function CreateUserForm() {
  const { register, handleSubmit } = useForm();

  function handleShowData(data: any) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleShowData)}>
      <div className="flex flex-col flex-wrap gap-4 pb-6">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input placeholder="Name" id="name" {...register("name")} required/>
        </div>

        <div className="flex gap-3">
          <div className="w-full">
            <label htmlFor="job" className="sr-only">
              Job
            </label>
            <Input placeholder="Job" id="job" {...register("job")} required/>
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
              {...register("age")}
              required
            />
          </div>
        </div>
      </div>

      <Button className="w-full" type="submit">
        Create
      </Button>
    </form>
  );
}
