import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      quote: {},
      quotes: [],
      url_base: import.meta.env.VITE_QUOTE_URL_BASE,
    };
  },
  mutations: {
    GetRandomQuote(state) {
      axios
        .get(`${state.url_base}/random`)
        .then((response) => {
          if (state.quote._id != response.data._id) {
            state.quote = response.data;
          } else {
            console.log("dublicate");
            this.commit("GetRandomQuote");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    GetAllQuotes(state) {
      axios.get(`${state.url_base}/quotes`).then((response) => {
        state.quotes = response.data.results;
      });
    },
  },

  getters: {
    GetSpecificQuote: (state) => (id) => {
      return state.quotes.find((q) => q._id === id);
    },
  },
});

export default store;
