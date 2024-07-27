const TitleText = ({ text, styles, animation }) => {
  return (
    <h3
      data-aos={animation}
      data-aos-offset="100"
      className={`headerFont md:w-1/4 w-1/2 rounded-md border-[aqua] mx-auto border-t-2 border-b-2 py-2 text-center text-xl md:text-3xl ${styles}`}
    >
      {text}
    </h3>
  );
};

export default TitleText;
