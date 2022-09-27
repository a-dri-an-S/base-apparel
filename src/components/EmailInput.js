import { useState } from "react";
import ErrorImg from "../assets/icon-error.svg"
import Arrow from "../assets/icon-arrow.svg";
import "../styles/EmailInput.css";

const EmailInput = () => {

    const [invalidEmail, setInvalidEmail] = useState(false);
    const [input, setInput] = useState("Email Address");

    const invalidEmailChecker = (invalidEmail) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(invalidEmail)) {
            setInvalidEmail(true);
        } else {
            setInvalidEmail(false);
        }
    }

    return (
        <div className="email">
            {/* <img src={ErrorImg} alt="error-img"/> */}
            <div className="email-input-cont">
                <input
                    className={`email-input ${invalidEmail ? 'invalid' : null}`} 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className="email-error">
                    {
                        invalidEmail ?
                        <img 
                            className="email-error-img"
                            src={ErrorImg} 
                            alt="error-img"
                        />
                        : null
                    }
                </div>
                <button 
                    className="email-btn"
                    onClick={() => invalidEmailChecker(input)}    
                >
                    <img 
                        className="email-btn-img"
                        src={Arrow} 
                        alt="arrow" 
                    />
                </button>
            </div>
            {
                invalidEmail ? 
                <p className="email-error-msg">
                    Please provide a valid email
                </p> : null
            }
            
        </div>
    );
}

export default EmailInput;