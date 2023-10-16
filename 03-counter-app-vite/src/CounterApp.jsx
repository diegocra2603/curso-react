import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, SetCounter] = useState(value);

    return (<>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>

        <div className='flex-row'>
            <button onClick={() => SetCounter(counter + 7)} > + 1 </button>
            <button onClick={() => SetCounter(counter - 7)} > - 1 </button>
            <button onClick={() => SetCounter(value)} > Reset </button>
        </div>
    </>);
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}