import PostCard from "./components/postcard";

const posts = [
  {
    id: 1,
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    username: "JohnDoe",
    content: "This is my first post!",
  },
  {
    id: 2,
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    username: "JaneSmith",
    content: "Hello world! Loving this platform. ❤",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-4">Social Media Feed</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;