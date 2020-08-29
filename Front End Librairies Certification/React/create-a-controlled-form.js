class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    // Solution is here
    event.preventDefault();
    this.setState({
        input: '',
        submit: this.state.input
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* Solution is here */ }
          <input value={this.state.input} 
                 onChange={this.handleChange}/>
          <button type='submit'>Submit!</button>
        </form>
          { /* Solution is here */ }
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};
