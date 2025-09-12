import Link from 'next/link'
import React from 'react'

export default function SignInForm() {
    return (
        <div className="card-body">
            <h1 className='text-center font-bold text-2xl'>Login your account</h1>

            <form className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required />
                {/* Password */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </form>

            <h1 className='text-center'>Dont’t Have An Account ? <Link href={'/sign-up'} className='text-blue-600'>Register</Link></h1>
        </div>
    )
}
