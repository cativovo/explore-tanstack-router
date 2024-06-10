type Card = {
  id: string;
  title: string;
  description: string;
  content: string;
  footer: string;
};

const cards: Card[] = Array.from({ length: 50 }, (_, i) => ({
  id: i.toString(),
  title: `title ${i}`,
  description: `description ${i}`,
  content: `content ${i}`,
  footer: `footer ${i}`,
}));

export default cards;
