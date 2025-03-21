import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-4 py-2 rounded-md text-white ${
        liked ? "bg-red-500" : "bg-gray-400"
      }`}
    >
      {liked ? "Unlike" : "Like"}
    </button>
  );
};

export default LikeButton;