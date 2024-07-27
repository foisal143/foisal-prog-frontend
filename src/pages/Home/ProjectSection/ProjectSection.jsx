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
        <TitleText animation="fade-up" styles="my-0 lg:my-12" text="Projects" />

        {projects && projects.length > 0 ? (
          <div
            data-aos="fade-left"
            className="grid p-5 bg-dark rounded-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            {projects.map(project => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <NotFoundErrorMessage text="Product Not Found!" />
        )}
      </div>
    </Container>
  );
};

export default ProjectSection;
