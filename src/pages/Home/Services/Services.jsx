import Container from '../../../components/Container';
import TitleText from '../../../components/TitleText';

const Services = () => {
  return (
    <Container>
      <div className="my-28">
        <TitleText animation="fade-up" text="Services" />
        <div className="mt-16 gap-10 lg:flex justify-between">
          <div className="w-full p-5 px-12">
            <h3 data-aos="fade-right" className="text-xl headerFont">
              Frontend <span className="text-[aqua]">Development</span>
            </h3>
            <ul className="list-disc text-font ms-4 mt-2">
              <li data-aos="fade-right" data-aos-duration="500">
                Responsive Web Design
              </li>
              <li data-aos="fade-right" data-aos-duration="1000">
                Single Page Applications (SPA)
              </li>
              <li data-aos="fade-right" data-aos-duration="1500">
                State Management
              </li>
              <li data-aos="fade-right" data-aos-duration="2000">
                Component Libraries
              </li>
              <li data-aos="fade-right" data-aos-duration="2500">
                Client-Side Routing
              </li>
              <li data-aos="fade-right" data-aos-duration="3000">
                API Integration
              </li>
            </ul>
          </div>
          <div className="w-full p-5 px-12">
            <h3 data-aos="fade-left" className="text-xl headerFont">
              Backend <span className="text-[aqua]">Development</span>
            </h3>

            <ul className="list-disc text-font ms-4 mt-2">
              <li data-aos="fade-left" data-aos-duration="500">
                RESTful API Development
              </li>
              <li data-aos="fade-left" data-aos-duration="1000">
                GraphQL API Development
              </li>
              <li data-aos="fade-left" data-aos-duration="1500">
                Database Management
              </li>
              <li data-aos="fade-left" data-aos-duration="2000">
                Authentication & Authorization
              </li>
              <li data-aos="fade-left" data-aos-duration="2500">
                Middleware Development
              </li>
              <li data-aos="fade-left" data-aos-duration="3000">
                Real-Time Applications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
