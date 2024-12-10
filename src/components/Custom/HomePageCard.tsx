import { AspectRatio, Box, Card, Heading, Inset, Text } from "@radix-ui/themes";

import CanopyLink from "@components/Shared/Link";
import Image from "next/image";

interface HomePageCardProps {
  href: string;
  title: string;
  description: string;
  image: string;
}

const HomePageCard: React.FC<HomePageCardProps> = ({
  href,
  title,
  description,
  image,
}) => {
  return (
    <Box
      width={{
        initial: "100%",
        sm: "33.3333%",
      }}
    >
      <Card size="3">
        <CanopyLink href={href}>
          <Inset clip="padding-box" side="top" pb="current">
            <AspectRatio
              ratio={1}
              style={{
                width: "100%",
              }}
            >
              <Image
                src={image}
                alt={title}
                fill={true}
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </AspectRatio>
          </Inset>
        </CanopyLink>
        <CanopyLink href={href}>
          <Heading as="h3" size="4" mb="3">
            {title}
          </Heading>
        </CanopyLink>
        <Text>{description}</Text>
      </Card>
    </Box>
  );
};

export default HomePageCard;
