import { useState } from 'react';
import React from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';

const App = () => {

  const [list, setList] = useState(items)
  const [currentMonth, setCurrentMonth] = useState();

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          <h1>Sistema Financeiro</h1>
        </C.HeaderText>
      </C.Header>
      <C.Body>

        {/*Information Area*/}

        {/* Insert Area*/}

        {/*Item Table*/}

      </C.Body>
      
    </C.Container>
  );
}

export default App