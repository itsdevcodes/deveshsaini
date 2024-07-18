import React from 'react';
// import BannerLogo from './BannerLogo';
import { bannerImg } from '../../assets';
import {
    // FaAngular,
    FaGithub,
    FaLinkedinIn,
    // FaReact,
    FaTwitter,
} from 'react-icons/fa';
// import { SiFigma, SiTailwindcss } from 'react-icons/si';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Stackinfo = () => {
    const [text] = useTypewriter({
        words: ['Professional Coder.', 'Full Stack Developer.'],
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <>
        <section
            id='home'
            className='w-full pt-10 pb-20 flex font-titleFont items-center border-b-black border-b-[1px] flex-wrap md:flex-column'
        >

            <div className='w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                    <h1 className='text-6xl font-bold text-white'>
                        Hi I'm {''}
                        <span className='text-designColor capitalize'>
                            Devesh Saini
                        </span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a<span> {text}</span>
                        <Cursor
                            cursorBlinking='true'
                            cursorStyle='|'
                            cursorColor='#ff014f'
                        />
                    </h2>

                    <p className='text-base font-bodyFont leading-6 tracking-wide'>
                        I am a passionate and skilled developer With a strong
                        foundation in software development principles, I am
                        dedicated to creating efficient, scalable, and user-friendly
                        solutions. I thrive in collaborative environments and enjoy
                        taking on new challenges.
                    </p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>
                            Find me in
                        </h2>
                        <div className='flex gap-4'>
                            <span className='bannerIcon'>
                                <a
                                    href='https://github.com/itsdevcodes'
                                    target='_blank'
                                    className='bannerIcon'
                                    rel='noreferrer'
                                >
                                    <FaGithub />
                                </a>
                            </span>
                            <span className='bannerIcon'>
                                <a
                                    className='bannerIcon'
                                    href='https://x.com/iamdeveshsaini'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaTwitter />
                                </a>
                            </span>
                            <span className='bannerIcon'>
                            <a
                                    className='bannerIcon'
                                    href='https://in.linkedin.com/in/devesh-saini-aab5231bb'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                <FaLinkedinIn />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center relative'>
                <img className='w-[500px] h-[680px] z-10' src={bannerImg} alt='' />
                <div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center '></div>
            </div>
        </section>
        </>
    );
};

export default Stackinfo;
