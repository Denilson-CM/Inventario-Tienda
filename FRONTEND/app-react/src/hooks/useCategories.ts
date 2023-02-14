import { useEffect, useState } from "react";
import { urlListaC } from "../endpoints";
import { helpHttp } from "../helpers/helpHttp";
import { Categories } from "../interfaces/types";

export const useCategories = () => {
  const [listApiCategories, setListApiCategories] = useState<Array<Categories>>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Object>({});

  const getCategories = async () => {
    try {
      setLoading(true);
      let resApi = await helpHttp().get(urlListaC);
      setListApiCategories(resApi);
      setError({});
    } catch (error: any) {
      setListApiCategories([]);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return {
    listApiCategories,
    loading,
    error,
  };
};
