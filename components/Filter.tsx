"use client";

import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSearchParams, useRouter } from "next/navigation";

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const urlFilter = params.get("name") ?? "";
  const [searchFilter, setSearchFilter] = useState(urlFilter);

  const handleFilter = useCallback(() => {
    params.set("name", searchFilter);
    router.replace(`?${params.toString()}`);
  }, [params, router, searchFilter]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchFilter(value);

    if (value === "") {
      params.delete("name");
      router.replace("/");
    }
  }

  useEffect(() => {
    function handleHotkey(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        handleFilter();
      }
    }

    if (searchFilter !== "") {
      window.addEventListener("keydown", handleHotkey);
    }

    return () => window.removeEventListener("keydown", handleHotkey);
  }, [handleFilter, searchFilter]);

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Search..."
        className="max-w-48"
        onChange={handleChange}
        value={searchFilter}
      />
      <Button type="button" variant="outline" onClick={handleFilter}>
        Filter
      </Button>
    </div>
  );
}
