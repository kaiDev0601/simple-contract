import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { BiUpload } from 'react-icons/bi';
import { AiOutlineWallet } from 'react-icons/ai';
import { BiCopy } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoMdHelpCircle } from 'react-icons/io';

const ShowVideo = ({ setCurStep }) => {

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
                    <img className="video" src="movie.png" />
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
            </div>

        </div >
    );
}

ShowVideo.propTypes = {
    setCurStep: PropTypes.func.isRequired
};

export default ShowVideo;