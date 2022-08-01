import { useState } from 'react'

const Login = ({ users, handleLoginSuccess }) => {
    
    const handleLoginAttempt = (e) => {
        e.preventDefault()
        const { inputName, inputPassword } = e.target
        const inputUser = users.find((user) => user.user_name === inputName.value)
        if (inputUser) {
            if (inputUser.password != inputPassword.value) {
                alert(`invalid password for ${inputName.value}`)
            } else handleLoginSuccess(inputUser)
        } else {
            alert(`invalid username: ${inputName.value}`)
        }
    }
    

    return (
        <div className='Login'>
            <div className='login-container'>
                <form 
                    className='login-form'
                    onSubmit={handleLoginAttempt}
                >
                    <input
                        type='text'
                        placeholder='username'
                        name='inputName'
                    />
                    <input
                        type='password'
                        placeholder='password'
                        name='inputPassword'
                    />
                    <input
                        type='submit'
                        value='Login'
                    />
                </form>
            </div>
        </div>
    )
}

export default Login