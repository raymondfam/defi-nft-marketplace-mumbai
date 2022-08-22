import { Modal, useNotification } from "web3uikit"
import { useWeb3Contract } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"

export default function cancelListingModal({
    nftAddress,
    tokenId,
    isVisible,
    marketplaceAddress,
    onClose,
}) {
    const { runContractFunction } = useWeb3Contract()
    const dispatch = useNotification()

    async function cancel() {
        const cancelOptions = {
            abi: nftMarketplaceAbi,
            contractAddress: marketplaceAddress,
            functionName: "cancelListing",
            params: {
                nftAddress: nftAddress,
                tokenId: tokenId,
            },
        }
        await runContractFunction({
            params: cancelOptions,
            onSuccess: handleCancelSuccess,
            onError: (error) => console.log(error),
        })
    }

    async function handleCancelSuccess(tx) {
        onClose()
        await tx.wait(1)
        dispatch({
            type: "success",
            message: "listing canceled",
            title: "Listing canceled - please refresh (and move blocks)",
            position: "topR",
            iconColor: "green",
        })
    }

    return (
        <Modal
            isVisible={isVisible}
            onCancel={onClose}
            onCloseButtonPressed={onClose}
            okText="Confirm"
            title="Cancel Listing?"
            isCentered={true}
            width="30%"
            onOk={cancel}
        >
            <div className="flex justify-center">
                <p className="py-4 font-bold">Are you sure you want to proceed?</p>
            </div>
        </Modal>
    )
}
