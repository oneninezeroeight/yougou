import axios from "axios";
export default function request(config) {
  const instance = axios.create({
    baseURL: "http://10.3.142.130:8088/",
    timeout: 5000
  });
  //请求本身返回的是一个Promise，方便异步操作
  return instance(config);
}
