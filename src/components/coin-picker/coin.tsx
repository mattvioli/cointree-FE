import Image from "next/image";

export const Coin = ({
  coinName,
  onClick,
}: {
  coinName: string;
  onClick: () => void;
}) => {
  return (
    <button {...{ onClick }}>
      <Image
        src={`/${coinName}.svg`}
        alt={`${coinName} Logo`}
        width={64}
        height={64}
        priority
      />
      {coinName}
    </button>
  );
};
