import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../index.css'

const Fader = ({ text }) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                       fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 3000);

        return () => clearInterval(timeout)
    }, [])
    //Add fadeProp in [] to make thing fade back in 

    return (
        <>
            <h1 className={fadeProp.fade}>{text}</h1>
        </>
    )
}

Fader.defaultProps = {
    text: 'Hello World!'
}

Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader