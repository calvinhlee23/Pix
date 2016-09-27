// data: {user: {email: , password: public (default true):, username}}
export const signup = (data, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: data,
    success,
    error
  });
};

// data: {user: {email, password}}
export const login = (data, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/sessions",
    data,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    method: "DELETE",
    url: "/api/sessions",
    dataType: "json",
    success,
    error
  });
};
