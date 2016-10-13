import {FollowConstants} from  '../actions/follow_actions';

export const followRequest = (type, userName, success, error) => {
  var method;
  var url = "api/follows";
  switch (type) {
    case FollowConstants.FOLLOW:
      method = "POST";
      break;
    case FollowConstants.UNFOLLOW:
      url = "api/follows/DELETE";
      method = "DELETE";
      break;
    default:
      return window.alert("ERROR! -follow api util");
  }

  $.ajax({
    method,
    url,
    data: {follow: {userName: userName} },
    success,
    error
  });
};
