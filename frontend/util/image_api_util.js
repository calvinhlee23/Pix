// imgData = {image: {user_id: , cloud_url:}}
export const postImage = (imgData, success) => {
  $.ajax({
    method: "POST",
    url: "/api/images",
    data: imgData,
    success
  });
};
