const Header = props => {
  const activeItems = props.items.filter(item => item.active);
  const number = activeItems.length;

  return (
    <header>
      <p>Anzahl der Artikel: {number}</p>
      <p>Zu zahlen: {number ? `${number * 10} Euro` : "-"}</p>
    </header>
  );
};
