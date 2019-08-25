class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Kartoffeln", active: false },
      { id: 2, name: "Milch", active: false },
      { id: 3, name: "Tee", active: false },
      { id: 4, name: "Kaffee", active: false },
      { id: 5, name: "Brot", active: false },
      { id: 6, name: "Eier", active: false }
    ]
  };

  handleChangeStatus = id => {
    console.log(id);

    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    // this.setState({ items });
    this.setState({ items: items });
  };

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
