import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://react-burger-ca512.firebaseio.com/"
});

export default instance;