import axios from "axios";

const api = {
  user: {
    signIn: async (url, user) => 
      axios({
        method: "post",
        url,
        data: JSON.stringify(user),
      }).catch((error) => {
        if (error.response) {
          const {
            response: { data = {} },
          } = error;

          if (data.code) {
            return Promise.resolve(error.response);
          }
        }

        return Promise.reject(error);
      })
  },
};

export default api;
