import { useCommentsQuery } from '@/hooks/useCommentsQuery';

export default function CommentList() {
  const { data, isLoading, isError } = useCommentsQuery();

  if (isLoading) return <div>Loading comments...</div>;
  if (isError) return <div>Error loading comments.</div>;

  return (
    <ul className="space-y-4">
      {data?.map((comment) => (
        <li key={comment.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{comment.name}</h2>
          <p className="text-sm text-gray-500">{comment.email}</p>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
