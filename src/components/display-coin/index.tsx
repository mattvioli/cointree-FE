export const DisplayCoin = ({
  coinName,
  askPrice,
}: {
  coinName?: string;
  askPrice?: number;
}) => {
  if (!coinName || !askPrice) return;
  return (
    <div>
      {coinName}: ${askPrice}
    </div>
  );
};
