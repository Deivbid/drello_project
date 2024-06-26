"use client";

import { stripeRedirect } from "@/actions/stripe-redirect";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/useAction";
import { useProModal } from "@/hooks/useProModal";
import { toast } from "sonner";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const proModal = useProModal();
  const { execute, isLoading } = useAction(stripeRedirect, {
    onSucess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    if (isPro) {
      execute({});
    } else {
      proModal.onOpen();
    }
  };
  return (
    <Button onClick={onClick} variant="primary" disabled={isLoading}>
      {isPro ? "Manage Subscription" : "Upgrade to Pro"}
    </Button>
  );
};
