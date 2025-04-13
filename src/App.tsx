// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import PostList from './components/PostList'
// import PostPage from './components/PostPage'
// function App() {
//   return (
//     <Router>
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

//         <Routes>
//           <Route path="/" element={<PostList />} />

//           <Route path="/post/:id" element={<PostPage />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PostList from './components/PostList';
import PostPage from './components/PostPage';
import HeaderTabs from './components/HeaderTabs';

import CommentsPage from './components/CommentsPage';
import UsersPage from './components/UsersPage';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6 min-h-screen">


        <HeaderTabs />

        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
