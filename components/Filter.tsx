'use client'

import { ChangeEvent  , useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSearchParams, useRouter } from "next/navigation";

export default function Filter() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const urlFilter = params.get("name") ?? ''
  const [searchFilter, setSearchFilter] = useState(urlFilter)

  function handleFilter() {
    params.set('name', searchFilter)
    router.replace(`?${params.toString()}`)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearchFilter(value)

    if (value === '') {
      params.delete('name')
      router.replace('/')
    }
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." className="max-w-48" onChange={handleChange} value={searchFilter} />
      <Button type="button" variant="outline" onClick={handleFilter}>
        Filter
      </Button>
    </div>
  );
}
