export default function lista02(){
  var lista = [];
  for(var i = 0; i <= 100; i++){
    lista.push(i);
  }
  return (
    <div>
      <h1>Lista de números</h1>
      <span>{lista.join(', ')}</span>
    </div>
  )
}