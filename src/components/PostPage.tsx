// import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

// const fetchPostById = async (id: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   if (!res.ok) throw new Error('Failed to fetch post');
//   return res.json();
// };

// const fetchUserById = async (id: number) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   if (!res.ok) throw new Error('Failed to fetch user');
//   return res.json();
// };

// const fetchCommentsByPostId = async (postId: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
//   if (!res.ok) throw new Error('Failed to fetch comments');
//   return res.json();
// };

// export default function PostPage() {
//   const { id } = useParams();

//   const { data: post, isLoading: postLoading } = useQuery({
//     queryKey: ['post', id],
//     queryFn: () => fetchPostById(id!),
//     enabled: !!id,
//   });

//   const { data: user, isLoading: userLoading } = useQuery({
//     queryKey: ['user', post?.userId],
//     queryFn: () => fetchUserById(post?.userId),
//     enabled: !!post?.userId,
//   });

//   const { data: comments, isLoading: commentsLoading } = useQuery({
//     queryKey: ['comments', id],
//     queryFn: () => fetchCommentsByPostId(id!),
//     enabled: !!id,
//   });

//   if (postLoading || userLoading || commentsLoading) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
//       <p className="mb-4">{post.body}</p>

//       {user && (
//         <p className="mb-4 text-gray-600">
//           Author: {user.name} ({user.username})
//         </p>
//       )}

//       <h3 className="text-lg font-semibold mt-6 mb-2">Comments:</h3>
//       <ul className="space-y-2">
//         {comments?.map((comment: any) => (
//           <li key={comment.id} className="border p-2 rounded">
//             <p className="font-semibold">{comment.name}</p>
//             <p className="text-sm text-gray-500">{comment.email}</p>
//             <p>{comment.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById, fetchUserById, fetchCommentsByPostId } from '@/hooks/queries';
import { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink,  } from '@/components/ui/breadcrumb';
import { Loader2 } from 'lucide-react';

const Spinner = () => (
  <div className="flex justify-center items-center py-6">
    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
  </div>
);

const PostPage = () => {
  const { id } = useParams();
  const [loadExtra, setLoadExtra] = useState(false);

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
    enabled: loadExtra && !!post?.userId,
  });

  const {
    data: comments,
    isLoading: commentsLoading,
    error: commentsError,
  } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => fetchCommentsByPostId(id!),
    enabled: loadExtra && !!id,
  });

  if (postLoading) return <Spinner />;

  if (postError || !post) return <p>Error loading post.</p>;

  return (
    <div className="p-6 space-y-6">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-blue-600 font-semibold pl-2">
            Post #{post.id}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.body}</p>

      {!loadExtra && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          onClick={() => setLoadExtra(true)}
        >
          View Details
        </button>
      )}

      {loadExtra && (
        <>
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
        </>
      )}
    </div>
  );
};

export default PostPage;
