// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                let expression = input;
                // Replace 'x%' with '/100*'
                expression = expression.replace(/%/g, '/100*');
                setResult(eval(expression).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '<') {
            setInput((prevInput) => prevInput.slice(0, -1));
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    // Listen for key presses
    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;
            // console.log(key);
            if (key === 'Enter') {
                handleButtonClick('=');
            } else if (key === 'Escape') {
                handleButtonClick('C');
            } else if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
                handleButtonClick(key);
            } else if (key === "Backspace") {
                setInput((prevInput) => prevInput.slice(0, -1));
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    console.log(result);

    return (
        <div className=' bg-[#ebeef1] mx-auto  flex justify-center items-center'>
            <div className="calc-body ">
                <input type="text" className='my-5 w-full py-5 text-right text-3xl' value={input} />
                <div className="result text-xl bg-white -my-[1.25rem] p-3">{result}</div>
                <div className="calc-button-grid grid grid-cols-4  lg:gap-x-10 lg:gap-y-0 gap-3 my-20">
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('7')}>7</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('8')}>8</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('9')}>9</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('/')}>/</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('4')}>4</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('5')}>5</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('6')}>6</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('*')}>*</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('1')}>1</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('2')}>2</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('3')}>3</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('-')}>-</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('<')}>{"<"}</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('0')}>0</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('C')}>C</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('+')}>+</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('.')}>.</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('%')}>%</button>
                    <button className="neumorphic-button lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] bg-[#ebeef1] cursor-pointer rounded-xl text-[#00a037]" onClick={() => handleButtonClick('=')}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
