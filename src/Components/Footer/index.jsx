import React from 'react'

function Footer() {
    return (
        <div className='bg-black py-5 md:py-10 lg:py-20'>
            <div className="max-w-6xl mx-auto px-3">
                <p className="text-2xl font-semibold py-5">FreeFlow</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="col-span-1 flex flex-col gap-1 py-2">
                        <p>Freeflow Services Inc. © 2022</p>
                        <p>Discover Talented Developers</p>
                    </div>
                    <div className="col-span-1 grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-1">
                            <p className='py-2'>Contact</p>
                            <ul className='flex flex-col'>
                                <a href="#!" target="_blank" className="text-yellow-500 hover:underline">Email Us</a>
                                <a href="#!" target="_blank" className="text-yellow-500 hover:underline">Schedule a call</a>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <p className='py-2'>Social</p>
                            <ul className='flex flex-col'>
                                <a href="#!" target="_blank" className="text-yellow-500 hover:underline">Twitter</a>
                                <a href="#!" target="_blank" className="text-yellow-500 hover:underline">LinkedIn</a>
                                <a href="#!" target="_blank" className="text-yellow-500 hover:underline">Discord</a>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <p className='py-2'>Legal</p>
                            <ul className='flex flex-col'>
                                <a href="#!" target="_blank" className="text-yellow-500 hover:underline">Terms of Service</a>
                                <a href="#!" target="_blank" className="text-yellow-500 hover:underline">Privacy Policy</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer