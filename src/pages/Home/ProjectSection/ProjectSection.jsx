import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import NotFoundErrorMessage from '../../../components/NotFoundErrorMessage';
import ProjectCard from '../../../components/ProjectCard';
import TitleText from '../../../components/TitleText';
import useProjects from '../../../hooks/useProjects';

const ProjectSection = () => {
  const { projects } = useProjects();

  return (
    <Container>
      <div className="my-24">
        <TitleText
          animation="fade-up"
          styles="my-0 mb-12 lg:my-12"
          text="Projects"
        />
        <div className="bg-primary rounded-md p-5">
          {projects && projects.length > 0 ? (
            <div
              data-aos="fade-left"
              className="grid p-5 bg-primary rounded-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
            >
              {projects.slice(0, 6).map(project => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <NotFoundErrorMessage text="Product Not Found!" />
          )}

          <div data-aos="fade-down" className="text-center my-12">
            <Link to={`/projects`}>
              <button className="btn-primary overflow-hidden">Load More</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectSection;
