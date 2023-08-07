import { renderHook, waitFor } from "@testing-library/react";
import { useFetchCoinPrice } from "./useFetchCoinPrice";
import { QueryClientProvider, QueryClient } from "react-query";

jest.mock("@/queries/fetchCoinPrice", () => ({
  fetchCoinPrice: jest.fn((coinSymbol) => ({
    data: {
      symbol: coinSymbol,
      price: 50000,
    },
  })),
}));

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useFetchCoinPrice hook", () => {
  it("fetches the coin price data correctly", async () => {
    const coinSymbol = "BTC";

    const { result } = renderHook(() => useFetchCoinPrice({ coinSymbol }), {
      wrapper,
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isFetching).toBe(true);

    await waitFor(() =>
      expect(result.current.data).toEqual({
        symbol: coinSymbol,
        price: 50000,
      })
    );
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    await waitFor(() => expect(result.current.isFetching).toBe(false));
    await waitFor(() => expect(result.current.error).toBeNull());
  });
});
