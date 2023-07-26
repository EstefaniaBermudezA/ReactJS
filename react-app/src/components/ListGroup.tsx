function ListGroup() {
  const items = ["New York"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">A item</li>
        <li className="list-group-item">Second item</li>
        <li className="list-group-item">Third item</li>
      </ul>
    </>
  );
}

export default ListGroup;
