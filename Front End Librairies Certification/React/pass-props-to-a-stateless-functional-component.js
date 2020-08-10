const CurrentDate = (props) => {
  return (
    <div>
      { /* Solution is here */ }
        <p>The current date is: {props.date} </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Solution is here */ }
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};
