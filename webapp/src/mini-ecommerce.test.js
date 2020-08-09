import React from 'react';
import { render } from '@testing-library/react';
import MiniEcommerce from './mini-ecommerce';

describe('Teste do componente Mini-ecommerce', ()=>{

  test('renders learn react link', () => {
    const { getByText } = render(<MiniEcommerce />);
    const linkElement = getByText(/checkout/i);
    expect(linkElement).toBeInTheDocument();
  });
  
})

