import { useState, useEffect } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { nftAbi, nftMarketplaceAbi } from "../constants/index.js"
import Image from "next/image"
import { Card, Select, useNotification } from "web3uikit"
import { Cog, Cross, Edit } from "@web3uikit/icons"
import { ethers } from "ethers"
import UpdateListingModal from "./UpdateListingModal"
import CancelListingModal from "./CancelListingModal"
const truncateStr = (fullStr, strLen) => {
    if (fullStr.length <= strLen) return fullStr

    const separator = "..."
    const seperatorLength = separator.length
    const charsToShow = strLen - seperatorLength
    const frontChars = Math.ceil(charsToShow / 2)
    const backChars = Math.floor(charsToShow / 2)
    return (
        fullStr.substring(0, frontChars) +
        separator +
        fullStr.substring(fullStr.length - backChars)
    )
}

export default function NFTBox({ price, nftAddress, tokenId, marketplaceAddress, seller }) {
    const { isWeb3Enabled, account } = useMoralis()
    const [imageURI, setImageURI] = useState("")
    const [tokenName, setTokenName] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [showCancelModal, setShowCancelModal] = useState(false)
    const hideModals = () => {
        setShowUpdateModal(false)
        setShowCancelModal(false)
        console.log("CLOSED AAAAAAAAAAAAAAAA")
    }
    const dispatch = useNotification()

    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "tokenURI",
        params: {
            _tokenId: tokenId,
        },
    })

    const { runContractFunction: buyItem } = useWeb3Contract({
        abi: nftMarketplaceAbi,
        contractAddress: marketplaceAddress,
        functionName: "buyItem",
        msgValue: price,
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
        },
    })

    async function updateUI() {
        const tokenURI = await getTokenURI()
        console.log(`The TokenURI is ${tokenURI}`)
        if (tokenURI) {
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fetch(requestURL)).json()
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            setImageURI(imageURIURL)
            setTokenName(tokenURIResponse.name)
            setTokenDescription(tokenURIResponse.description)
        }
        // get the tokenURI
        // using the image tag from the tokenURI, get the image
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    const isOwnedByUser = seller === account || seller === undefined
    const formattedSellerAddress = isOwnedByUser ? "you" : truncateStr(seller || "", 15)

    const handleCardClick = () => {
        buyItem({
            onError: (error) => console.log(error),
            onSuccess: () => handleBuyItemSuccess(),
        })
    }

    const handleBuyItemSuccess = () => {
        dispatch({
            type: "success",
            message: "Item bought!",
            title: "Item Bought",
            position: "topR",
        })
    }

    document.onclick = (e) => {
        const options = document.querySelectorAll(".options")
        const editButtons = document.querySelectorAll(".edit")
        // if edit was button clicked, ignore.
        for (const editButton of editButtons) if (editButton.contains(e.target)) return
        // hide selection
        for (const option of options) {
            if (option.classList.contains("hidden")) continue
            toggleOptionsShowing(option)
        }
    }

    function toggleOptionsShowing(element) {
        element.classList.toggle("hidden")
        element.classList.toggle("flex")
    }

    const getCardHeader = () => {
        const style = `flex justify-${isOwnedByUser ? "between" : "end"}`
        return (
            <div className={style}>
                {isOwnedByUser ? (
                    <div className="flex flex-col text-black font-bold edit">
                        <div
                            className="flex items-center gap-2"
                            onClick={() => {
                                const select = document.getElementById(tokenId)
                                toggleOptionsShowing(select)
                            }}
                        >
                            <Cog fontSize="15px" /> <span>Edit</span>
                        </div>
                        <div
                            className="hidden flex-col select absolute z-10 top-12 bg-white rounded-md options"
                            id={tokenId}
                        >
                            <button
                                className="flex gap-2 justify-end items-center hover:bg-slate-200 font-bold p-3 rounded-md border-transparent"
                                onClick={() => {
                                    const select = document.getElementById(tokenId)
                                    toggleOptionsShowing(select)
                                    setShowUpdateModal(true)
                                }}
                            >
                                <Edit fontSize="16px" />
                                Update Listing
                            </button>
                            <button
                                className="flex items-center gap-2 hover:bg-slate-200 p-3 font-bold rounded-md border-transparent"
                                onClick={() => {
                                    const select = document.getElementById(tokenId)
                                    toggleOptionsShowing(select)
                                    setShowCancelModal(true)
                                }}
                            >
                                <Cross fontSize="16px" fill="#ef4444" />
                                <span className=" text-red-500">Cancel Listing</span>
                            </button>
                        </div>
                    </div>
                ) : null}
                <div>#{tokenId}</div>
            </div>
        )
    }
    return (
        <div>
            <div>
                {imageURI ? (
                    <div>
                        <UpdateListingModal
                            isVisible={showUpdateModal}
                            tokenId={tokenId}
                            marketplaceAddress={marketplaceAddress}
                            nftAddress={nftAddress}
                            onClose={hideModals}
                        />
                        <CancelListingModal
                            isVisible={showCancelModal}
                            tokenId={tokenId}
                            marketplaceAddress={marketplaceAddress}
                            nftAddress={nftAddress}
                            onClose={hideModals}
                        />
                        <Card
                            title={tokenName}
                            description={tokenDescription}
                            onClick={isOwnedByUser ? "" : handleCardClick}
                        >
                            <div className="p-2">
                                {getCardHeader()}
                                <div className="flex flex-col items-end gap-2">
                                    <div className="italic text-sm">
                                        Owned by {formattedSellerAddress}
                                    </div>
                                    <Image
                                        loader={() => imageURI}
                                        src={imageURI}
                                        height="200"
                                        width="200"
                                    />
                                    <div className="font-bold">
                                        {ethers.utils.formatUnits(price, "ether")} MATIC
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}
