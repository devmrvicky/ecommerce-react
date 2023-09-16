import { useEffect } from "react";

const useGetProducts = (URL, setProduct) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [URL, setProduct]);
};
export default useGetProducts;
