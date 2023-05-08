import * as C from './style'
import { Item } from '../../types/Item'
import { items } from '../../data/items'

type Props = {
    list: Item[],
}

export const InputArea = ({list}:Props)=>{
    
    const handleSubmit = ({event}: string)=>{
        items.push({
            date: event.target.value,
        })
    }
    
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