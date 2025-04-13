import { useQuery } from '@tanstack/react-query';

export const usePostsQuery = () => {
  return useQuery<{
    "userId": number;
    "id": number;
    "title": string;
    "body": string;
  }[]>({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
        if (!res.ok) {
          throw new Error('error')
        }
        return res.json()
      }),
  })
}
