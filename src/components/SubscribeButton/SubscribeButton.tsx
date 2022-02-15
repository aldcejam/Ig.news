import styles from './subscribeButton.module.scss'

interface SubscribeButtonProps{
    priceId: string
}

export function SubscribeButton({priceId}:SubscribeButtonProps){
    return(
        <button
        type="button"
        className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}