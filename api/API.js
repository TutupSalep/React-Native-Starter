import axios from "axios/index";
import Urls from "./Urls";

const fetch = async (url , options = {
    method: 'GET',
    body: {}
}) => {
    const request = {
        baseURL: "https://batamnews.hyperspace.id/api/v1/",
        method: options.method,
        timeout: 500000,
        url,
        headers: options.head
    };
    if (request.method === "POST") request.data = options.body;
    const res = await axios(request);
    if (res.status === 200) {
        return res.data
    } else {
        throw res
    }
};

export default {
    getNews: () => {
        return fetch('all-news',{
            method : 'GET',
            head : {
                // 'Accept' : 'application/json',
                "Content-Type" : "application/json",
            }
        })
    },
}