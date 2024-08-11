import React from 'react';

import styles from './styles.module.scss';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
        <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            // class="block bg-none mx-auto"
            style={{'shapeRendering': 'auto'}}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle cx="50" cy="50" fill="none" stroke="#d9d9d9" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"/>
            </circle>
        </svg>
    </div>
  );
}

export default React.memo(Spinner)
