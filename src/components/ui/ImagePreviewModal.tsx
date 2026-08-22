import React from "react";
import { Modal, Backdrop, Fade, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

interface ImagePreviewModalProps {
  selectedImage: string | null;
  onClose: () => void;
  altText?: string;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  selectedImage,
  onClose,
  altText = "Certificate Preview",
}) => {
  return (
    <Modal
      open={!!selectedImage}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(2, 6, 23, 0.9)", // Deep slate-dark background
            backdropFilter: "blur(12px)",
          },
          timeout: 500,
        },
      }}
    >
      <Fade in={!!selectedImage} timeout={500}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            outline: "none",
            p: { xs: 2, md: 4 },
          }}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            {/* Minimal Close Button */}
            <IconButton
              onClick={onClose}
              sx={{
                alignSelf: "flex-end",
                mb: 2,
                color: "white",
                bgcolor: "rgba(255,255,255,0.05)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
              }}
            >
              <Close fontSize="large" />
            </IconButton>

            {/* The Certificate Image */}
            <img
              src={selectedImage || ""}
              alt={altText}
              className="rounded-2xl shadow-2xl border border-white/10"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ImagePreviewModal;