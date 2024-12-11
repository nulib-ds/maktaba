import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import illinois from "@/public/images/illinois.jpg";
import neh from "@/public/images/neh.jpg";
import northwestern from "@/public/images/northwestern.jpg";
import northwesternIsita from "@/public/images/northwestern-isita.jpg";

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
        src={northwestern}
        width={150}
        height={48}
      />
      <Image
        alt="Northwestern Institute for the Study of Islamic Thought in Africa"
        src={northwesternIsita}
        width={150}
        height={64}
      />
      <Image
        alt="University of Illinois Urbana-Champaign"
        src={illinois}
        width={150}
        height={39}
      />
      <Image
        alt="National Endowment for the Arts"
        src={neh}
        width={150}
        height={55}
      />
    </Flex>
  );
};

export default FooterLogos;
