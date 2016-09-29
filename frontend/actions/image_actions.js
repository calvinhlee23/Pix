export const ImageConstants = {
  RECEIVE_AN_IMAGE: "RECEIVE_AN_IMAGE",
  POST_IMAGE: "POST_AN_IMAGE"
};

// for store
export const receiveAnImage = (cloud_url) => ({
  type: ImageConstants.RECEIVE_AN_IMAGE,
  cloud_url
});

// for API
export const postImage = (cloud_url) => ({
  type: ImageConstants.POST_IMAGE,
  cloud_url
});
