import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b683e7da0f854d4ab5c36fdd915acfeb"
    }
})