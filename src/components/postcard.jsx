import LikeButton from "./likebutton";

const PostCard = ({ profilePic, username, content }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <div className="flex items-center mb-2">
        <img src={profilePic} alt={username} className="w-10 h-10 rounded-full mr-3" />
        <h2 className="font-bold">{username}</h2>
      </div>
      <p className="mb-3">{content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;