import Card from "./Card";

export function Cards({items, className, customTitleStyle }) {
  return (
    <ul className={className}>
      {items.map(item => <Card key={item.id} info={item} customTitleStyle={customTitleStyle}/>)}
    </ul>
  );
}
