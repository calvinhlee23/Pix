export const FollowConstants = {
  FOLLOW: "FOLLOW",
  UNFOLLOW: "UNFOLLOW"
};

export const requestFollow = (type, userName) => ({
  type,
  userName
});

export const processFollow = (type, userName) => ({
  type,
  userName
});
