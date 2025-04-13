import { useParams } from 'react-router-dom'
import { usePostsQuery } from '../hooks/usePostsQuery'
import { useQuery } from '@tanstack/react-query'

const fetchPostById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }
  return res.json()
}

const PostPage = () => {
  const { id } = useParams()
  const { data: posts, isLoading: postsLoading, error: postsError } = usePostsQuery()

  const post = posts?.find(p => p.id === Number(id))

  const { data, isLoading, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id!),
    enabled: !post,
  })

  if (postsLoading || isLoading) return <p>Loading...</p>
  if (postsError || error) return <p>Failed to load post</p>
  if (!post && !data) return <p>Post not found</p>

  const currentPost = post || data

  return (
    <div className="p-6 min-h-[300px]">
      <h1 className="text-2xl font-bold mb-2">Post #{currentPost.id}</h1>
      <p className="text-gray-600 mb-4">Author: User {currentPost.userId}</p>
      <h2 className="text-xl font-semibold mb-2">{currentPost.title}</h2>
      <p>{currentPost.body}</p>
    </div>
  )
}

export default PostPage
