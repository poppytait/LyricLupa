import axios from "axios";

const MUSIXMATCH_API_KEY = "172d7a4352f4df9b2be9ec094a576346";

export default class MusixmatchClient {
  constructor() {
    this.axios = axios.create({
      baseURL:
        "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/",
      credentials: false
    });
  }

  search(query, searchCategory) {
    // axios.get wouldn't give access to the axios.create in the constructor. diff axios
    // you must RETURN something from a function if you want to access it outside the function
    return this.axios
      .get(`/${searchCategory}.search?apikey=${MUSIXMATCH_API_KEY}&q=${query}`)
      .then(({ data: { message } }) => message.body[`${searchCategory}_list`]);
  }
}
