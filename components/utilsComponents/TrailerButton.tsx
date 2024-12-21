import { PlayArrowRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { TrailerButtonProps } from "./types";
import { Modal, ModalClose, ModalDialog } from "@mui/joy";

export const TrailerButton = ({ TrailerKey }: TrailerButtonProps) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const youtubeUrl = TrailerKey ? `https://www.youtube.com/embed/${TrailerKey}` : "";
  
  return (
    <div>
      <button
        className="rounded-lg bg-[#F0B90B] text-[#343434] font-semibold text-lg py-2 w-[300px] mt-4"
        onClick={() => setShowTrailer(true)}
      >
        Oficial Trailer <PlayArrowRounded />
      </button>
      <Modal open={showTrailer} onClose={()=> setShowTrailer(false)}>
        <ModalDialog
           sx={{
            width: '60vw',
            height: '60vh',
            maxWidth: '1200px',
            backgroundColor: 'black',
            color: 'white',
            padding: 0,
            borderRadius: '8px',
            border: 'none',
          }}
        >
        <ModalClose/>
        <div className="mt-8 w-full h-full">

      {showTrailer && (
        <iframe
        width="100%"
        height="100%"
        src={youtubeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        ></iframe>
        
      )}
      </div>
      </ModalDialog>
      </Modal>
    </div>
  );
};
