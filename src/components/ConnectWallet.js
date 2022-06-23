import React from 'react';

import PropTypes from 'prop-types';

import { BsArrowRight } from 'react-icons/bs';

const ConnectWallet = ({ setCurStep }) => {
    return (
        <div className='container'>
            <button onClick={e => setCurStep(1)}>Connect your wallet <BsArrowRight /></button>
        </div>
    );
}

ConnectWallet.propTypes = {
    setCurStep: PropTypes.func.isRequired
};

export default ConnectWallet;