import React, { useState } from 'react'

import dollar from '../assets/images/icon-dollar.svg'
import person from '../assets/images/icon-person.svg'

const Card = () => {

    const [billAmount, setBillAmount] = useState('');
    const [tipAmount, setTipAmount] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    // we call calculateTipAndTotal() function every time the value of percentage CHANGES!
    const handleBillAmountChange = (event) => {
        setBillAmount(event.target.value);
    }

    const handleTipPercentageChange = (percentage) => {
        setTipPercentage(percentage);
        calculateTipAndTotal(percentage);
    }

    const handleNumberOfPeople = (event) => {
        setNumberOfPeople(event.target.value);
    }

    const handleCustomTipChange = (event) => {
        setTipPercentage(event.target.value);
        calculateTipAndTotal(event.target.value);
    }

    const calculateTipAndTotal = (percentage) => {
        const bill = parseFloat(billAmount);
        const tipPercent = parseFloat(percentage) / 100;
        const people = parseFloat(numberOfPeople);
    
        // Check if any of the input values are invalid
        if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people === 0) {
            console.error("Invalid input values");
            return;
        }
    
        const tip = bill * tipPercent;
        const total = (bill + tip) / people;
    
        setTipAmount(tip);
        setTotalPerPerson(total);
    } 
    
    const reset = () => {
        setBillAmount('');
        setNumberOfPeople('');
        setTipPercentage(0);
        setTipAmount(0);
        setTotalPerPerson(0);
    }

    return (
        <div className='flex flex-col justify-center items-center mr-20'>
            <p className='font-mono font-bold text-[24px] text-secondary tracking-widest'>SPLI</p>
            <p className='font-mono font-bold mb-20 text-[24px] text-secondary tracking-widest'>TTER</p>

            <div className='shadow-md rounded-lg p-6 mb-10 ml-2 flex w-full bg-white'>

                {/*First column*/}
                <div className='flex flex-col justify-center items-start mr-10'>
                    <p className='font-mono mb-4 text-tertiary text-[15px]'>Bill</p>
                    <div className='flex flex-row w-full'>
                        <img src={dollar} alt="Dollar Icon" className="w-fit h-5 mr-2 mt-2 justify-center" />
                        <input
                            type="text"
                            value={billAmount}
                            onChange={handleBillAmountChange}
                            className='bg-very-light-grayish-cyan rounded-sm border-none placeholder-left p-1 mb-10 font-mono text-[15px] w-full h-10'
                        />
                    </div>

                    <p className='font-mono mb-4 text-tertiary'>Select Tip %</p>
                    <div className='flex flex-row justify-between'>
                        <button onClick={() => handleTipPercentageChange(5)} className='bg-secondary font-mono font-bold text-white text-[20px] mr-3 w-28'>5%</button>
                        <button onClick={() => handleTipPercentageChange(10)} className='bg-secondary font-mono font-bold text-white text-[20px] mr-3 w-28'>10%</button>
                        <button onClick={() => handleTipPercentageChange(15)} className='bg-secondary font-mono font-bold text-white text-[20px] mr-3 w-28'>15%</button>
                    </div>
                    <div className='flex flex-row justify-between mt-3'>
                        <button onClick={() => handleTipPercentageChange(25)} className='bg-secondary font-mono font-bold text-white text-[20px] mr-3 w-28 h-14'>25%</button>
                        <button onClick={() => handleTipPercentageChange(50)} className='bg-secondary font-mono font-bold text-white text-[20px] mr-3 w-28 h-14'>50%</button>
                        <input
                            type="number"
                            min="0"
                            value={tipPercentage}
                            onChange={handleCustomTipChange}
                            className='bg-very-light-grayish-cyan rounded-lg border-none p-1 mb-10 font-mono font-bold text-[15px] w-28 h-14 text-center'
                            placeholder="%"
                        />
                    </div>

                    <p className='font-mono mb-4 mt-10 text-tertiary text-[15px]'>Number of people</p>
                    <div className='flex flex-row w-full'>
                        <img src={person} alt="Dollar Icon" className="w-5 h-5 mr-2 mt-2 justify-center" />
                        <input
                            type="text"
                            value={numberOfPeople}
                            onChange={handleNumberOfPeople}
                            className='bg-very-light-grayish-cyan placeholder-left p-1 mb-10 font-mono text-[15px] w-full h-10'
                        />
                    </div>
                </div>


                {/*Second column*/}
                <div className='flex flex-col items-center justify-start bg-secondary rounded-lg w-full'>
                    <div className='flex flex-row w-full mt-10 mr-10 ml-16'>
                        <div className='flex flex-col mt-6 ml-10'>
                            <p className='font-mono font-bold text-light-grayish-cyan text-[14px]'>Tip Amount</p>
                            <p className='font-mono font-bold text-light-grayish-cyan text-[14px]'>/ person</p>
                        </div>

                        <div className='ml-20 mt-2 items-center'>
                            <p className='text-primary font-mono font-bold text-[45px]'>{tipAmount}</p>
                        </div>
                    </div>

                    <div className='flex flex-row w-full mt-10 mr-10 ml-16'>
                        <div className='flex flex-col mt-6 ml-10'>
                            <p className='font-mono font-bold text-light-grayish-cyan text-[14px]'>Total</p>
                            <p className='font-mono font-bold text-light-grayish-cyan text-[14px]'>/ person</p>
                        </div>

                        <div className='ml-20 mt-2 items-center'>
                            <p className='text-primary font-mono font-bold text-[45px]'>{totalPerPerson}</p>
                        </div>
                    </div>

                    <div className='mt-32'>
                        <button onClick={reset} className='bg-primary font-mono font-bold text-[20px] text-secondary w-fit'>RESET</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card