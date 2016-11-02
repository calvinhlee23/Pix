// imgData = {image: {user_id: , cloud_url:}}
export const postImage = (imgData, success) => {
  $.ajax({
    method: "POST",
    url: "/api/images",
    data: imgData,
    success
  });
};

export const requestImages = (url, limit, success, error) => {
  $.ajax({
    method: "GET",
    url: url,
    data: {limit: limit},
    success,
    error
  });
};

export const requestUserImages = (url, userName, limit, success, error) => {
  $.ajax({
    method: "GET",
    url: url,
    data: {userName: userName, limit: limit},
    success,
    error
  });
};
