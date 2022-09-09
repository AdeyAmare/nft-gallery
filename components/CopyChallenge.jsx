import { FiCopy } from 'react-icons/fi'
import React from 'react';


const CopyChallenge = ({ content }) => {

    return (
        <FiCopy className='hover:text-indigo-400 active:text-white' onClick={
            () => {
                navigator.clipboard.writeText(content)
            }
        } />

    )
}
export default CopyChallenge;