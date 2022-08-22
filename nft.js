import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import NFTBox from "../components/NFTBox"
import { supportedNetworks } from "../constants/"

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        // TableName
        // Function for the query
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId")
    )

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap gap-8 nfts px-4">
                {isWeb3Enabled && supportedNetworks.includes(Number(chainId)) ? (
                    fetchingListedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.map((nft) => {
                            console.log(nft.attributes)
                            const { price, nftAddress, tokenId, marketplaceAddress, seller } =
                                nft.attributes
                            return (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            )
                        })
                    )
                ) : (
                    <div>
                        {!isWeb3Enabled ? (
                            <div className="font-bold text-lg">Web3 Currently Not Enabled</div>
                        ) : (
                            <div className="font-bold text-lg">
                                Network not supported! Supported networks are:{" "}
                                {supportedNetworks.join(", ")}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
