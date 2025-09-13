"use client"
import { signIn } from '@/auth';
// import { signIn } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link'
import React from 'react'
// import { signIn } from "next-auth/react"
// import { useRouter } from 'next/navigation'

export default function SignInForm() {

    // const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault;
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        try {
            await signIn("credentials", {
                email,
                password,
                callbackUrl: "/",
                redirect: false
            })
            // router.push('/')
        } catch (error) {
            console.log(error);
            alert("Log In Failed")
        }
    }

    return (
        <div className="card-body">
            <h1 className='text-center font-bold text-2xl'>Login your account</h1>

            <form onSubmit={handleSignIn} className="fieldset">
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
