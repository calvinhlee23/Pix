// imgData = {image: {user_id: , cloud_url:}}
export const postImage = (imgData, success) => {
  $.ajax({
    method: "POST",
    url: "/api/images",
    data: imgData,
    success
  });
};

export const requestImages = (url, success, error) => {
  $.ajax({
    method: "GET",
    url: url,
    success,
    error
  });
};

export const requestUserImages = (url, userName, success, error) => {
  $.ajax({
    method: "GET",
    url: url,
    data: {userName: userName},
    success,
    error
  });
};
