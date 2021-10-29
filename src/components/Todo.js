function Todo(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3>{props.job}</h3>
      <button className="btn" onClick={() => props.fun(true)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
