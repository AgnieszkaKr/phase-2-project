import { useState } from 'react'

const Login = () => {
    
    return (
        <div className='Login'>
            <div className='login-container'>
                <form>
                    <input
                        type='text'
                        placeholder='username'
                    />
                    <input
                        type='password'
                        placeholder='password'
                    />
                </form>
            </div>
        </div>
    )
}

export default Login