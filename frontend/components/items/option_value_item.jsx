import React from 'react';

const OptionValueItem = ({ val }) => {
    return val.map((selection, idx) => (
        <option key={idx} value={selection}>
            {selection}
        </option>
))};

export default OptionValueItem;