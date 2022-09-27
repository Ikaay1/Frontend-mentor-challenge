import React, {useState} from 'react';

const CalculatorContainer = ({children: Children}) => {
    const [inputValue, setInputValue] = useState('0');

    const handleChangeInputValue = (value) => {
        if (inputValue === '0') {
            setInputValue(value);
        } else {
            setInputValue((prevInputValue) => prevInputValue + value);
        }
    };

    const handleSolve = () => {
        const solvedValue = eval(inputValue);
        setInputValue(solvedValue);
    };

    const handleReset = () => {
        setInputValue('0');
    };

    const handleDelete = () => {
        if (inputValue.length > 0 && inputValue !== '0') {
            if (inputValue.length === 1) {
                setInputValue('0');
            } else {
                setInputValue((prevInputValue) =>
                    prevInputValue.slice(0, prevInputValue.length - 1),
                );
            }
        }
    };

    if (React.isValidElement(<Children />)) {
        return (
            <Children
                inputValue={inputValue}
                handleChangeInputValue={handleChangeInputValue}
                handleSolve={handleSolve}
                handleReset={handleReset}
                handleDelete={handleDelete}
            />
        );
    } else {
        return <Children />;
    }
};

export default CalculatorContainer;
