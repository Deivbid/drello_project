"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCardModal } from "@/hooks/useCardModal";
import { fetcher } from "@/lib/fetcher";
import { CardWithlist } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Header } from "./Header";

export const CardModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);
  const { data: cardData, isLoading } = useQuery<CardWithlist>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {!cardData ? <Header.Skeleton /> : <Header data={cardData} />}
        {isLoading ? "Loading..." : cardData?.title}
      </DialogContent>
    </Dialog>
  );
};
