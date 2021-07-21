import Titulo from '../../components/Titulo'

export default function usandoTitulo(){
  return (
    <div>
      <Titulo
        principal="Página de Cadastro"
        description="Incluir, alterar e excluir"
      />
      <Titulo
        principal="Página de Perfil"
        description="Dados do usuário"
        pequeno={true}
      />
      <Titulo
        principal="Página de Perfil"
        description="Dados do usuário"
        pequeno={false}
      />
      <Titulo
        principal="Página de Perfil"
        description="Dados do usuário"
        pequeno
      />
    </div>
  )
}