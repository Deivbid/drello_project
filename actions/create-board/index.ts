"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoardSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth();
    
    if(!userId || !orgId) {
        return {
            error: "Unathorized"
        }
    }

    const { title, image } = data;

    const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] = image.split("|");

    if(!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHTML || !imageUserName) {
        return {
            error: "Missing fields. Failed to create board."
        }
    }

    let board;

    try {
        board = await db.board.create({
            data: {
                title,
                orgId,
                imageId,
                imageFullUrl,
                imageThumbUrl,
                imageLinkHTML,
                imageUserName
            }
        })
    } catch (error) {
        return {
            error: "Failed to create."
        }
    }

    revalidatePath(`/board/${board.id}`);
    return { data: board };
}

export const createBoard = createSafeAction(CreateBoardSchema, handler)