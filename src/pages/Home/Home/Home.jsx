import AboutPage from '../AboutPage/AboutPage';
import Header from '../Header/Header';
import ProjectSection from '../ProjectSection/ProjectSection';
import Services from '../Services/Services';
import SkillSection from '../SkillSection/SkillSection';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <>
      <Header />
      <AboutPage />
      <SkillSection />
      <Services />
      <ProjectSection />
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
