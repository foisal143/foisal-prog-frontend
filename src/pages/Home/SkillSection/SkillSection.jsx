import Container from '../../../components/Container';
import TitleText from '../../../components/TitleText';
import './SkillSection.css';
const SkillSection = () => {
  return (
    <Container>
      <div className="my-24">
        <TitleText text="skills" animation="fade-down" />

        <div className="lg:flex bg-dark p-5 rounded-md overflow-hidden justify-between gap-10 my-20">
          <div className=" w-full mt-12 md:mt-0">
            <h3 data-aos="fade-right" className="text-xl headerFont">
              Tecnical <span className="text-[aqua]">Skills</span>
            </h3>

            <div
              data-aos="fade-right"
              className="bg-dark  overflow-hidden mt-5  p-5"
            >
              <div data-aos="fade-right" data-aos-duration="1000">
                <label htmlFor="html">HTML</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="90%"
                    min={0}
                    max="100"
                    value="90"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>90%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="1500">
                <label htmlFor="html">CSS</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="80%"
                    min={0}
                    max="100"
                    value="80"
                    className="w-full  bg-white "
                  />{' '}
                  <span>80%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="2000">
                <label htmlFor="html">JS</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="90%"
                    min={0}
                    max="100"
                    value="90"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>90%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="2500">
                <label htmlFor="html">TYPSCRIPT</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="90%"
                    min={0}
                    max="100"
                    value="90"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>90%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="3000">
                <label htmlFor="html">REACT</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="90%"
                    min={0}
                    max="100"
                    value="90"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>90%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="1000">
                <label htmlFor="html">NODE JS</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="70%"
                    min={0}
                    max="100"
                    value="70"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>70%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="2000">
                <label htmlFor="html">EXPRESS JS</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="90%"
                    min={0}
                    max="100"
                    value="90"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>90%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="1500">
                <label htmlFor="html">MONGODB</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="90%"
                    min={0}
                    max="100"
                    value="90"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>90%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="2500">
                <label htmlFor="html">MONGOOSE</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="85%"
                    min={0}
                    max="100"
                    value="85"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="lg:w-[2px] mt-12 lg:mt-0 h-[2px] w-full lg:h-[550px]  bg-[aqua]"
          ></div>
          <div className=" w-full mt-12 md:mt-0">
            <h3 data-aos="fade-left" className="text-xl headerFont">
              Soft <span className="text-[aqua]">Skills</span>
            </h3>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="bg-dark overflow-hidden mt-5 rounded-md p-5"
            >
              <div data-aos="fade-left" data-aos-duration="1500">
                <label htmlFor="html">COMUNICATION</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="70%"
                    min={0}
                    max="100"
                    value="70"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>70%</span>
                </div>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000">
                <label htmlFor="html">TEAMPLAYER</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="80%"
                    min={0}
                    max="100"
                    value="80"
                    className="w-full  bg-white "
                  />{' '}
                  <span>80%</span>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="1500">
                <label htmlFor="html">LEADERSHIP</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="60%"
                    min={0}
                    max="100"
                    value="60"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>60%</span>
                </div>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000">
                <label htmlFor="html">MARKATING</label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    title="70%"
                    min={0}
                    max="100"
                    value="70"
                    className="w-full text-red-500 bg-white "
                  />{' '}
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SkillSection;
