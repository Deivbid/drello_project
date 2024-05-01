import { deleteBoard } from "@/actions/delete-board";
import { FormDeleteButton } from "./FormDeleteButton";

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board Title: {title}</p>
      <FormDeleteButton />
    </form>
  );
};
