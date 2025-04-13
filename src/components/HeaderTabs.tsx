import {  useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HeaderTabs() {
  // const location = useLocation();
  const navigate = useNavigate();

  // const currentPath = location.pathname.replace('/', '') || 'posts';

   return (
    // <Tabs value={currentPath} className="w-full mb-6">
    //   <TabsList className="flex justify-center w-full">
    //     <TabsTrigger value="posts" onClick={() => navigate('/')} className="text-center">
    //       Posts
    //     </TabsTrigger>
    //     <TabsTrigger value="comments" onClick={() => navigate('/comments')} className="text-center">
    //       Comments
    //     </TabsTrigger>
    //     <TabsTrigger value="users" onClick={() => navigate('/users')} className="text-center">
    //       Users
    //     </TabsTrigger>
    //   </TabsList>
    // </Tabs>
    <Tabs defaultValue="posts" className="w-full mb-6">
    <TabsList>
      <TabsTrigger value="posts" onClick={() => navigate('/')}>Posts</TabsTrigger>
    </TabsList>
  </Tabs>
);

}
