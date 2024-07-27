import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialIcon from '../../../components/SocialIcon';
import './AboutPage.css';
import TitleText from '../../../components/TitleText';
const AboutPage = () => {
  return (
    <div className="pb-12">
      <TitleText animation="fade-up" text="about me" styles="mt-20 lg:mt-0" />
      <div className="md:flex flex-col-reverse md:flex-row flex justify-between items-center gap-10 mt-20 px-5 lg:px-12 ">
        <div className=" w-full flex justify-center items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="overflow-hidden  lg:w-[400px] lg:h-[400px] bg-radialgradient shadow-md shadow-[aqua] h-[300px]  w-[300px] rounded-full"
          >
            <img
              className=" rounded-md w-full  relative top-10 scale-125 "
              src="/src/assets/img/aboutpage.png"
              alt="about me image"
            />
          </div>
        </div>
        <div className=" w-full space-y-5">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="headerFont text-4xl"
          >
            I am Md <span className="text-[aqua]">Foisal</span>
          </h3>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-font"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            minus quos repellat omnis autem quam sed aliquid voluptatem iusto
            natus architecto temporibus consequatur rerum laborum, aperiam id
            consequuntur alias recusandae quo officiis, cumque dolores. At,
            cumque quibusdam? Suscipit, quas animi quasi sed cupiditate nobis
            fuga necessitatibus, officia, quis voluptatibus adipisci!
          </p>
          {/* social media icons here */}
          <div className="flex items-center gap-5">
            <SocialIcon
              Icon={FaFacebook}
              color="text-blue-500"
              animate="fade-right"
              duration="1000"
              link="https://www.facebook.com/mdfoisal.islam.1656?mibextid=LQQJ4d"
            />
            <SocialIcon
              Icon={FaGithub}
              color="text-white"
              animate="fade-up"
              duration="1500"
              link="https://github.com/foisal143"
            />
            <SocialIcon
              animate="fade-down"
              duration="2000"
              Icon={FaLinkedin}
              color="text-blue-300"
            />
            <SocialIcon
              animate="fade-left"
              duration="2500"
              Icon={FaTwitter}
              color="text-blue-500"
            />
          </div>
          <button
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="1000"
            className="btn-primary"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
