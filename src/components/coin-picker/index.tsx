import React, { useState } from "react";
import { Coin } from "./coin";

const COINS = ["BTC", "ETH", "XRP"];

export const CoinPicker = ({
  setCoinName,
  handleCloseModal,
}: {
  setCoinName: (coinName: string) => void;
  handleCloseModal: () => void;
}) => {
  const [filter, setFilter] = useState("");

  const filteredCoins = COINS.filter((coin) =>
    coin.toLowerCase().includes(filter.toLowerCase())
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleOnClick = (coinName: string) => {
    setCoinName(coinName);
    handleCloseModal();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Type an asset symbol"
        value={filter}
        onChange={handleInputChange}
        className="p-2 rounded border-2 focus:outline-none focus:ring-2 ring-green"
      />
      {filteredCoins.length === 0 ? (
        <p className="mt-2">No coins found.</p>
      ) : (
        <div className="flex flex-wrap gap-5 mt-3">
          {filteredCoins.map((coin, index) => (
            <Coin
              key={index}
              onClick={() => handleOnClick(coin)}
              coinName={coin}
            />
          ))}
        </div>
      )}
    </div>
  );
};
