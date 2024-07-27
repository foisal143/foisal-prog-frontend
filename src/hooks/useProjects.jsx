import { useQuery } from '@tanstack/react-query';

const useProjects = () => {
  const { data: projects, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch('projectsData.json');
      const data = await response.json();
      return data;
    },
  });

  return { projects, refetch };
};

export default useProjects;
