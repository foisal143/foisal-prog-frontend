import AboutPage from '../AboutPage/AboutPage';
import Header from '../Header/Header';
import ProjectSection from '../ProjectSection/ProjectSection';
import Services from '../Services/Services';
import SkillSection from '../SkillSection/SkillSection';

const Home = () => {
  return (
    <div>
      <Header />
      <AboutPage />
      <SkillSection />
      <Services />
      <ProjectSection />
    </div>
  );
};

export default Home;
