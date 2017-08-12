export function uploadImage(image) {
  console.log(image);
  return {
    type: 'UPLOAD_IMAGE',
    image
  }
}
