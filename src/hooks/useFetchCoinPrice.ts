import { useQuery } from "react-query";
import { fetchCoinPrice } from "@/queries/fetchCoinPrice";
import { ApiError } from "next/dist/server/api-utils";

export function useFetchCoinPrice({ coinSymbol }: { coinSymbol: string }) {
  const { data, remove, refetch, isFetching, isLoading, status, error } =
    useQuery({
      queryFn: async () => (await fetchCoinPrice(coinSymbol)).data,
      queryKey: ["coin", { coinSymbol }],
      onError: (err: ApiError) => err,
    });

  return {
    data,
    remove,
    refetch,
    isFetching,
    isLoading,
    status,
    error,
  };
}
