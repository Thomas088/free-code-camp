class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Solution is here */}
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

/* Solution is here */
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));