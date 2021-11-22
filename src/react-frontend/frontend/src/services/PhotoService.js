import axios from "axios";

const PHOTO_API_BASE_URL = "http://localhost:8090/api/photo";

class PhotoService {
  getAllPhoto() {
    return axios.get(PHOTO_API_BASE_URL);
  }

  getPhotosByName(photoName) {
    return axios.get(PHOTO_API_BASE_URL + "/" + photoName);
  }

  createPhoto(photo) {
    return axios.post(PHOTO_API_BASE_URL, photo);
  }

  deletePhoto(photoId) {
    return axios.delete(PHOTO_API_BASE_URL + "/" + photoId);
  }

  getPhotoById(photoId) {
    return axios.get(PHOTO_API_BASE_URL + "/" + photoId);
  }

  updatePhoto(photo, photoId) {
    return axios.put(PHOTO_API_BASE_URL + "/" + photoId, photo);
  }
}

export default new PhotoService();