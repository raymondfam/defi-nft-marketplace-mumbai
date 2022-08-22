import styles from "../styles/Home.module.css"
import MutualsOptimizer from "../components/mutual-components/MutualsOptimizer"
import MutualsSwapForm from "../components/mutual-components/MutualsSwapForm"
import MutualsStakeForm from "../components/mutual-components/MutualsStakeForm"
import JumpForm from "../components/mutual-components/JumpForm"
import MutualsClaimForm from "../components/mutual-components/MutualsClaimForm"
import { useMoralis } from "react-moralis"
import { supportedNetworks } from "../constants/"

export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    let styling = {
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        width: "85vw",
    }
    console.log(supportedNetworks, chainId)
    return (
        <div>
            {isWeb3Enabled && supportedNetworks.includes(Number(chainId)) ? (
                <div
                    className={styles.container}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        alignItems: "center",
                    }}
                >
                    <div className="grid gap-12 pt-7" style={styling}>
                        <MutualsSwapForm />
                        <MutualsStakeForm />
                    </div>
                    <div className="shadow-xl grid" style={styling}>
                        <MutualsOptimizer />
                        <JumpForm />
                        <MutualsClaimForm />
                    </div>
                </div>
            ) : (
                <div className="px-9 py-4 font-bold text-lg">
                    {!isWeb3Enabled ? (
                        <div>Web3 Currently Not Enabled</div>
                    ) : (
                        <div>
                            Network not supported! Supported networks are:{" "}
                            {supportedNetworks.join(", ")}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
