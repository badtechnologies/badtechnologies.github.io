"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-96 mx-auto flex flex-col text-center items-center gap-8 my-12">
      <h1 className="text-3xl font-semibold">
        The page you're looking for can't be found.
      </h1>
      <div className="flex gap-2">
        <Button
          color="primary"
          radius="full"
          className="w-28"
          onPress={() => window.history.back()}
        >
          Go back
        </Button>
        <Button
          color="primary"
          radius="full"
          className="w-28"
          variant="bordered"
          as={Link}
          href="/"
        >
          Go home
        </Button>
      </div>
    </div>
  );
}
