"use server";
import {z} from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        title?: string[],
    },
    message?: string | null
}

const CreateBoardSchema = z.object({
    title: z.string().min(3, {
        message: "Minimum length of 3 letters is required"
    })
})

export const create = async (prevState: State, formData: FormData) => {
   const validatedFields = CreateBoardSchema.safeParse({
    title: formData.get("title")
   })

   if(!validatedFields.success){
    return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Missing fields."
    }
   }

   const { title } = validatedFields.data;

   try{
    await db.board.create({
      data: {
        title,
      },
    });
   } catch (error) {
    return {
        message: "Database Error"
    }
   }
    revalidatePath("/organization/org_2fh8OhcHoHzonMhNMsC4YT9bWWo");
    redirect("/organization/org_2fh8OhcHoHzonMhNMsC4YT9bWWo")
  };
