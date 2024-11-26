import { Box } from "@radix-ui/themes";
import { CloverScrollProps } from "@samvera/clover-iiif";
import Scroll from "../Viewer/Scroll";
import { headerHeight } from "@src/styles/global";
import { styled } from "@stitches/react";

const WorkScroll = (props: CloverScrollProps) => {
  return (
    <StyledWorkScroll>
      <Scroll
        {...props}
        options={{
          offset: headerHeight + 20,
          figure: {
            aspectRatio: 1,
            display: "thumbnail",
            width: "200px",
          },
          language: {
            enabled: true,
            defaultLanguages: ["en"],
            options: [{ en: "English" }, { ar: "Arabic" }],
          },
        }}
      />
    </StyledWorkScroll>
  );
};

const StyledWorkScroll = styled(Box, {});

export default WorkScroll;
