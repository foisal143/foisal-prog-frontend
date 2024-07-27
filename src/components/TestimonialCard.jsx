const TestimonialCard = ({ testimonial }) => {
  const { name, image, details, company } = testimonial;
  return (
    <div
      data-aos="zoom-in"
      className="space-y-5 bg-dark p-5 h-[450px] overflow-hidden"
    >
      <div className="flex gap-4 items-center">
        <img
          data-aos="fade-down"
          className="w-20 h-20 rounded-full"
          src={image}
          alt={name}
        />
        <div data-aos-duration="1500" data-aos="fade-left">
          <h3 data className="uppercase headerFont">
            {name}
          </h3>
          <p>{company}</p>
        </div>
      </div>
      <p data-aos-duration="2000" data-aos="fade-up" className="text-font">
        {details}
      </p>
    </div>
  );
};

export default TestimonialCard;
