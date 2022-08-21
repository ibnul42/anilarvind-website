import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
    const { ref: heroRef, inView: heroInView } = useInView();
    const { ref: developerRef, inView: developerInView } = useInView();
    const { ref: developerRef5, inView: developerInView5 } = useInView();
    const { ref: developerRef6, inView: developerInView6 } = useInView();
    const { ref: developerRef7, inView: developerInView7 } = useInView();
    const { ref: developerRef8, inView: developerInView8 } = useInView();
    const { ref: developerRef9, inView: developerInView9 } = useInView();
    const { ref: developerRef10, inView: developerInView10 } = useInView();

    const { ref: betterAlternativeRef, inView: betterAlternativeInView } = useInView();
    const { ref: betterAlternativeRef2, inView: betterAlternativeInView2 } = useInView();
    const { ref: betterAlternativeRef3, inView: betterAlternativeInView3 } = useInView();
    const { ref: betterAlternativeRef4, inView: betterAlternativeInView4 } = useInView();
    const { ref: betterAlternativeRef5, inView: betterAlternativeInView5 } = useInView();
    const { ref: betterAlternativeRef6, inView: betterAlternativeInView6 } = useInView();
    const { ref: betterAlternativeRef7, inView: betterAlternativeInView7 } = useInView();

    const heroAnimation = useAnimation();
    const heroAnimation2 = useAnimation();
    const heroAnimation3 = useAnimation();

    const developerAnimation = useAnimation();
    const developerAnimation2 = useAnimation();
    const developerAnimation3 = useAnimation();
    const developerAnimation4 = useAnimation();
    const developerAnimation5 = useAnimation();
    const developerAnimation6 = useAnimation();
    const developerAnimation7 = useAnimation();
    const developerAnimation8 = useAnimation();
    const developerAnimation9 = useAnimation();
    const developerAnimation10 = useAnimation();

    const betterAlternativeAnimation = useAnimation();
    const betterAlternativeAnimation2 = useAnimation();
    const betterAlternativeAnimation3 = useAnimation();
    const betterAlternativeAnimation4 = useAnimation();
    const betterAlternativeAnimation5 = useAnimation();
    const betterAlternativeAnimation6 = useAnimation();
    const betterAlternativeAnimation7 = useAnimation();

    useEffect(() => {
        if (betterAlternativeInView7)
        {
            betterAlternativeAnimation7.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!betterAlternativeInView7) 
        {
            betterAlternativeAnimation7.start({ x: '+100vw' })
        }
        if (betterAlternativeInView6)
        {
            betterAlternativeAnimation6.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!betterAlternativeInView6) 
        {
            betterAlternativeAnimation6.start({ x: '+100vw' })
        }
        if (betterAlternativeInView5)
        {
            betterAlternativeAnimation5.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!betterAlternativeInView5) 
        {
            betterAlternativeAnimation5.start({ y: '+100vh' })
        }
        if (betterAlternativeInView4)
        {
            betterAlternativeAnimation4.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!betterAlternativeInView4) 
        {
            betterAlternativeAnimation4.start({ y: '+100vh' })
        }
        if (betterAlternativeInView3)
        {
            betterAlternativeAnimation3.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!betterAlternativeInView3) 
        {
            betterAlternativeAnimation3.start({ x: '-100vw' })
        }
        if (betterAlternativeInView2)
        {
            betterAlternativeAnimation2.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!betterAlternativeInView2) 
        {
            betterAlternativeAnimation2.start({ x: '-100vw' })
        }
        if (betterAlternativeInView)
        {
            betterAlternativeAnimation.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!betterAlternativeInView) 
        {
            betterAlternativeAnimation.start({ y: '+100vh' })
        }
        if (developerInView10)
        {
            developerAnimation10.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!developerInView10) 
        {
            developerAnimation10.start({ y: '+100vh' })
        }
        if (developerInView9)
        {
            developerAnimation9.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!developerInView9) 
        {
            developerAnimation9.start({ x: '+100vw' })
        }
        if (developerInView8)
        {
            developerAnimation8.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!developerInView8) 
        {
            developerAnimation8.start({ y: '+100vh' })
        }
        if (developerInView7)
        {
            developerAnimation7.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!developerInView7) 
        {
            developerAnimation7.start({ y: '+100vh' })
        }
        if (developerInView6)
        {
            developerAnimation6.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!developerInView6) 
        {
            developerAnimation6.start({ x: '-100vw' })
        }
        if (developerInView5)
        {
            developerAnimation5.start({
                y: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!developerInView5) 
        {
            developerAnimation5.start({ y: '+100vh' })
        }
        if (heroInView)
        {
            heroAnimation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 0.3, bounce: 0.0
                },
            })
            heroAnimation2.start({
                y: 0,
                transition: {
                    type: 'tween', duration: 0.3, bounce: 0.0
                },
            })
            heroAnimation3.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!heroInView)
        {
            heroAnimation.start({ x: '-100vw' })
            heroAnimation2.start({ y: '+100vh' })
            heroAnimation3.start({ x: '+100vw' })
        }
        if (developerInView)
        {
            developerAnimation.start({
                y: 0,
                transition: {
                    type: 'tween', duration: 0.3, bounce: 0.0
                },
            })
            developerAnimation2.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 0.3, bounce: 0.0
                },
            })
            developerAnimation3.start({
                y: 0,
                transition: {
                    type: 'tween', duration: 0.3, bounce: 0.0
                },
            })
            developerAnimation4.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.3, bounce: 0.0
                },
            })
        }
        if (!developerInView)
        {
            developerAnimation.start({ y: '+100vh' })
            developerAnimation2.start({ x: '-100vw' })
            developerAnimation3.start({ y: '+100vh' })
            developerAnimation4.start({ x: '+100vw' })
        }
        console.log(developerInView6);
    }, [heroInView, heroAnimation, heroAnimation2, heroAnimation3, developerInView, developerAnimation, developerAnimation2, developerAnimation3, developerAnimation4, developerInView5, developerAnimation5, developerInView6, developerAnimation6, developerInView7, developerAnimation7, developerInView8, developerAnimation8, developerInView9, developerAnimation9, developerInView10, developerAnimation10, betterAlternativeInView, betterAlternativeAnimation, betterAlternativeInView2, betterAlternativeAnimation2, betterAlternativeInView3, betterAlternativeAnimation3, betterAlternativeInView4, betterAlternativeInView5, betterAlternativeInView6, betterAlternativeInView7, betterAlternativeAnimation4, betterAlternativeAnimation5, betterAlternativeAnimation6, betterAlternativeAnimation7]);
    return (
        <div className="overflow-x-hidden">
            <div className="bg-black">
                <div className='max-w-6xl mx-auto'>
                    {/* hero section */}
                    <div className="px-3 py-3 md:py-28 overflow-hidden" ref={heroRef}>
                        <motion.div
                            className="grid grid-col-1 md:grid-cols-2 gap-5">
                            <div className="col-span-1 flex flex-col gap-5 justify-center">
                                <motion.div
                                    animate={heroAnimation}
                                    className="flex flex-col gap-5">
                                    <p className="font-bold text-3xl md:text-5xl">Find <span className='text-[#ffff05]'>blockchain developers</span> that are perfect for your project.</p>
                                    <p>Click Start Hiring to join our Discord and let the Freeflow team handpick vetted blockchain developers for you to start working in minutes. </p>
                                    <button className="px-5 py-3 rounded-full bg-indigo-500 w-44 font-bold shadow-md shadow-indigo-500">Start Hiring</button>
                                </motion.div>
                                <motion.div
                                    animate={heroAnimation2}
                                    className="flex flex-col">
                                    <p>If you are a blockchain developer</p>
                                    <p className="hover:underline text-yellow-500 cursor-pointer">Apply to Join Our Talent Network →</p>
                                </motion.div>
                            </div>
                            <motion.div
                                animate={heroAnimation3}
                                className="col-span-1 flex justify-center items-center">
                                <img src="/assets/annotation.svg" className="" alt="" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* developer section */}
            <div className="bg-[#131415]">
                <div className='max-w-6xl mx-auto'>
                    <div className="px-3 py-3 md:py-10 overflow-hidden" ref={developerRef}>
                        <motion.div className='flex flex-col gap-5'>
                            <motion.div animate={developerAnimation}>
                                <p className="text-4xl font-bold text-center py-2">Our Developer Gems</p>
                                <p className="text-center py-2">Tap into our curated network of freelance blockchain developers in our marketplace.</p>
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <motion.div animate={developerAnimation2} className="col-span-1 flex flex-col gap-5 items-center px-5 py-6 self-start">
                                    <p className="text-6xl text-yellow-500 font-medium">10x</p>
                                    <p className="font-semibold">Faster to Connect and Hire</p>
                                    <div className="w-full bg-[#2c2f34] flex flex-col gap-5 items-center px-3 text-center rounded-xl py-5 h-full">
                                        <div className="h-20 w-20 bg-red-400 rounded-full"></div>
                                        <p>Keyvel Alston</p>
                                        <div className="bg-gray-300 h-[1px]  w-5/6"></div>
                                        <p>Blockchain Developer</p>
                                        <p>United States 🇺🇸</p>
                                        <p>Top Skills: Solana, Web Design, ERC20/721, Candy Machine, Discord Bots, Decentralized Exchange, Staking Systems, Robotics</p>
                                        <p>Interests: Robotics, Traveling</p>
                                    </div>
                                </motion.div>
                                <motion.div animate={developerAnimation3} className="col-span-1 flex flex-col gap-5 items-center px-5 py-6">
                                    <p className="text-6xl text-yellow-500 font-medium">7.5</p>
                                    <p className="font-semibold">Average Years of Experience</p>
                                    <div className="w-full bg-[#2c2f34] flex flex-col gap-5 items-center px-3 text-center rounded-xl py-5 h-full">
                                        <div className="h-20 w-20 bg-red-400 rounded-full"></div>
                                        <p>Sachin Grover</p>
                                        <div className="bg-gray-300 h-[1px]  w-5/6"></div>
                                        <p>Blockchain Developer</p>
                                        <p>India 🇮🇳</p>
                                        <p>Top Skills: ERC20/721/721A , Web3.js, Solidity, React, Angular, Auditing</p>
                                        <p>Interests: Movies, Music, Learning New Skills</p>
                                    </div>
                                </motion.div>
                                <motion.div animate={developerAnimation4} className="col-span-1 flex flex-col gap-5 items-center px-5 py-6">
                                    <p className="text-6xl text-yellow-500 font-medium">40+</p>
                                    <p className="font-semibold">Blockchain Specific Skills</p>
                                    <div className="w-full bg-[#2c2f34] flex flex-col gap-5 items-center px-3 text-center rounded-xl py-5 h-full">
                                        <div className="h-20 w-20 bg-red-400 rounded-full"></div>
                                        <p>Hicham Benhima</p>
                                        <div className="bg-gray-300 h-[1px]  w-5/6"></div>
                                        <p>Blockchain Developer</p>
                                        <p>France 🇫🇷</p>
                                        <p>Top Skills: Solidity, ERC721/721A/1155, Next JS, Express JS, Node JS, IPFS, Hardhat/truffle, Web3.js, Ethers, Chai</p>
                                        <p>Interests: Video Games, Music, Coding, Trekking</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-11/12 mx-auto h-[1px] bg-gray-400"></div>
                    <motion.div className="flex flex-col gap-3 py-10 overflow-hidden" >
                        <div className="overflow-hidden" ref={developerRef5}>
                            <motion.div
                                animate={developerAnimation5}
                                className="">
                                <p className="text-4xl font-bold text-center py-3">How did we find this curated network?</p>
                                <p className="text-center px-5 py-3">By focusing on excellent reputations, strong technical abilities and a hunger to learn, we have uncovered a network of freelance developers that go above and beyond.</p>
                            </motion.div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-5" >
                            <div className="overflow-hidden" ref={developerRef6}>
                                <motion.div
                                    animate={developerAnimation6}
                                    className="col-span-1 px-2 flex flex-col gap-2">
                                    <div className="w-10 h-10 bg-red-400 rounded-full"></div>
                                    <p className="font-extrabold">Reputation Vetting</p>
                                    <p>We collect and verify professional work references for everyone in our network.</p>
                                </motion.div>
                            </div>
                            <div className="overflow-hidden" ref={developerRef7}>
                                <motion.div
                                    animate={developerAnimation7}
                                    className="col-span-1 px-2 flex flex-col gap-2">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                                    <p className="font-extrabold">Skill Vetting</p>
                                    <p>Each applicant receives challenges on their top skills to ensure their skill level is accurate.</p>
                                </motion.div>
                            </div>
                            <div className="overflow-hidden" ref={developerRef8}>
                                <motion.div
                                    animate={developerAnimation8}
                                    className="col-span-1 px-2 flex flex-col gap-2">
                                    <div className="w-10 h-10 bg-amber-500 rounded-full"></div>
                                    <p className="font-extrabold">Identity Vetting</p>
                                    <p>Every applicant must complete an identity verification as part of their vetting.</p>
                                </motion.div>
                            </div>
                            <div className="overflow-hidden" ref={developerRef9}>
                                <motion.div
                                    animate={developerAnimation9}
                                    className="col-span-1 px-2 flex flex-col gap-2">
                                    <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
                                    <p className="font-extrabold">Hidden Gems</p>
                                    <p>Excellent people are all over the world. We allow everyone to shine in our network.</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="overflow-hidden" ref={developerRef10}>
                            <motion.p animate={developerAnimation10} className="px-2">If you are a blockchain developer <span className='text-yellow-500 hover:underline cursor-pointer'>Apply to Join Our Talent Network →</span></motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* better alternative section */}
            <div className="bg-black">
                <div className='max-w-6xl mx-auto'>
                    <div className="px-3 py-3 md:py-10 overflow-hidden" ref={betterAlternativeRef}>
                        <motion.div className='flex flex-col gap-5'>
                            <motion.div animate={betterAlternativeAnimation} className="overflow-hidden">
                                <p className="text-4xl font-bold text-center py-2">Why is Freeflow better than the alternative?</p>
                                <p className="text-center py-2">The Freeflow marketplace offers many perks to make hiring a freelancer as easy as possible.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="col-span-1 flex flex-col gap-5 items-center px-5 py-6 self-start mt-0 md:mt-20">
                            <div className='overflow-hidden' ref={betterAlternativeRef2}>
                                <motion.div animate={betterAlternativeAnimation2} className="bg-[#6968f6] flex flex-col gap-5 rounded-xl py-8 px-7">
                                    <p className="bg-black py-3 px-4 cursor-pointer rounded-full font-extrabold w-fit">Fast Connections</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, nesciunt maxime fuga numquam porro voluptatibus.</p>
                                </motion.div>
                            </div>
                            <div className='overflow-hidden' ref={betterAlternativeRef3}>
                                <motion.div animate={betterAlternativeAnimation3} className="bg-purple-700 flex flex-col gap-5 rounded-xl py-8 px-7">
                                    <p className="bg-black py-3 px-4 cursor-pointer rounded-full font-extrabold w-fit">Adaptable</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, nesciunt maxime fuga numquam porro voluptatibus.</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-5 items-center px-5 py-6 self-start mt-0 md:mt-10">
                            <div className='overflow-hidden' ref={betterAlternativeRef4}>
                                <motion.div animate={betterAlternativeAnimation4} className="bg-[#f44b93] flex flex-col gap-5 rounded-xl py-8 px-7">
                                    <p className="bg-black py-3 px-4 cursor-pointer rounded-full font-extrabold w-fit">Deal Proctection</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, nesciunt maxime fuga numquam porro voluptatibus.</p>
                                </motion.div>
                            </div>
                            <div className='overflow-hidden' ref={betterAlternativeRef5}>
                                <motion.div animate={betterAlternativeAnimation5} className="bg-[#f22e60] flex flex-col gap-5 rounded-xl py-8 px-7">
                                    <p className="bg-black py-3 px-4 cursor-pointer rounded-full font-extrabold w-fit">Flexible Payments</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, nesciunt maxime fuga numquam porro voluptatibus.</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-5 items-center px-5 py-6 self-start">
                            <div className='overflow-hidden' ref={betterAlternativeRef6}>
                                <motion.div animate={betterAlternativeAnimation6} className="bg-[#e38503] flex flex-col gap-5 rounded-xl py-8 px-7">
                                    <p className="bg-black py-3 px-4 cursor-pointer rounded-full font-extrabold w-fit">Great Talent</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, nesciunt maxime fuga numquam porro voluptatibus.</p>
                                </motion.div>
                            </div>
                            <div className='overflow-hidden' ref={betterAlternativeRef7}>
                                <motion.div animate={betterAlternativeAnimation7} className="bg-[#29937c] flex flex-col gap-5 rounded-xl py-8 px-7">
                                    <p className="bg-black py-3 px-4 cursor-pointer rounded-full font-extrabold w-fit">Easy</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, nesciunt maxime fuga numquam porro voluptatibus.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil totam rerum ipsa eligendi quasi inventore perspiciatis tempore. Tenetur ab nihil, laudantium provident praesentium veritatis distinctio vel officia sit impedit? Possimus ab mollitia officiis sit consequatur dicta veritatis. Dolorem, omnis sint. Error, necessitatibus animi facilis nostrum, quod dolores repellat ipsam quibusdam nemo numquam vitae aliquam consequuntur ea. Iste reiciendis impedit eos amet quod tempore tenetur, aspernatur modi debitis recusandae adipisci quisquam doloribus doloremque omnis laboriosam sed. Laborum maiores magni quod aperiam, doloribus voluptatem similique perferendis? Cumque natus expedita illo facilis tenetur asperiores debitis, ipsam, quibusdam dolorum repellendus totam facere libero non!</p> */}
        </div>
    )
}

export default Home