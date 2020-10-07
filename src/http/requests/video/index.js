import axios from "../../axios"

export default {
  getVideos(filters) {
    return axios.get(`videos${filters}`)
  },
  getVideo(id) {
    return axios.get(`videos/${id}`)
  },
  update(payload) {
    return axios.put(`videos/${payload.id}`,payload.data)
  },
}
