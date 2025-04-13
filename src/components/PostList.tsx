import { Link } from 'react-router-dom'
import { usePostsQuery } from '../hooks/usePostsQuery'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

function PostList() {
  const { data } = usePostsQuery()

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Vite + React</h1>

      {data?.slice(0, 20).map(post => (
        <Card key={post.id} className="mb-4">
          <CardHeader>
            <CardTitle>Post #{post.id}</CardTitle>
            <CardDescription>Author: User {post.userId}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-2">
            <p>
              <strong>User ID:</strong> {post.userId}
            </p>
            <p>
              <strong>Post ID:</strong> {post.id}
            </p>
            <p>
              <strong>Title:</strong> {post.title}
            </p>
          </CardContent>

          <CardFooter className="justify-end">
            <Link to={`/post/${post.id}`}>
              <Button variant="outline" size="sm">
                View Post
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default PostList
