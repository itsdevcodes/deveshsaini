import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

const ContactIcons = () => {
    return (
        <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
            <img
                className='w-full h-64 object-cover rounded-lg mb-2'
                src={contactImg}
                alt='contactImg'
            />
            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-white'>Devesh Saini</h3>
                <p className='text-lg font-normal text-gray-400'>
                    Full Stack Developer
                </p>
                <p className='text-base text-gray-400 tracking-wide'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facilis ipsam autem cumque, accusantium dicta odio.
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone: <span className='text-lighText'>+918696403887</span>
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email:{' '}
                    <span className='text-lighText'>
                        sainidevesh2004@gmail.com
                    </span>
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Find me in
                </h2>
                <div className='flex gap-4'>
                    <a
                        href='https://github.com/itsdevcodes'
                        target='_blank'
                        className='bannerIcon'
                        rel='noreferrer'
                    >
                        <FaGithub />
                    </a>

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
    );
};

export default ContactIcons;
