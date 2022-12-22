import { Box, Fab, Modal, styled, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon sx={{ color: "white" }} />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={300} bgcolor="white" p={3} borderRadius={2}>
          <Typography
            variant="h5"
            fontWeight={500}
            color="white"
            textAlign="center"
            bgcolor="primary.main"
            p={2}
          >
            Create Post
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
