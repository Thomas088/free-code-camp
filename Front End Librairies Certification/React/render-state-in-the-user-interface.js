class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Solution is here */ }
          <h1>{this.state.name}</h1>
      </div>
    );
  }
};
