import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';


import  CTA  from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {

  const handleResumeDownload = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumePath = 'src\assets\documents\AmanMK.pdf';

    // Trigger the download using file-saver
    saveAs(resumePath, 'AmanMK.pdf');
  };


  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. I've uploaded all of them to my <a href="https://github.com/theamanmk" target="_blank" className="underline">GitHub</a> so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further enhancements.Your collaboration is highly valued!
        </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      <p>
      <a
          href='src\assets\documents\AmanMK.pdf' // You can use '#' as a placeholder since the actual path is handled in handleResumeDownload
          onClick={handleResumeDownload}
          className="underline cursor-pointer text-blue-600"
        >
          Check My Resume
        </a>{" "}
        . If the link is broken, please contact via @metalsierrabravo6@gmail.com
      </p> 

      <CTA buttonText="Contact" buttonLink="/contact">
            Have a project in mind? <br className='sm:block hidden' />
            Let's build something together!
      </CTA>
    </section>
  );
};

export default Projects;
