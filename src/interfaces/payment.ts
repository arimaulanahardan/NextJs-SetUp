export type Ipayments = {
  id: string;
  name: string;
  amount: number;
  status: "pending" | "success" | "failed" | "processing";
  email: string;
};
