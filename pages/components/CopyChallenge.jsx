import { FiCopy } from 'react-icons/fi'
import { FaCopy } from 'react-icons/fa'
import React, { useState } from 'react';


const CopyChallenge = ({ content }) => {
    const [active, setActive] = useState(false);

    return (
        active ? <FaCopy onClick={() => setActive(!active)} /> : <FiCopy className='hover:text-indigo-400' onClick={
            () => {
                navigator.clipboard.writeText(content)
                setActive(!active)
            }
        } />

    )
}
export default CopyChallenge;