import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers : {
        Authorization: "Bearer rVbzsiJ0Z4i4dXbbJJkfPT-GHSbievVoa0ZeFwJ-UOrIXLIFoBUM26C6LxPHre4QMXL3r6CsX_CtLB-Pe8P-hiEZd0oyiV27v-HBV-EjT-VnkRfgx2urke8sszQZZnYx"
    }
})