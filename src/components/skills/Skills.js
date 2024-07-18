import React from 'react';
import Title from '../shared/Title';
import Card from './Card';
import { skillsData } from '../../constants/CardsData';

const Features = () => {
    return (
        <section id='skills' className='w-full h-auto py-20 border-b-[1px]'>
            <Title title='Skills' description='What I do' />
            <div
                className='grid grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-3 gap-6
            xl:gap-20'
            >
                {skillsData.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Features;
