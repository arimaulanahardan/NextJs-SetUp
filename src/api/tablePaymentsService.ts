import { Ipayments } from "@/interfaces/paymentInterface";
import { mockPayments } from "./mocks/mocksPayments";

export const tablePaymentsService = {
  getPayments: async (): Promise<Ipayments[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockPayments);
        }, 3000);
        }
    );
  },
};