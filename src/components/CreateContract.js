import React from 'react';

import PropTypes from 'prop-types';

import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineWallet } from 'react-icons/ai';
import { BiCopy } from 'react-icons/bi';

const CreateContract = ({ setCurStep }) => {
    return (
        <div>
            <div className='user-info'>
                <img src="user.png" />
                <AiOutlineWallet />
                <b>0x22444..</b>
                <BiCopy />
            </div>
            <div className='container'>
                <button onClick={e => setCurStep(2)}>CREATE YOUR CONTRACT <BsArrowRight /></button>
            </div>
        </div>
    );
}

CreateContract.propTypes = {
    setCurStep: PropTypes.func.isRequired
};

export default CreateContract;