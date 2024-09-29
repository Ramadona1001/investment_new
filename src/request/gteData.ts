import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

export const getData = (
  domain: string,
  params: null | Record<string, any> = null
): Promise<AxiosResponse<any>> => {
  return new Promise((resolve, reject) => {
    const lng = Cookies.get("i18next") || "ar";

    axios
      .get(`https://dashboard.sgidtest.online/api/${domain}`, {
        params: params,
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
          "Accept-Language": lng,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const postData = (domain: any, data: any) => {

  return new Promise((resolve, reject) => {
    axios
      .post(`https://dashboard.sgidtest.online/api/${domain}`, data, {
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};