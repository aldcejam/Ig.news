import { FaGithub } from 'react-icons/fa'
import { FiX } from "react-icons/fi"
import styles from "./SingInbutton.module.scss"
import { signIn, useSession } from 'next-auth/react'

export function SingInButton() {
    const { data: session, status } = useSession();


    return session ? ((
        <button
            type="button"
            className={styles.singInButton}
        >
            <FaGithub color="#04d361" />
            PessoasName
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    )) : (
        (
            <button
                type="button"
                className={styles.singInButton}
                onClick={()=> signIn('github')}
            >
                <FaGithub color="#eba417" />
                Sing in with Github
            </button>
        )
    )
}