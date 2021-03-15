import React from 'react';

const Form = (props) => {

    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs, // Bring it all in  (spread)
            [e.target.name]: e.target.value // Targeting the specific thing I want
        });
    };
    return(
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" />
            </div>
            

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password" />
            </div>
            
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>
    );
};


export default Form;