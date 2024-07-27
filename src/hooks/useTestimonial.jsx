import { useQuery } from '@tanstack/react-query';

const useTestimonial = () => {
  const { data: testimonials, refetch } = useQuery({
    queryKey: ['testimonial'],
    queryFn: async () => {
      const res = await fetch('testimonial.json');
      const data = await res.json();
      return data;
    },
  });

  return { testimonials, refetch };
};

export default useTestimonial;
