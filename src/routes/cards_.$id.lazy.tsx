import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import cards from "@/lib/cards";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";

export const Route = createFileRoute("/cards/$id")({
  component: CardRoute,
});

function CardRoute(): ReactNode {
  const { id } = Route.useParams();
  const card = cards.find((v) => v.id === id);

  if (!card) {
    return <p>card not found</p>;
  }

  return (
    <div>
      <button>
        <Link to="/cards">back</Link>
      </button>
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
    </div>
  );
}
