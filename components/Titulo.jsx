export default function Titulo(props) {
  console.log(props)

  
  return props.pequeno ? (
    <>
      <p>{props.principal}</p>
      <p>{props.description}</p>
    </>
  ) : (
    <>
      <h1>{props.principal}</h1>
      <h2>{props.description}</h2>
    </>
  );
}