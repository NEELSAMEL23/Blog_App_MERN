import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{post.category}</p>
        <p className="text-gray-700 mt-2 line-clamp-2">{post.content}</p>
        <Link to={`/post/${post._id}`} className="text-blue-600 mt-4 inline-block">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
