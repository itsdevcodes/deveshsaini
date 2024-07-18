import React from 'react';
import Title from '../shared/Title';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../constants/ProjectsData';


const Projects = () => {
    return (
        <div
            id='projects'
            className='w-full py-20 border-b-[1px] border-b-black'
        >
            <div className='flex justify-center items-center text-center mb-36'>
                <Title
                    title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'
                    description='My Projects'
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                {projectsData.map((item) => (
                    <ProjectCard item={item} key={item.id} />
                ))}

            </div>
        </div>
    );
};

export default Projects;
