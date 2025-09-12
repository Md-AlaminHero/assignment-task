"use client"
import { registerUSer } from '@/app/actions/auth/registerUser';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SignUpForm() {

    const router = useRouter()

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, email, password });
        await registerUSer({ name, email, password });
        router.push('/')
    }
    return (
        <div className="card-body">
            <h1 className='text-center'>Register your account</h1>
            <form onSubmit={handleSignUp} className="fieldset">
                {/* name input */}
                <label className="label">Your Name</label>
                <input type="text" name='name' className="input" placeholder="Enter Your Name" required />

                {/* Email input */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required />

                {/* PAssword input */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" required />
                <button type='submit' className="btn btn-neutral mt-4">Register</button>
            </form>
            <h1 className='text-center'>Already Have An Account ? <Link href={'/sign-in'} className='text-blue-600'>Sign In</Link></h1>
        </div>
    )
}
