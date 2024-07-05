import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import cards from "@/lib/cards";
import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import { ReactNode } from "react";

export const Route = createLazyFileRoute("/cards/$id/modal")({
  component: CardRouteModal,
});

function CardRouteModal(): ReactNode {
  const router = useRouter();
  const { id } = Route.useParams();
  const card = cards.find((v) => v.id === id);

  function handleClose(): void {
    router.history.back();
  }

  return (
    <Dialog defaultOpen onOpenChange={handleClose}>
      <DialogContent>
        {!card ? (
          <p>card not found</p>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
            <CardFooter>
              <p>{card.footer}</p>
            </CardFooter>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
}
