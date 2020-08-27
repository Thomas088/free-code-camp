class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Solution is here
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  // Solution is here
  toggleVisibility(){
    this.setState(state => {
      state.visibility = !state.visibility;
    })
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
