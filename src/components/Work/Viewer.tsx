import { Box } from "@radix-ui/themes";
import { CloverViewerProps } from "@samvera/clover-iiif";
import Viewer from "@src/components/Viewer/Viewer";

const WorkViewer = (props: CloverViewerProps) => {
  return (
    <Box style={{ height: "768px" }} position="relative">
      <Viewer
        options={{
          canvasHeight: "100%",
          canvasBackgroundColor: "var(--gray-a3)",
        }}
        {...props}
      />
    </Box>
  );
};

export default WorkViewer;
