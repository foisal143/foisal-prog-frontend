import Container from '../../../components/Container';
import TitleText from '../../../components/TitleText';

const SubscibeSection = () => {
  return (
    <Container>
      <div className="my-24 mt-32">
        <TitleText text="Subscribe For Newsletter" />

        <div className="mt-20 flex justify-center items-center">
          <div className="lg:w-1/2 flex justify-between ps-5 border rounded-full">
            <input
              className="bg-transparent  rounded-full outline-none px-2 py-4 w-10/12"
              type="email"
              placeholder="example@gmail.com"
            />{' '}
            <button className="border-s-[1px] border-[aqua] rounded-e-full hover:text-black uppercase  hover:bg-[aqua] transition-all duration-500 px-8 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SubscibeSection;
