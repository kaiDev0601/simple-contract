import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { BiUpload } from 'react-icons/bi';
import { AiOutlineWallet } from 'react-icons/ai';
import { BiCopy } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoMdHelpCircle } from 'react-icons/io';

const JoinVideo = ({ setCurStep }) => {
    const [joinState, setJoinState] = useState(0);

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
                    <BiUpload /> SHARE
                </div>
                <div className='row'>
                    <img className="video" src="video-waiting.png" />
                </div>
            </div>
            <div className='left-container'>
                <div>
                    <h3>Dance Party in LA</h3>
                </div>
                <div>
                    <h4>Live party from club xyz</h4>
                </div>
                <div>
                    <h4>0.0001 ETH</h4>
                </div>
                <div>
                    <button onClick={e => setJoinState(1)}>JOIN NOW</button>
                </div>
            </div>

            {
                joinState == 1 && (
                    <div className='modal'>
                        <div>
                            <p className='info'>You will be prompted to pay the minimum fees 0.0001ETH or more (if you wish) to join Hot Since 82 from Yorkshire LF Session.</p>
                        </div>
                        <div className="align-left">
                            <input placeholder='0.0001ETH' />
                            <button className='white-btn' onClick={e => setJoinState(2)}>PAY</button>
                        </div>
                        <div className="align-left">
                            <p><IoMdHelpCircle />Follow instruction on your wallet</p>
                        </div>
                    </div>
                )
            }
            {joinState == 2 && (
                <div className='modal'>
                    <div>
                        <h1>ALL GOOD!<br />ENJOY THE SHOW</h1>
                    </div>
                    <div className="done">
                        <button className="done" onClick={e => setCurStep(5)}>
                            <BsCheckCircleFill />
                        </button>
                    </div>
                </div>
            )}
        </div >
    );
}

JoinVideo.propTypes = {
    setCurStep: PropTypes.func.isRequired
};

export default JoinVideo;