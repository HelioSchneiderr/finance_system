import * as C from './style'
import { Item } from '../../types/Item'

type Props = {
    item: Item
}

export const TableItem = ({item}: Props) =>{
    return (
        <C.TableLine>
            <h1>knnkn</h1>
            <C.TableColumn>...</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R$ {item.value}</C.TableColumn>
        </C.TableLine>
    );
}