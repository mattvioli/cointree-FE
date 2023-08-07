import Image from "next/image";
import { Container } from "./container";

export const Navbar = () => {
  return (
    <div
      data-testid="navbar"
      className="flex flex-row justify-center z-10 w-full items-center font-mono text-sm lg:flex bg-white min-h-[3.25rem] shadow-lg"
    >
      <Container>
        <Image
          src="/cointree.svg"
          alt="Cointree Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Container>
    </div>
  );
};
