export function uploadImage(image) {
  return {
    type: 'UPLOAD_IMAGE',
    image
  }
}

export function setImages(images) {
  return {
    type: 'SET_IMAGES',
    images
  }
}
