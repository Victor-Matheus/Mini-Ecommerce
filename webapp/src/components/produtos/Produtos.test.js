import React from 'react';
import { render } from '@testing-library/react';
import Produtos from './Produtos';  

describe('Teste do componente Produtos', () => {

    test('deve renderizar o componente quando visível', () => {
        const {getAllByText} = render(
            <Produtos visivel={true} adicionarProduto={() => false}/>
        );
        const botoes = getAllByText(/comprar/i); 
        expect(botoes).toBeTruthy(); 
    })

})