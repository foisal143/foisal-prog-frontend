const SocialIcon = ({ Icon, link, color, animate, duration }) => {
  return (
    <a
      data-aos={animate}
      data-aos-duration={duration}
      href={link}
      target="_blank"
      className={`w-[35px] h-[35px] flex justify-center items-center shadow-sm hover:shadow-md transition-all hover:shadow-white cursor-pointer shadow-white bg-transparent  rounded-full ${color}`}
    >
      <Icon />
    </a>
  );
};

export default SocialIcon;
