import { useState } from "react";

const Loginstuff = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    async function userLogin (event) {
        event.preventDefault();
        const response = await fetch('/babelusers/login', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({

                email,
                password,
                
            })
        })
        const data = await response.json();
        console.log(data.status);

        if (data.user) {
            console.log(data.user, 'data from if statement')
            localStorage.setItem('token', data.user)
            alert('login succ! -from loginstuff')
            window.location.href = '/userspine'
        } else { alert('plz check ur usrNam3 n passW0rdzz dummy')}
    }



    return (
        <form onSubmit={(userLogin)}>

            <input className = 'main-input' 
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" 
                placeholder="email" />
            <input className = 'main-input'
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password" />

            <input 
            className = "submit"
            type='submit'
            value="login user"/>

        </form>
    )
}
export default Loginstuff;
