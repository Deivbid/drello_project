"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/useMobileSidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";

export const MobileSidebar = () => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathName, onClose]);

  if (!isMounted) return false;

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="w-4 h-4" />
      </Button>

      <Sheet open={isOpen}>
        <SheetClose onClick={onClose}>Hola</SheetClose>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="d-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};
