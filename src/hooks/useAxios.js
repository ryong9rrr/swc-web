import axios from "axios";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAxios(api) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({
      type: "LOADING",
    });
    try {
      const res = await axios.get(
        `http://ec2-3-34-212-96.ap-northeast-2.compute.amazonaws.com:8000/api/${api}`
      );
      dispatch({ type: "SUCCESS", data: res.data });
    } catch (e) {
      console.log(`useAxios error message : ${e}`);
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    //console.log("useEffect");
    fetchData();
  }, []);

  // loading, data, error
  return { ...state };
}

export default useAxios;
