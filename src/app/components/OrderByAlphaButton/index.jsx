import React from 'react';

const OrderByAlphaButton = ({ onSort }) => {
    return (
        <button onClick={onSort}>Sortera alfabetiskt</button>
    );
};

export default OrderByAlphaButton;
