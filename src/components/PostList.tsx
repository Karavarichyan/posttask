import { Link } from 'react-router-dom';
import { usePostsQuery } from '@/hooks/usePostsQuery';
import { Loader2 } from 'lucide-react';

const Spinner = () => (
  <div className="flex justify-center items-center py-6">
    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
  </div>
);

export default function PostList() {
  const { data, isLoading, isError } = usePostsQuery();

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error loading posts</p>;

  return (
    <div className="space-y-4">
      {data?.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="mb-4">{post.body}</p>
          <Link to={`/post/${post.id}`} className="text-blue-500 underline">
            View Post
          </Link>
        </div>
      ))}
    </div>
  );
}
