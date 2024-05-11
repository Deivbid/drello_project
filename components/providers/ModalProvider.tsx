"use client";

import { useEffect, useState } from "react";
import { CardModal } from "../modals/CardModal";
import { ProModal } from "../modals/ProModal/ProModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};
