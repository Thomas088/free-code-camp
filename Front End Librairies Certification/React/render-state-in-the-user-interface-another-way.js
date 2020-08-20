class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Solution is here
  const name = this.state.name;
    return (
      <div>
        { /* Solution is here */ }
          <h1>{name}</h1>
      </div>
    );
  }
};
