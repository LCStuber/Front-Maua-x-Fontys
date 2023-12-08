import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: '#001C35',
    color: '#f6f6f6',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ModalStudents({stuOrg, open, onClose}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{"borderBottom": "1px solid #f6f6f6", marginBottom: "8px"}} id="modal-modal-title" variant="p" component="h2">
            {stuOrg.name}
          </Typography>
          <Typography variant="p" component="h4">
            {stuOrg.description}
          </Typography>
          <IconButton>
            <CloseIcon sx={{top: "0", right: "0", position: "fixed", filter: "invert()"}} fontSize="large" onClick={onClose} />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
}