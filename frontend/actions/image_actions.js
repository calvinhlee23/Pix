export const ImageConstants = {
  RECEIVE_AN_IMAGE: "RECEIVE_AN_IMAGE",
  POST_IMAGE: "POST_AN_IMAGE",
  REQUEST_IMAGES: "REQUEST_IMAGES",
  RECEIVE_IMAGES: "RECEIVE_IMAGES",
  REQUEST_USER_IMAGES: "REQUEST_USER_IMAGES"
};

// for reducer
export const receiveAnImage = (image) => ({
  type: ImageConstants.RECEIVE_AN_IMAGE,
  image
});

export const receiveImages = (images) => ({
  type: ImageConstants.RECEIVE_IMAGES,
  images
});

// for middle
export const postImage = (cloud_url) => ({
  type: ImageConstants.POST_IMAGE,
  cloud_url
});

// for middle
export const requestImages = (imageType, userName, limit) => ({
  type: ImageConstants.REQUEST_IMAGES,
  imageType,
  userName,
  limit
});
