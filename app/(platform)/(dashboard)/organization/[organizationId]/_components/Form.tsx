"use client";
import React from "react";

import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { useAction } from "@/hooks/useAction";
import { createBoard } from "@/actions/create-board";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSucess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col gap-y-2">
        <FormInput errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
};
