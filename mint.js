import { Form, useNotification } from "web3uikit"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { nftAbi, achieverAbi, nftAddress, achieverAddress } from "../constants"
import { useState, useEffect } from "react"
import { LoadingButton } from "@mui/lab"
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material"
import { ethers } from "ethers"
import { supportedNetworks } from "../constants/"
export default function Mint() {
    const { runContractFunction } = useWeb3Contract()
    const dispatch = useNotification()
    const { account, isWeb3Enabled, chainId } = useMoralis()

    const approveOptions = {
        abi: achieverAbi,
        contractAddress: achieverAddress,
        functionName: "approve",
    }

    const mintOptions = {
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "mint",
    }

    const { runContractFunction: NFTCost } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "cost",
        params: {},
    })

    const { runContractFunction: walletOfOwner } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "walletOfOwner",
        params: {
            _owner: account,
        },
    })

    async function handleSubmit() {
        setIsLoading(true)
        setButtonText("Approving...")
        const formattedCost = ethers.utils.parseUnits(mintCost, "ether").toString()
        const mintAmount = document.querySelector("#mint-amount").textContent
        // Approve token
        approveOptions.params = {
            spender: nftAddress,
            amount: formattedCost,
        }

        const tx = await runContractFunction({
            params: approveOptions,
            onError: (error) => console.log(error),
        })
        if (!tx) {
            setIsLoading(false)
            setButtonText(defaultText)
            return
        }
        await tx.wait(1)
        console.log({ formattedCost })

        mintNFT(mintAmount, formattedCost)
    }

    async function mintNFT(mintAmount, cost) {
        setButtonText("Minting...")
        console.log({ cost })
        // run mint function
        mintOptions.params = {
            _mintAmount: mintAmount,
            _amountIn: cost,
        }

        await runContractFunction({
            params: mintOptions,
            onError: (error) => {
                console.log(error)
                displayNotification("Error: Rejected", "error", "red")
            },
            onSuccess: () => displayNotification("Successfully minted NFT", "success", "green"),
        })
        setButtonText(defaultText)
        setIsLoading(false)
    }

    function displayNotification(title, type, color) {
        dispatch({
            type: type,
            iconColor: color,
            title: title,
            position: "topR",
        })
    }

    async function getCost() {
        let cost = await NFTCost({ onError: (error) => console.log(error) })
        return cost
    }
    const [isLoading, setIsLoading] = useState(false)
    const defaultText = "Approve and mint"
    const [buttonText, setButtonText] = useState(defaultText)
    const [mintCost, setMintCost] = useState(0)
    const [tokenIdMinted, setTokenIdMinted] = useState(0)

    async function setAmount(amount) {
        let mintCost = await getCost()
        let totalCost = 0
        for (let i = 0; i < amount; i++) totalCost += +mintCost

        let formattedCost = ethers.utils.formatEther(totalCost.toString())
        setMintCost(formattedCost)
    }

    async function setTokenIDS(acc) {
        let tokenIds = await walletOfOwner(acc)
        let output = ""
        for (const tokenId of tokenIds) {
            output += `${tokenId}, `
        }
        output = output.replace(/,\s*$/, "")
        setTokenIdMinted(output || "None")
    }

    useEffect(() => {
        if (isWeb3Enabled && supportedNetworks.includes(Number(chainId))) {
            setAmount(1)
            setTokenIDS(account)
        }
    }, [isWeb3Enabled, account, chainId])

    return (
        <div>
            {isWeb3Enabled && supportedNetworks.includes(Number(chainId)) ? (
                <div className="flex flex-col items-center px-9">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-2xl my-4 text-slate-500">
                            Mint a Snowman NFT
                        </h3>
                        <FormControl variant="standard">
                            <InputLabel id="select">Amount to mint</InputLabel>
                            <Select
                                label="select"
                                className="w-1/2 min-w-[240px]"
                                id="mint-amount"
                                defaultValue="1"
                                onChange={(e) => setAmount(e.target.value)}
                            >
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="5">5</MenuItem>
                            </Select>
                        </FormControl>
                        <p className="text-lg">
                            Mint Amount: <span className="font-bold">{mintCost} ACH</span>
                        </p>
                        <LoadingButton
                            className="p-2.5 my-3 rounded-xl max-w-[195px] min-w-[160px]"
                            variant="contained"
                            size="medium"
                            onClick={handleSubmit}
                            loading={isLoading}
                            loadingPosition="end"
                        >
                            {buttonText}
                        </LoadingButton>
                        <div className="text-lg my-4">
                            Token ID Minted: <span className="font-bold">{tokenIdMinted}</span>
                        </div>
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
