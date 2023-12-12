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
    width: "80%",
    bgcolor: '#001C35',
    color: '#f6f6f6',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

    //media query
    '@media (min-width: 880px)': {
      width: "400px",
    },
  };

const styleImagem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  maxHeight: "50%",
  maxWidth: "50%",
  margin: "auto",
  marginTop: "20px",
  marginBottom: "20px",
  borderRadius: "50%",
}

export default function ModalCourse({course, open, onClose, type}) {
  if (type === "coordinator"){
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
              {course.name}
            </Typography>
            <Typography variant="p" component="h4">
              Coordenador(a): {course.coordinator}
            </Typography>
            <Typography variant="p" component="h5">
              Email: {course.coordinatorEmail}
            </Typography>
            <Typography id="modal-modal-description" variant="p" component="h5" style={styleImagem}>
              <img src={course.coordinatorImage} style={{textAlign: 'center'}} alt={"Coordenador do curso: " + course.name}/>
            </Typography>
            <IconButton>
              <CloseIcon sx={{top: "0", right: "0", position: "fixed", filter: "invert()"}} fontSize="large" onClick={onClose} />
            </IconButton>
          </Box>
        </Modal>
      </div>
    );
  }
  else{
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
              {course.name}
            </Typography>
            <Typography variant="p" component="h4">
              {course.description}
            </Typography>
            <IconButton>
              <CloseIcon sx={{top: "0", right: "0", position: "fixed", filter: "invert()"}} fontSize="large" onClick={onClose} />
            </IconButton>
          </Box>
        </Modal>
      </div>
    );
  }
}