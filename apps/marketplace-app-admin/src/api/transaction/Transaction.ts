export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
