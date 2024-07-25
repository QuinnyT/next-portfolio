import { findProject } from '@/data/project';
import Image from 'next/image'

export default function ProjectPage({ params }) {
    const project = findProject(params.projectId);
    return (
        <div className='container mt-24 mx-auto px-12 py-4'>
            <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
              {project.title}
            </h2>
            <div className="h-[25rem] relative" >
              <Image layout="fill" objectFit="contain" src={project.image} alt="image" />
            </div>
            <div className="mt-20 py-16 px-36 grid gap-y-5 md:gap-y-20 bg-gray-200 ">
              {project.details.map((item, index) => index%2 === 0 ? (
                  <div key={item} className='flex flex-col md:flex-row'>
                    <div className="h-[15rem] md:h-[30rem] w-full md:w-2/3 relative" >
                      <Image layout="fill" objectFit="contain" src={item.image} alt="image" />
                    </div>
                    <div className='w-full md:w-1/3 flex items-center p-5'>
                       {item.description}
                    </div>
                  </div>
               ) : (
                <div key={item} className='flex flex-col md:flex-row'>
                  
                    <div className='w-full md:w-1/3 flex items-center p-5'>
                       {item.description}
                    </div>
                    <div className="h-[15rem] md:h-[30rem] w-full md:w-2/3 relative" >
                      <Image layout="fill" objectFit="contain" src={item.image} alt="image" />
                    </div>
                  </div>
               ))}
            </div>
        </div>
        
    );
  }