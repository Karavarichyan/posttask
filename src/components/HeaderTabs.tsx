import {  useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HeaderTabs() {
  const navigate = useNavigate();


   return (

    <Tabs defaultValue="posts" className="w-full mb-6">
    <TabsList>
      <TabsTrigger value="posts" onClick={() => navigate('/')}>Posts</TabsTrigger>
    </TabsList>
  </Tabs>
);

}
