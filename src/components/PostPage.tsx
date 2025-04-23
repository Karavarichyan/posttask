import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById, fetchUserById, fetchCommentsByPostId } from '@/hooks/queries';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Loader2 } from 'lucide-react';

const Spinner = () => (
  <div className="flex justify-center items-center py-6">
    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
  </div>
);

const PostPage = () => {
  const { id } = useParams();

  const {
    data: post,
    isLoading: postLoading,
    error: postError,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id!),
    enabled: !!id,
  });

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useQuery({
    queryKey: ['user', post?.userId],
    queryFn: () => fetchUserById(post!.userId),
    enabled: !!post?.userId,
  });

  const {
    data: comments,
    isLoading: commentsLoading,
    error: commentsError,
  } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => fetchCommentsByPostId(id!),
    enabled: !!id,
  });

  if (postLoading) return <Spinner />;

  if (postError || !post) return <p>Error loading post.</p>;

  return (
    <div className="p-6 space-y-6">
      <Breadcrumb className="text-gray-600">
        <BreadcrumbItem>
          <BreadcrumbLink href="/posts" className="hover:text-blue-600">Posts</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/posts" className="hover:text-blue-600"> ...</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-blue-600 font-semibold pl-2">
            Post #{post.id}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.body}</p>

      {userLoading ? (
        <Spinner />
      ) : userError ? (
        <p>Error loading author.</p>
      ) : (
        <div>
          <h3 className="font-semibold">Author:</h3>
          <p>
            {user.name} ({user.username})
          </p>
        </div>
      )}

      {commentsLoading ? (
        <Spinner />
      ) : commentsError ? (
        <p>Error loading comments.</p>
      ) : (
        <div>
          <h3 className="font-semibold mt-4">Comments:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {comments.map((comment: { id: number; name: string; body: string }) => (
              <li key={comment.id}>
                <p className="font-medium">{comment.name}</p>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostPage;
