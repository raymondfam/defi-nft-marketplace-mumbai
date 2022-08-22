import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { CssBaseline } from "@mui/material"

const APP_ID = "4eB73pFngIRsq35hRTTJuHFFyq7kNCHe4OE16iWt"
const SERVER_URL = "https://h22te1zf6urz.usemoralis.com:2053/server"

function MyApp({ Component, pageProps }) {
    return (
        <CssBaseline>
            <div>
                <Head>
                    <title>Defi NFT Marketplace</title>
                    <meta name="description" content="NFT Marketplace" />
                    <link rel="icon" href="/defi-nft-marketplace-mumbai/favicon.ico" />
                </Head>
                <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </MoralisProvider>
            </div>
        </CssBaseline>
    )
}

export default MyApp
