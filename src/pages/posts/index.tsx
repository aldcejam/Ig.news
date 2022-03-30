import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>Posts | ignews</Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>21 de janeito de 2004</time>
                        <strong>Guedes: subsidiar gás para pessoas desfavorecidas é mais eficiente que congelar preços</strong>
                        <p>O ministro da Economia, Paulo Guedes, afirmou nesta terça-feira (29/3) que subsidiar o preço do gás para a população mais pobre é uma “medida mais eficiente” do que congelar preços. A declaração foi feita durante coletiva à imprensa internacional, na embaixada do Brasil em Paris, na França.</p>
                    </a>
                    <a href='#'>
                        <time>21 de janeito de 2004</time>
                        <strong>Guedes: subsidiar gás para pessoas desfavorecidas é mais eficiente que congelar preços</strong>
                        <p>O ministro da Economia, Paulo Guedes, afirmou nesta terça-feira (29/3) que subsidiar o preço do gás para a população mais pobre é uma “medida mais eficiente” do que congelar preços. A declaração foi feita durante coletiva à imprensa internacional, na embaixada do Brasil em Paris, na França.</p>
                    </a>
                </div>
            </main>
        </>

    );
}

export const getStaticProps: GetStaticProps = async()=>{
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicate.at('document.type', 'publication')
    ],{
        fetch: ['publication.Title', 'publication.Content'],
        pageSize: 100
    })

    console.log(response)

    return {
        props: {}
    }
}