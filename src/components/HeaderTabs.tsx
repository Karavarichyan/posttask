// src/components/HeaderTabs.tsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';

export default function HeaderTabs() {
  return (
    <Tabs defaultValue="posts" className="w-full max-w-4xl mx-auto mt-6">
      <TabsList className="flex justify-center gap-4">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
      </TabsList>

      <TabsContent value="posts">
        <div className="p-4"> posts</div>
      </TabsContent>
      <TabsContent value="comments">
        <div className="p-4"> coment</div>
      </TabsContent>
      <TabsContent value="users">
        <div className="p-4">users</div>
      </TabsContent>
    </Tabs>
  );
}
