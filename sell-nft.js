import styles from "../styles/Home.module.css"
import { useNotification } from "web3uikit"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ethers } from "ethers"
import { nftAbi, nftAddress, marketplaceAddress, nftMarketplaceAbi } from "../constants/"
import { useEffect, useState } from "react"
import { FormControl, TextField } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { supportedNetworks } from "../constants/"

export default function Home() {
    const { account, isWeb3Enabled, chainId } = useMoralis()
    const dispatch = useNotification()
    const [proceeds, setProceeds] = useState("0")
    const [isLoading, setIsLoading] = useState(false)
    const defaultText = "Approve and list"
    const [buttonText, setButtonText] = useState(defaultText)
    const [tokenIdMinted, setTokenIdMinted] = useState("None")
    const { runContractFunction } = useWeb3Contract()

    const { runContractFunction: walletOfOwner } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "walletOfOwner",
        params: {
            _owner: account,
        },
    })
    async function approveAndList() {
        console.log("Approving...")
        const nftAddress = document.querySelector("#nft-address").value
        const tokenId = document.querySelector("#token-id").value
        const price = document.querySelector("#price").value
        if (!nftAddress || !tokenId || !price) return
        setIsLoading(true)
        setButtonText("Approving...")

        const approveOptions = {
            abi: nftAbi,
            contractAddress: nftAddress,
            functionName: "approve",
            params: {
                to: marketplaceAddress,
                tokenId: tokenId,
            },
        }
        console.log(approveOptions)
        await runContractFunction({
            params: approveOptions,
            onError: (error) => {
                dispatch({
                    type: "error",
                    iconColor: "red",
                    title: error.message,
                    position: "topR",
                })
                console.log(error)
                setIsLoading(false)
                setButtonText(defaultText)
            },
            onSuccess: (tx) => handleApproveSuccess(tx, nftAddress, tokenId, price),
        })
    }

    async function handleApproveSuccess(tx, nftAddress, tokenId, price) {
        await tx.wait(1)
        setButtonText("Listing...")
        console.log("Ok! Now time to list")
        const listOptions = {
            abi: nftMarketplaceAbi,
            contractAddress: marketplaceAddress,
            functionName: "listItem",
            params: {
                nftAddress: nftAddress,
                tokenId: tokenId,
                price: ethers.utils.parseUnits(price, "ether").toString(),
            },
        }
        console.log(listOptions)
        await runContractFunction({
            params: listOptions,
            onSuccess: handleListSuccess,
            onError: (error) => {
                setButtonText(defaultText)
                setIsLoading(false)
                dispatch({
                    type: "error",
                    iconColor: "red",
                    title: error.message,
                    position: "topR",
                })
                console.log(error)
            },
        })
    }

    async function handleListSuccess(tx) {
        await tx.wait(1)
        dispatch({
            type: "success",
            iconColor: "green",
            title: "NFT Listed",
            position: "topR",
        })
        setButtonText(defaultText)
        setIsLoading(false)
    }

    const handleWithdrawSuccess = async (tx) => {
        await tx.wait(1)
        setIsLoading(false)
        dispatch({
            type: "success",
            title: "Withdrawed proceeds",
            position: "topR",
            iconColor: "green",
        })
    }

    async function setupUI() {
        const returnedProceeds = await runContractFunction({
            params: {
                abi: nftMarketplaceAbi,
                contractAddress: marketplaceAddress,
                functionName: "getProceeds",
                params: {
                    seller: account,
                },
            },
            onError: (error) => console.log(error),
        })
        if (returnedProceeds) {
            setProceeds(returnedProceeds.toString())
        }
    }

    async function setTokenIDS(acc) {
        let tokenIds = await walletOfOwner(acc)
        let output = ""
        console.log(tokenIds)
        for (const tokenId of tokenIds) {
            output += `${tokenId}, `
        }
        output = output.replace(/,\s*$/, "")
        setTokenIdMinted(output || "None")
    }

    useEffect(() => {
        if (isWeb3Enabled && supportedNetworks.includes(Number(chainId))) {
            setupUI()
            setTokenIDS(account)
        }
    }, [isWeb3Enabled, account, proceeds])
    return (
        <div>
            {isWeb3Enabled && supportedNetworks.includes(Number(chainId)) ? (
                <div className="flex flex-col items-center p-4">
                    <div className="w-1/3 flex flex-col gap-2">
                        <h3 className="font-bold text-2xl my-4 text-slate-500">Sell an NFT!</h3>
                        <div className="flex flex-col gap-4">
                            <div className="text-lg">
                                Token ID Minted: <span className="font-bold">{tokenIdMinted}</span>
                            </div>
                            <FormControl className="gap-6">
                                <TextField
                                    id="nft-address"
                                    label="NFT Address"
                                    size="small"
                                    required
                                />
                                <TextField id="token-id" label="Token ID" size="small" required />
                                <TextField
                                    id="price"
                                    type="number"
                                    label="Price (in MATIC)"
                                    size="small"
                                    required
                                />
                            </FormControl>
                            <LoadingButton
                                className="p-2.5 my-4 rounded-lg w-1/2 max-w-[220px]"
                                variant="contained"
                                size="medium"
                                onClick={approveAndList}
                                loading={isLoading}
                                loadingPosition="end"
                            >
                                {buttonText}
                            </LoadingButton>
                        </div>
                        <div className="my-6">
                            <div className="text-lg mb-4">
                                Proceeds:<span className="font-bold"> {proceeds}</span>{" "}
                            </div>
                            {proceeds != "0" ? (
                                <LoadingButton
                                    variant="contained"
                                    className="rounded-lg w-1/2 max-w-[125px]"
                                    loading={isLoading}
                                    onClick={() => {
                                        setIsLoading(true)
                                        runContractFunction({
                                            params: {
                                                abi: nftMarketplaceAbi,
                                                contractAddress: marketplaceAddress,
                                                functionName: "withdrawProceeds",
                                                params: {},
                                            },
                                            onError: (error) => {
                                                setIsLoading(false)
                                                console.log(error)
                                            },
                                            onSuccess: handleWithdrawSuccess,
                                        })
                                    }}
                                >
                                    Withdraw
                                </LoadingButton>
                            ) : (
                                <div className="font-semibold">No proceeds detected</div>
                            )}
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
