import { useMoralis, useWeb3Contract } from "react-moralis"
import {
    mutualsAbi,
    achieverAbi,
    wethAbi,
    mutualsAddress,
    achieverAddress,
    wethAddress,
} from "../../constants"
import { useEffect, useState } from "react"
import { ethers } from "ethers"

export default function MutualsDetails() {
    const { address, account, isWeb3Enabled } = useMoralis()
    const [achBalance, setACHBalance] = useState("0")
    const [wethBalance, setWETHBalance] = useState("0")
    const [lpBalance, setLPBalance] = useState("0")
    const [earningsBalance, setEarningsBalance] = useState("0")
    const [totalLPBalance, setTotalLPBalance] = useState("0")
    const { runContractFunction: getACHBalance } = useWeb3Contract({
        abi: achieverAbi,
        contractAddress: achieverAddress,
        functionName: "balanceOf",
        params: {
            account: account,
        },
    })

    const { runContractFunction: getWETHBalance } = useWeb3Contract({
        abi: wethAbi,
        contractAddress: wethAddress,
        functionName: "balanceOf",
        params: {
            Matthew: account,
        },
    })

    const { runContractFunction: getLPBalance } = useWeb3Contract({
        abi: mutualsAbi,
        contractAddress: mutualsAddress,
        functionName: "balanceOf",
        params: {
            Elkanah: account,
        },
    })

    const { runContractFunction: getEarningsBalance } = useWeb3Contract({
        abi: mutualsAbi,
        contractAddress: mutualsAddress,
        functionName: "earned",
        params: {
            account: account,
        },
    })

    const { runContractFunction: getTotalLPBalance } = useWeb3Contract({
        abi: mutualsAbi,
        contractAddress: mutualsAddress,
        functionName: "totalSupply",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled && account) {
            updateUIValues()
        }
    }, [account, isWeb3Enabled])

    async function updateUIValues() {
        const ACHBalance = await getACHBalance({ onError: (error) => console.log(error) })
        setACHBalance(+ACHBalance ? ethers.utils.formatEther(ACHBalance).toString() : 0)

        const WETHBalance = await getWETHBalance({ onError: (error) => console.log(error) })
        setWETHBalance(+WETHBalance ? ethers.utils.formatEther(WETHBalance).toString() : 0)

        const LPBalance = await getLPBalance({ onError: (error) => console.log(error) })
        setLPBalance(+LPBalance ? ethers.utils.formatEther(LPBalance).toString() : 0)

        const EarningsBalance = await getEarningsBalance({
            onError: (error) => console.log(error),
        })
        setEarningsBalance(
            +EarningsBalance ? ethers.utils.formatEther(EarningsBalance).toString() : 0
        )

        const totalLPBalance = await getTotalLPBalance({ onError: (error) => console.log(error) })
        setTotalLPBalance(
            +totalLPBalance ? ethers.utils.formatEther(totalLPBalance).toString() : 0
        )
    }
    return { earningsBalance, lpBalance, totalLPBalance, achBalance, wethBalance }
}
