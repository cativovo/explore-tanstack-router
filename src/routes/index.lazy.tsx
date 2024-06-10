import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import cards from "@/lib/cards";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: IndexRoute,
});

export function IndexRoute(): ReactNode {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {cards.map((card) => (
        <Link
          key={card.id}
          to={`/cards/${card.id}/modal`}
          mask={{ to: `/cards/${card.id}` }}
        >
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
        </Link>
      ))}
    </div>
  );
}
