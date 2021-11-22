import axios from "axios";

const SHARE_API_BASE_URL = "http://localhost:8090/api/share";

class ShareService {
  getShare() {
    return axios.get(SHARE_API_BASE_URL);
  }

  createShare(share) {
    return axios.post(SHARE_API_BASE_URL, share);
  }

  deleteShare(shareId) {
    return axios.delete(SHARE_API_BASE_URL + "/" + shareId);
  }

  getShareById(shareId) {
    return axios.get(SHARE_API_BASE_URL + "/" + shareId);
  }

  updateShare(share, shareId) {
    return axios.put(SHARE_API_BASE_URL + "/" + shareId, share);
  }
}

export default new ShareService();