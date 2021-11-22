import axios from "axios";

const ALBUM_API_BASE_URL = "http://localhost:8090/api/album";

class AlbumService {
  getAllAlbum() {
    return axios.get(ALBUM_API_BASE_URL);
  }

  createAlbum(album) {
    return axios.post(ALBUM_API_BASE_URL, album);
  }

  deleteAlbum(albumId) {
    return axios.delete(ALBUM_API_BASE_URL + "/" + albumId);
  }

  getAlbumById(albumId) {
    return axios.get(ALBUM_API_BASE_URL + "/" + albumId);
  }

  updateAlbum(album, albumId) {
    return axios.put(ALBUM_API_BASE_URL + "/" + albumId, album);
  }
}

export default new AlbumService();