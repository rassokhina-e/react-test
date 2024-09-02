import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import styles from './styles.module.scss';

type Props = {
    onClick: () => void;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4
};

const ErrorModal: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className={styles.modal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Error
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Error occurs
                </Typography>
                <div className={styles.modalBtnWrap}>
                    <button className={styles.modalBtn} onClick={props.onClick}>Go to Home Page</button>
                </div>
            </Box>
        </Modal>
    </div>
  );
}

export default React.memo(ErrorModal)
