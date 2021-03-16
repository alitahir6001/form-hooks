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
                <span className="text-danger">{inputs.firstName && inputs.firstName.length < 2 ? "First name needs to be at least 2 characters long!" : ""}</span> 
                {/* Basic front-end validations to mess around with. */}
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" />
                <span className="text-danger">{inputs.lastName.length < 2 ? "Last name needs to be at least 2 characters long!" : ""}</span>
            </div>
            

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email" />
                <span className="text-danger">{inputs.email.length < 5 ? "email needs to be at least 5 characters long!" : ""}</span>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password" />
                <span className="text-danger">{inputs.password.length < 8 ? "Password needs to be at least 8 characters long!" : ""}</span>
            </div>
            
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>
    );
};


export default Form;