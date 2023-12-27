import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    const clear = () => {
        setResult('');
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator" style={calculatorStyle}>
            <input type="text" value={result} style={inputStyle} />
            <div className="keypad" style={keypadStyle}>
                {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '/'].map((item) => (
                    <button key={item} name={item.toString()} onClick={handleClick} style={buttonStyle}>
                        {item}
                    </button>
                ))}
                <button onClick={clear} style={clearButtonStyle}>
                    Clear
                </button>
                <button onClick={calculate} style={calculateButtonStyle}>
                    Calculate
                </button>
            </div>
        </div>
    );
};

const calculatorStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
    width: '95%',
    padding: '8px',
    marginBottom: '10px',
    fontSize: '18px',
};

const keypadStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
};

const buttonStyle = {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
};

const clearButtonStyle = {
    gridArea: 'span 2 / span 2',
    ...buttonStyle,
    background: '#ff6b6b',
    color: '#fff',
};

const calculateButtonStyle = {
    gridArea: 'span 2 / span 2',
    ...buttonStyle,
    background: '#63d471',
    color: '#fff',
};

export default Calculator;
