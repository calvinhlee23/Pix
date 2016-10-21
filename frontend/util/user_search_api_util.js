export const UserSearchAPI = (query, success) => {
  $.ajax({
    method: "GET",
    url: "/api/users_search",
    data: {user_query: query},
    success
  });
};
