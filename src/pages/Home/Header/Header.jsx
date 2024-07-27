import Container from '../../../components/Container';
import './Header.css';

const Header = () => {
  return (
    <Container>
      <div className=" md:flex justify-between  gap-10  min-h-[calc(100vh-80px)] ">
        <div className=" w-full flex justify-center items-center">
          <article className="intro-conteiner space-y-5">
            <div className="text">
              <h1 data-aos="fade-right" className="font-bold headerFont">
                Hi <span>I</span> am F<span>o</span>is<span>a</span>l
              </h1>
              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                className="typing-text headerFont"
              >
                <div className="inline-block me-1">I am a</div> <span></span>
              </div>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                className="text-font"
              >
                Greetings! I am Md Foisal, a dedicated web developer who is
                passionate about crafting engaging and user-centric digital
                experiences. With a keen eye for design and a knack for codingI
                specialize in bringing ideas to life through captivating
                websites
              </p>
              <button
                data-aos="fade-left"
                data-aos-duration="3500"
                id="btn"
                className="btn-primary my-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Hire Me
              </button>
            </div>
          </article>
        </div>
        {/* image section here */}
        <div className=" w-full justify-center mt-12 flex">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="container "
          >
            <div className="rounded-full   border-[aqua] border md:w-full relative top-5 md:top-0 h-[350px]  w-[350px] md:h-full">
              <img
                src="/src/assets/img/heading-image.png"
                alt="Main Image"
                className="main-image z-10   border-[aqua] border transform"
              />
            </div>

            <div className="icon icon1">
              <i className="fab fa-html5"></i>
            </div>
            <div className="icon icon2">
              <i className="fab fa-css3"></i>
            </div>
            <div className="icon icon3">
              <i className="fab fa-js"></i>
            </div>
            <div className="icon icon4">
              <i className="fab fa-react"></i>
            </div>
            <div className="icon icon5">
              <i className="fab fa-node-js"></i>
            </div>
            <div className="icon icon6">
              <i className="fab fa-python"></i>
            </div>
            <div className="icon icon7">
              <i className="fab fa-php"></i>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
