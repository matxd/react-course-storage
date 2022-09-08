import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  const httpConfig = (data, method) => {
    if(method === "POST"){
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      setMethod(method)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [url, callFetch])

  useEffect(() => {
    const httpRequest = async () => {
      if(method === "POST"){
        let fetchOptions = [url, config]
        const response = await fetch(...fetchOptions)
        const data = await response.json()
        setCallFetch(data)
      }
    }
    httpRequest()
  }, [config, method, url])

  return { data, httpConfig }
}