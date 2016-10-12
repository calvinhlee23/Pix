export const requestTargetUser = (userName, success, error) => {
  var url = `/api/users/${userName}`;
  $.ajax({
    method: "GET",
    url,
    success,
    error
  });
};
