export const ImageConstants = {
  RECEIVE_AN_IMAGE: "RECEIVE_AN_IMAGE",
  POST_IMAGE: "POST_AN_IMAGE",
  REQUEST_IMAGES: "REQUEST_IMAGES",
  RECEIVE_IMAGES: "RECEIVE_IMAGES",
  REQUEST_USER_IMAGES: "REQUEST_USER_IMAGES"
};

// for store
export const receiveAnImage = (image) => ({
  type: ImageConstants.RECEIVE_AN_IMAGE,
  image
});

// for API
export const postImage = (cloud_url) => ({
  type: ImageConstants.POST_IMAGE,
  cloud_url
});

// for API
export const requestImages = (imageType, userName) => ({
  type: ImageConstants.REQUEST_IMAGES,
  imageType,
  userName
});

export const receiveImages = (images) => ({
  type: ImageConstants.RECEIVE_IMAGES,
  images
});
