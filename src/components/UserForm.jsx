import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault(); // prevent the default form submission action routing -- "We'll handle the information ourselves"
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
//     const formMessage = () => {
//         if( hasBeenSubmitted ) {
// 	    return "Thank you for submitting the form!";
// 	} else {
// 	    return "Welcome, please submit the form";
// 	}
//     };  This code block has been re-written to the ternary operator below
    
    return (
        <form onSubmit={ createUser }> 
            {
                hasBeenSubmitted ? // Condition
                <h3>Thank you for submitting the form!</h3> :  // exprIfTrue, "otherwise"
                <h3>Welcome, please submit the form.</h3> // exprIfFalse

                // Remember that ternary is like an if/else statement but with this formula instead: -condition- ? exprIfTrue : exprIfFalse.  Condition = the variable/const we defined above, the "?" is 'starting' the ternary operator, 'exprIfTrue' = the "if" part of the conditional, ":" = means else, and lastly the 'exprIfFalse' is the action to take if the conditional isn't met.
            }


            {/* <h3>{ formMessage() }</h3>  // Don't need this line because of the terniary code block above */}
	    <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;