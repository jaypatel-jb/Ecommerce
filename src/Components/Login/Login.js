import React from 'react'
import { useState } from 'react'
import './Login.css'

function Login(props) {


    const [password, setpassword] = useState('')
    const [inputemail, setinputemail] = useState('')
    const [validatelowerCase, setvalidatelowerCase] = useState(' 1 lowerCaseLetters')
    const [validateupperCase, setvalidateupperCase] = useState(' 1 upperCaseLetters')
    const [validatenumbers, setvalidatenumbers] = useState('1 number')
    const [validatelength, setvalidatelength] = useState('lenth is >8')
    const [Emailvalidate, setEmailvalidate] = useState(false)
    const [Passwordvalidate, setPasswordvalidate] = useState(false)


    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    function showallmessage() {

        if (inputemail.match(validRegex)) {
            setEmailvalidate(false)

        } else {

            setEmailvalidate(true)
        }

    }


    function HideMessage() {
        setPasswordvalidate(true)
        if (password.match(lowerCaseLetters)) {
            setvalidatelowerCase('')
        }
        else {
            setvalidatelowerCase('1 lowerCaseLetters')
        }
        if (password.match(upperCaseLetters)) {
            setvalidateupperCase('')
        } else {
            setvalidateupperCase('1 upperCaseLetters')
        }

        if (password.match(numbers)) {
            setvalidatenumbers('')
        }
        else {
            setvalidatenumbers('1 number')
        }
        if (password.length >= 8) {
            setvalidatelength('')
        }
        else {
            setvalidatelength('lenth is >8')
        }
    }


    function submithandler(e) {
        e.preventDefault()
        if (inputemail.match(validRegex)&& (password.match(lowerCaseLetters)) &&(password.match(upperCaseLetters)) &&(password.match(numbers))  &&(password.length >= 8)) {
            console.log(' ok');
            props.login(true)
            setPasswordvalidate(false)
            setEmailvalidate(false)
           
        } else {
            props.login(false)
            if (inputemail.match(validRegex)) {
                setEmailvalidate(false)
            }else{
                setEmailvalidate(true)
            }
            setPasswordvalidate(true)
            
        }

    }


    return (
        <form onSubmit={submithandler}>


            <div className='Login_paage'>
                <div className='Main_Login_box' >
                    <div className="Login_had">
                        <span>Login Now</span>
                        <div className='Login_image'>

                        </div>
                    </div>
                    <div className="login_user">
                        <span id='Text_Email'>Enter Email</span>
                        {Emailvalidate && <p id='Email_Error'>Enter valid Email</p>}
                        <input onBlur={showallmessage} value={inputemail} onChange={(e) => {
                            setinputemail(e.target.value)
                        }} type="email" name="EMAIL" id="email" />
                        <span id='Text_Password'> Enter Password</span>
                        <p id='Password_Error'>{Passwordvalidate && ` ${validatelowerCase} ${validateupperCase} ${validatenumbers} ${validatelength}`}</p>
                        <input onBlur={HideMessage} onChange={(e) => { setpassword(e.target.value) }} value={password} type="password" name="PASSWORD" id="password" />
                        <button   type='Submit' id='Login_button'>Login</button>
                        <div className="user_Action">
                            <span>Forget Password ?</span>
                            <span>Sing Up</span>
                        </div>
                    </div>
                </div >

            </div>
        </form>
    )
}

export default Login
