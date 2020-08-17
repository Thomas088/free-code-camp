class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Solution is here
    this.state = {
      name: 'test'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
