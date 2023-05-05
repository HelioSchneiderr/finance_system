import * as C from './style'

export const InputArea = ()=>{
    return(
        <C.Container>
            <input type="date"/>
            <select name="select">
                <option value="valor1">Alimentação</option>
                <option value="valor2">Salário</option>
                <option value="valor3">Aluguel</option>
            </select>
            <input type="text"/>
            <button>Adicionar</button>
        </C.Container>
    )
}