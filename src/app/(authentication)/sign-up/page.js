
import React from 'react'
import SignUpForm from './components/form'

export default function SignUpPage() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <SignUpForm />
            </div>
        </div>
    )
}
