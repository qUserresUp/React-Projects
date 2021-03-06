import React from 'react';
import styles from './BuildControl.module.css';


const buildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button 
            className={styles.Less} 
            onClick={props.removeIngHandle}
            disabled={props.disabledInfo}
        >
        less
        </button>
        <button 
            className={styles.More} 
            onClick={props.addIngHandle}
        >
        More
        </button>
    </div>
)

export default buildControl;