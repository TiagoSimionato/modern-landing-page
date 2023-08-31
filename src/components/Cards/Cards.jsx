import Card from "./Card";

export function Cards({items, className}) {
  return (
    <ul className={className}>
      {items.map(item => <Card key={item.id} info={item} />)}
    </ul>
  );
}
