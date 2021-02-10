import React, {useEffect, useState} from 'react'
import './Nav.css';


export default function Nav() {

    const [show, setShow] = useState(false);
    
    const transitionHandler = () => {
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionHandler);
        return () => {
            window.removeEventListener('scroll', transitionHandler);
        }
    }, [])

    return (
        <div className = {`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                className = "nav__logo" 
                 src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                 alt="netfilx-logo"/>

                 <img 
                 className = "nav__avatar"
                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                 alt="avatar"/>
            </div>
        </div>
    )
}


// Netflix logo: http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png


// avatar: https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png