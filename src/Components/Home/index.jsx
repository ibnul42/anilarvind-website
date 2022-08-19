import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
    const { ref: heroRef, inView: heroInView } = useInView();
    const heroAnimation = useAnimation();
    const heroAnimation2 = useAnimation();
    const heroAnimation3 = useAnimation();

    useEffect(() => {
        if (heroInView)
        {
            heroAnimation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 0.5, bounce: 0.0
                },
            })
            heroAnimation2.start({
                y: 0,
                transition: {
                    type: 'tween', duration: 0.5, bounce: 0.0
                },
            })
            heroAnimation3.start({
                x: 0,
                transition: {
                    type: 'just', duration: 0.5, bounce: 0.0
                },
            })
        }
        if (!heroInView)
        {
            heroAnimation.start({ x: '-100vw' })
            heroAnimation2.start({ y: '+100vh' })
            heroAnimation3.start({ x: '+100vw' })
        }
        console.log(heroInView);
    }, [heroInView, heroAnimation, heroAnimation2, heroAnimation3]);
    return (
        <div className="overflow-x-hidden">
            <div className="bg-black">
                <div className='max-w-6xl mx-auto px-3 py-3 md:py-28'>
                    {/* hero section */}
                    <div className="" ref={heroRef}>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil totam rerum ipsa eligendi quasi inventore perspiciatis tempore. Tenetur ab nihil, laudantium provident praesentium veritatis distinctio vel officia sit impedit? Possimus ab mollitia officiis sit consequatur dicta veritatis. Dolorem, omnis sint. Error, necessitatibus animi facilis nostrum, quod dolores repellat ipsam quibusdam nemo numquam vitae aliquam consequuntur ea. Iste reiciendis impedit eos amet quod tempore tenetur, aspernatur modi debitis recusandae adipisci quisquam doloribus doloremque omnis laboriosam sed. Laborum maiores magni quod aperiam, doloribus voluptatem similique perferendis? Cumque natus expedita illo facilis tenetur asperiores debitis, ipsam, quibusdam dolorum repellendus totam facere libero non!</p>
        </div>
    )
}

export default Home