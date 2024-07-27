import { FaEye, FaGithub } from 'react-icons/fa';
import SocialIcon from './SocialIcon';

const ProjectCard = ({ project }) => {
  const {
    image,
    name,
    frontendRepLink,
    backendRepLink,
    livelink,
    _id,
    details,
  } = project;
  return (
    <div className="card bg-transparent border border-[aqua] w-full shadow-xl">
      <figure className="h-1/2">
        <img className="h-full w-full" src={image} alt={name} />
      </figure>
      <div className="card-body px-2 pb-2">
        <h2 className="card-title uppercase headerFont">{name}</h2>
        <p className="text-font">{details?.substring(0, 45)} .....</p>
        <div className=" mt-5 pb-0 flex justify-between items-center gap-5">
          <div className="flex gap-3 items-center">
            <SocialIcon title="live website" link={livelink} Icon={FaEye} />
            <SocialIcon
              title="Frontend reqo link"
              link={frontendRepLink}
              Icon={FaGithub}
            />
            <SocialIcon
              title="Backend repo link"
              link={backendRepLink}
              Icon={FaGithub}
            />
          </div>
          <div>
            <button className="btn-small uppercase ">details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
