import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <section className='bg-green-500 p-4 flex justify-between text-white items-center'>
                <div className='text-2xl font-bold'>
                    LOGO
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Navbar
