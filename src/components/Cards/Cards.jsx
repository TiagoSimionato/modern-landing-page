import Card from "./Card";

export function Cards({items, className, customTitleStyle, width }) {
  return (
    <ul className={className}>
      {items.map(item => <Card key={item.id} info={item} width={width} customTitleStyle={customTitleStyle}/>)}
    </ul>
  );
}
