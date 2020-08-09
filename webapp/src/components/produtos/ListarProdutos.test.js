import React from 'react';
import { render } from '@testing-library/react';
import ListarProdutos from './ListarProdutos';  

describe('Teste do componente ListarProdutos', () => {

    test('deve renderizar o componente sem erros', () => {
        const {getByText} = render(<ListarProdutos />);
        const texto = getByText(/Comprar/i); //expressão regular buscando a palavra destacada (o 'i' representa um case insensitive).
        expect(texto).toBeInTheDocument(); 
    })

})