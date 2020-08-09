import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';  

describe('Teste do componente Menu', () => {

    test('deve renderizar o componente sem erros', () => {
        const {getByText} = render(<Menu />);
        const texto = getByText(/Ecommerce/i); //expressão regular buscando a palavra destacada (o 'i' representa um case insensitive).
        expect(texto).toBeInTheDocument(); 
    })

})