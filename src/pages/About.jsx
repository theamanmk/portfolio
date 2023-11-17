import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <div >
    <section className='max-container '>
      <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Aman MK.</span></h1>
    <div>
      <h2 className=' subhead-text mt-1'>A Software Engineer. Born in India. Made for the World.</h2>
      <p className='about-subheading mt-1'>Specialized in Fullstack , Design/Animation with Machine learning on the side.</p>
    </div>  

    <div className='py-10 flex flex-col'>
      <h3 className='subhead-text'>My Skills / Techs I've worked with</h3>

      <div className='mt-16 flex flex-wrap gap-12'>
      {skills.map((skill) => (
        <div className='block-container w-20 h-20 '>
        <div className='btn-back rounded-xl'/>
          <div className='btn-front rounded-xl flex justify-center items-center'>
            <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain'/>
          </div>
        </div>
      ))}
      </div>
    </div>

    <div className='py-16 '>
        <h3 className='subhead-text'>Work Experience (Non-Technical)</h3>
        <div className=' mt-5 flex flex-col gap-3 text-slate-500 mb-5'>
          <p className='about-subheadingg'>Oversaw our family business of Parcel Service Business based in EKM for the past years , handling countless clients in every dynamic environment.</p>
        </div>
        <div >
        <h3 className='subhead-text mt-12'>Internships/Certificates</h3>
        <div className='flex'></div>

        <VerticalTimeline >
        {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200'/>

      {/* <CTA /> */}
      <CTA buttonText="View Projects" buttonLink="/projects">
        What to see my projects?
      </CTA>
      
      <CTA buttonText="Contact" buttonLink="/contact">
            Have a project in mind? <br className='sm:block hidden' />
            Let's build something together!
      </CTA>

      

    </section>
</div>
  );
}

export default About;
