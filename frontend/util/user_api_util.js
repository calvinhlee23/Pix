export const requestTargetUser = (userName, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/targetUser/",
    data: {userName: userName},
    success,
    error
  });
};
