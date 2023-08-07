import axios from "axios";

export const fetchCoinPrice = async (coinSymbol: string) =>
  await axios.get(`https://trade.cointree.com/api/prices/aud/${coinSymbol}`);
