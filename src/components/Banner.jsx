const Banner = ({ heading, breakpoint }) => {
  return (
    <div className="flex justify-center bg-primary items-center w-full h-[70vh]">
      <div className="w-fit space-y-3 flex justify-center flex-col items-center">
        <h3
          data-aos="zoom-in"
          className="text-3xl md:text-5xl lg:text-7xl headerFont"
        >
          {heading}
        </h3>
        <p
          data-aos="fade-down"
          className="px-8 w-fit py-3 uppercase rounded-full border"
        >
          {breakpoint}
        </p>
      </div>
    </div>
  );
};

export default Banner;
