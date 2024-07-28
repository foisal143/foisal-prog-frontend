import { useState } from 'react';
import Container from '../../../components/Container';
import useProjects from '../../../hooks/useProjects';
import ProjectCard from '../../../components/ProjectCard';
import NotFoundErrorMessage from '../../../components/NotFoundErrorMessage';

const Projects = () => {
  const [type, setType] = useState('all');
  const { projects } = useProjects();
  const filteredProjects =
    projects && projects.filter(project => project?.type === type);
  const showPorjects = type === 'all' ? projects : filteredProjects;

  return (
    <Container>
      <div className="my-24">
        <div className="flex justify-center gap-5">
          <button
            onClick={() => setType('all')}
            className={`${
              type === 'all' && 'bg-[aqua] text-black'
            } btn-primary`}
          >
            All
          </button>
          <button
            onClick={() => setType('frontend')}
            className={`${
              type === 'frontend' && 'bg-[aqua] text-black'
            } btn-primary`}
          >
            Frontend
          </button>
          <button
            onClick={() => setType('backend')}
            className={`${
              type === 'backend' && 'bg-[aqua] text-black'
            } btn-primary`}
          >
            Backend
          </button>
          <button
            onClick={() => setType('fullstack')}
            className={`${
              type === 'fullstack' && 'bg-[aqua] text-black'
            } btn-primary`}
          >
            FullStack
          </button>
        </div>

        {showPorjects && showPorjects.length > 0 ? (
          <div className="mt-12 grid p-5 py-12 bg-primary rounded-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {showPorjects &&
              showPorjects.map(project => (
                <ProjectCard key={project._id} project={project} />
              ))}
          </div>
        ) : (
          <div className="my-12">
            <NotFoundErrorMessage
              text={`${type.toUpperCase()} project not found!`}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Projects;
