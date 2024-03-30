/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findPageRequest(page: number, name: string,  size = 12, sort = "name") {
  const config : AxiosRequestConfig = {
    method: "GET", 
    url: "/products",
    params: {
      page,
      name,
      size,
      sort
    }
  }

  return  requestBackend(config);
}

export function findById(id: number) {
  return requestBackend( { url: `/products/${id}` });
  }

  export function deleteById(id: number) {
    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: `/products/${id}`,
      withCredentials: true
    }

    return requestBackend(config);
  }

export function updateRequest(requestBody: any) {
    throw new Error('Function not implemented.');
}


export function insertRequest(requestBody: any) {
    throw new Error('Function not implemented.');
}
