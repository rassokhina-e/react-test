import React from 'react';

import styles from './styles.module.scss';

const ErrorModal = (props) => {
  const [homePageRedirection, setHomePageRedirection] = React.useState(false);

  React.useEffect(() => {
    props.homePageRedirection = homePageRedirection;
    console.log('homePageRedirection', homePageRedirection);
  }, []);

  return (
    <div className={styles.wrapper}>
        <div  className={styles.modal}>
            <div>Error occurs</div>
            <div className={styles.modalBtnWrap}>
                <button className={styles.modalBtn} onClick={setHomePageRedirection(true)}>Go to Home Page</button>
            </div>
        </div>
    </div>
  );
}

export default React.memo(ErrorModal)
