const TitleText = ({ text, styles, animation }) => {
  return (
    <h3
      data-aos={animation}
      data-aos-offset="100"
      className={`headerFont text-center text-xl md:text-3xl ${styles}`}
    >
      {text}
    </h3>
  );
};

export default TitleText;
