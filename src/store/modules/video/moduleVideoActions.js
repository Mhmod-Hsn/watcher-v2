import video from "../../../http/requests/video/index"

export default {
  getVideos({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      video
        .getVideos(payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          dispatch(
            "handleError",
            { reject: reject, error: error },
            { root: true }
          )
        })
    })
  },
  getVideo({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      video
        .getVideo(payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          dispatch(
            "handleError",
            { reject: reject, error: error },
            { root: true }
          )
        })
    })
  },
  update({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      video
        .update(payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          dispatch(
            "handleError",
            { reject: reject, error: error },
            { root: true }
          )
        })
    })
  },
}
