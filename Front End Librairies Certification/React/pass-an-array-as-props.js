const List = (props) => {
  { /* Solution is here */ }
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Solution is here */ }
        <List tasks={[1,2,3]}/>
        <h2>Tomorrow</h2>
        { /* Solution is here */ }
        <List tasks={[4,5,6]}/>
      </div>
    );
  }
};
