import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostList from './components/PostList'
import PostPage from './components/PostPage'
function App() {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

        <Routes>
          <Route path="/" element={<PostList />} />

          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
