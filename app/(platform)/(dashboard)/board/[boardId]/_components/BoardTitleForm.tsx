"use client";

import { updateBoard } from "@/actions/update-board";
import { FormInput } from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/useAction";
import { Board } from "@prisma/client";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";

interface BoardTitleFormProps {
  data: Board;
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { execute } = useAction(updateBoard, {
    onSucess: (data) => {
      console.log("Hola ??");
      toast.success(`Board "${data.title}" updated!`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  const [title, setTitle] = useState<string>(data.title);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditiong = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef?.current?.focus();
      inputRef?.current?.select();
    });
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({
      title,
      id: data.id,
    });
  };

  const onBlur = () => {
    formRef?.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        className="flex items-center gap-x-2"
        ref={formRef}
      >
        <FormInput
          id="title"
          onBlur={onBlur}
          defaultValue={title}
          className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
          ref={inputRef}
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditiong}
      className="font-bold text-lg h-auto w-auto p-1 px-2"
      variant={"transparent"}
    >
      {title}
    </Button>
  );
};
