import * as React from 'react';

const ComboBox = () => {
    return (
        <div>
            <select style={{
                borderRadius: '50px',
                fontSize: '16px',
                height: '30px',
                margin: '0 10px',
            }}>
                <option value="0">Select component</option>
                <option>Component A</option>
                <option>Component B</option>
                <option>Component C</option>
                <option>Component D</option>
            </select>
            <button style={{
                backgroundColor: '#db514b',
                border: 'none',
                borderRadius: '5px',
                color: 'white',
                fontSize: '16px',
                height: '30px',
            }}>Add</button>
        </div>
    );
}

export default ComboBox;