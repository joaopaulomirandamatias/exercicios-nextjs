export default function jsx04(){
  const numero = "#04"

  return (
    <div>
      <h1> JSX {numero}</h1>
      <h3>{entre(2.5, 2.5, 8.2)}</h3>
    </div>
    )
}


function entre(valor, min, max){
  if( valor >= min && valor <= max)
    return "SIM"
  else
    return "NÃO"
}