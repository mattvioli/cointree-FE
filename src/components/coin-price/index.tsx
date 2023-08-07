"use client";
import { useState } from "react";
import { useFetchCoinPrice } from "@/hooks/useFetchCoinPrice";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Title } from "@/components/title";
import { DisplayCoin } from "@/components/display-coin";
import { Modal } from "@/components/modal";
import { CoinPicker } from "@/components/coin-picker";

export const CoinPrice = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [coinName, setCoinName] = useState("");
  const {
    data: priceData,
    error,
    isLoading,
  } = useFetchCoinPrice({
    coinSymbol: coinName,
  });

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card>
        <Title>Check Coin Price</Title>
        <Button onClick={() => setModalOpen(true)}>
          Select an asset to check
        </Button>
        <DisplayCoin {...{ coinName }} askPrice={priceData?.ask} />
        {error && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}
      </Card>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <CoinPicker {...{ setCoinName, handleCloseModal }} />
      </Modal>
    </>
  );
};
