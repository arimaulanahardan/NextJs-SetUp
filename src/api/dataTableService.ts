import { data } from "@/api/mocks/data";
import { Idata } from "@/interfaces/dataInterface";

export const dataTableService = {
  getData: async (): Promise<Idata[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  },
};
