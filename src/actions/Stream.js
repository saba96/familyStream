export function uploadImages(images) {
  console.log(images);
  return {
    type: 'UPLOAD_IMAGES',
    images
  }
}
