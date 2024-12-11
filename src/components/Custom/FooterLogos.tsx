import { Flex } from "@radix-ui/themes";
import Image from "next/image";

const FooterLogos = () => {
  return (
    <Flex
      wrap="wrap"
      gap="9"
      justify="center"
      align="center"
      width="100%"
      mb="9"
    >
      <Image
        alt="Northwestern University"
        src="/images/northwestern.jpg"
        width={150}
        height={48}
      />
      <Image
        alt="Northwestern Institute for the Study of Islamic Thought in Africa"
        src="/images/northwestern-isita.jpg"
        width={150}
        height={64}
      />
      <Image
        alt="University of Illinois Urbana-Champaign"
        src="/images/illinois.jpg"
        width={150}
        height={39}
      />
      <Image
        alt="National Endowment for the Arts"
        src="/images/neh.jpg"
        width={150}
        height={55}
      />
    </Flex>
  );
};

export default FooterLogos;
