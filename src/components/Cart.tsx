import React from 'react';

const Cart: React.FC = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
        </table>
    );
}

export default Cart;