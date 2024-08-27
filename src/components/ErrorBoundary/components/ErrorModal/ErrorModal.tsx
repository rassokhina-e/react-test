import React from 'react';

import styles from './styles.module.scss';

type Props = {
    onClick: () => void;
}

const ErrorModal: React.FC<Props> = (props) => {
  return (
    <div className={styles.modalBackground}>
        <div className={styles.modalWrapper}>
            <div  className={styles.modal}>
                <div>Error occurs</div>
                <div className={styles.modalBtnWrap}>
                    <button className={styles.modalBtn} onClick={props.onClick}>Go to Home Page</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default React.memo(ErrorModal)
