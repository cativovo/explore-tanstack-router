import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import cards from "@/lib/cards";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cards")({
  component: CardsRoute,
});

function CardsRoute(): JSX.Element {
  return (
    <>
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
      <Outlet />
    </>
  );
}
