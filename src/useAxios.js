import React from "react";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    console.log("error");
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(new Date());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
