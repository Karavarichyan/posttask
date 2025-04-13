import { useQuery } from '@tanstack/react-query';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const useCommentsQuery = () => {
  return useQuery<Comment[]>({
    queryKey: ['comments'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const res = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (!res.ok) {
        throw new Error('Failed to fetch comments');
      }
      return res.json();
    },
  });
};
