export const UserConstants = {
  REQUEST_TARGET_USER: "REQUEST_TARGET_USER",
  RECEIVE_TARGET_USER: "RECEIVE_TARGET_USER"
};

export const requestTargetUser = (userName) => ({
  type: UserConstants.REQUEST_TARGET_USER,
  userName
});

export const receiveTargetUser = (targetUser) => ({
  type: UserConstants.RECEIVE_TARGET_USER,
  targetUser
});
