import React, { useState } from 'react';
import './Form.css';

const Form = ({searchMakeup}) => {
    const [userInput, setUserInput] = useState('');
    const updateForm = (event) => {
        setUserInput(event.target.value.toLowerCase())
    }

    const filterSearchMakeup = (event) => {
        event.preventDefault();
        searchMakeup(userInput);
        setUserInput('');
    }
    return (
        <form className='search-form'>
            <input
                type='text'
                placeholder='Search Makeup'
                value={userInput}
                onChange={updateForm}
                aria-label='Search Makeup Items'
                aria-required='true'
            >
            </input>
            <button onClick={filterSearchMakeup} className='search-button'>Search</button>
        </form>
    )
}

export default Form;