import React, { useState } from 'react';
import "./FormInput.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMsg, onChange, id, ...inputProps} = props;

    const handleFocused = (e) => {
        setFocused(true);
    };

    return (
        <div className="form-input">
            <label>{label}</label>
            <input {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocused} 
                focused={focused.toString()} 
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
            />

            <span>{errorMsg}</span>
        </div>
    )
}

export default FormInput
