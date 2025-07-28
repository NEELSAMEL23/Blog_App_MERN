const CommentBox = ({ comment }) => {
  return (
    <div className="border p-3 rounded-lg bg-gray-50 my-2">
      <div className="text-sm text-gray-800">{comment.content}</div>
      <div className="text-xs text-gray-500 mt-1">— {comment.user?.name || "Anonymous"}</div>
    </div>
  );
};

export default CommentBox;
