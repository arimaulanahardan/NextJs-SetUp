import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Idata } from "@/interfaces/dataInterface";
import { dataTableService } from "@/api/dataTableService";

export const useFetchDataTable = () => {
  const [data, setData] = useState<Idata[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await dataTableService.getData();
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading };
};