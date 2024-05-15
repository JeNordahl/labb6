import React from 'react';

const OrderByGradeButton = ({ onSort }) => {
    return (
        <button onClick={onSort}>Sortera efter betyg</button>
    );
};

export default OrderByGradeButton;
