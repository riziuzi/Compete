export const mergeCommentsAndLikes = (posts, commentsAndLikes) => {
  const commentsMap = new Map();
  const likesMap = new Map();

  // Group comments and likes by postId
  commentsAndLikes.comments.forEach(comment => {
    const postId = comment.postId;
    if (!commentsMap.has(postId)) {
      commentsMap.set(postId, []);
    }
    commentsMap.get(postId).push(comment);
  });

  commentsAndLikes.likes.forEach(like => {
    const postId = like.postId;
    if (!likesMap.has(postId)) {
      likesMap.set(postId, []);
    }
    likesMap.get(postId).push(like);
  });

  // Merge comments and likes into the posts array
  return posts.map(post => {
    const postId = post._id;

    // Retrieve comments and likes for the current post using Maps
    const postComments = commentsMap.get(postId) || [];
    const postLikes = likesMap.get(postId) || [];

    // Attach comments and likes to the post
    return {
      ...post,

      comments: postComments,
      likes: postLikes,

    };
  });
};