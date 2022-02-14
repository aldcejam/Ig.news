import styles from './subscribeButton.module.scss'

export function SubscribeButton(){
    return(
        <button
        type="button"
        className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}