import Head from "next/head"
import styles from "../styles/Home.module.css"
import ManualHeader from "../components/ManualHeader"
import MainLotteryInfo from "../components/MainLotteryInfo"
import MainFooter from "../components/MainFooter"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Drop Lottery</title>
                <meta name="description" content="Drop - decenralized lottery" />
                <link rel="icon" href="/svgs/ethereumIcon.svg" />
            </Head>
            <ManualHeader />
            <MainLotteryInfo />
            <MainFooter />
        </div>
    )
}
