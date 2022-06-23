import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { IoMdHelpCircle } from 'react-icons/io';
import { AiOutlineWallet } from 'react-icons/ai';
import { BiCopy } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';

const CreateSession = ({ setCurStep }) => {
    const [conStep, setConStep] = useState(0);

    return (
        <div>
            <div className='user-info'>
                <img src="user.png" />
                <AiOutlineWallet />
                <b>0x22444..</b>
                <BiCopy />
            </div>
            <div className='field-container'>
                <div className='row'>
                    <label htmlFor='name'>Session Name</label>
                </div>
                <div className='row'>
                    <input className="full-width" type='text' name="name" placeholder="Dance Party in LA" />
                </div>
                <div className='row'>
                    <label htmlFor='name'>Session description i.e:what is it about, location, occasion, etc</label>
                </div>
                <div className='row'>
                    <input className="full-width" type='text' name="name" placeholder="Live party from club xyz" />
                </div>
                <div className='row'>
                    <label htmlFor='name'>GatePass Fees</label>
                </div>
                <div className='row'>
                    <input className="fee-input" type='text' name="name" placeholder='0.0001' />
                </div>
                <div className='row mt-2'>
                    <button onClick={e => setConStep(1)}>CREATE</button>
                </div>
                <div className='row'>
                    <p><IoMdHelpCircle />Follow next instructions on your wallet</p>
                </div>
            </div>
            {conStep == 1 && (
                <div className='modal'>
                    <div>
                        <h1>HANG TIGHT, WE ARE CREATING YOUR SMART CONTRACT</h1>
                    </div>
                    <div><button onClick={e => setConStep(2)}>Next</button></div>
                    <div>
                        <p>Follow instruction on your wallet</p>
                    </div>
                </div>
            )}
            {conStep == 2 && (
                <div className='modal'>
                    <div>
                        <h1>ALL SET</h1>
                    </div>
                    <div className="done">
                        <button className="done" onClick={e => setCurStep(4)}>
                            <BsCheckCircleFill />
                        </button>
                    </div>
                    <div>
                        <p>Follow instruction on your wallet</p>
                    </div>
                </div>
            )
            }
        </div >
    );
}

CreateSession.propTypes = {
    setCurStep: PropTypes.func.isRequired
};

export default CreateSession;