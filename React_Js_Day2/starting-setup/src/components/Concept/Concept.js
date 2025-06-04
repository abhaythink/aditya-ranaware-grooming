function Concept(props) {
  return (<li className="concept">
    <h1>Hello</h1>
    <img src={props.concepts.image} alt={props.concepts.title} />
    <h2>{props.concepts.title}</h2>
    <p>{props.concepts.description}</p>
  </li>);
}
export default Concept;
