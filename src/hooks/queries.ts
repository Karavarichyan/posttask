
export const fetchPostById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
};

export const fetchUserById = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
};

export const fetchCommentsByPostId = async (postId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  if (!res.ok) throw new Error('Failed to fetch comments');
  return res.json();
};
