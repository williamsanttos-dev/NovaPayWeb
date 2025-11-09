import type { Transaction } from "./Transaction";

export type Block = {
  index: number;
  timestamp: string;
  transactions: Transaction[];
  prev_hash: string;
  nonce: number;
  hash: string;
};
