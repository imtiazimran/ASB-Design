// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [isDark, setIsDark] = useState(true)

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                let expression = input;

                // Replace 'x%' with '/100*'
                expression = expression.replace(/(\d+(\.\d+)?)(%)/g, '($1/100)*');

                // Calculate the result
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


    return (
        <div className={` mx-auto h-screen relative lg:pt-20 ${isDark ? "bg-slate-900 text-white" : "bg-[#ebeef1]"} flex justify-center items-center`}>
            <span onClick={() => setIsDark(!isDark)} className='absolute top-1 left-1/2 p-2'>
                {
                    isDark ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>

                }
            </span>
            <div className="calc-body my-5">
                <input type="text" className={`my-5 w-full ${isDark ? "bg-slate-800 text-white  focus:border-b-0" : "bg-white"} py-3 text-right text-3xl`} value={input} />
                <div className={`result text-xl ${isDark ? "bg-slate-800 text-white focus:border-t-0 " : "bg-white"}  -my-[1.25rem] p-3`}>{result}</div>
                <div className="calc-button-grid grid grid-cols-4  lg:gap-x-10 lg:gap-y-0 gap-3 my-20">
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('7')}>7</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('8')}>8</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('9')}>9</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('/')}>/</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('4')}>4</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('5')}>5</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('6')}>6</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('*')}>*</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('1')}>1</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('2')}>2</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('3')}>3</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('-')}>-</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('<')}>{"<"}</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('0')}>0</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('C')}>C</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('+')}>+</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('.')}>.</button>
                    <button className={`lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px] lg:w-[150px] ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('%')}>%</button>
                    <button className={`col-span-2 lg:text-[20px] p-2 lg:m-[12px] lg:p-[20px]   ${isDark ? "bg-slate-900 dark-btn" : "bg-[#ebeef1] neumorphic-button"} cursor-pointer rounded-xl text-[#00a037]`} onClick={() => handleButtonClick('=')}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
