import React from 'react';
import { render } from '@testing-library/react';
import Checkout from './Checkout';  

describe('Teste do componente Checkout', () => {

    test('deve renderizar o componente sem erros', () => {
        const {getByText} = render(<Checkout />);
        const texto = getByText(/Checkout/i); //expressão regular buscando a palavra destacada (o 'i' representa um case insensitive).
        expect(texto).toBeInTheDocument(); 
    })

})
