import { ConnectButton } from "web3uikit"
import Link from "next/link"
import logo from "../../transparent.png"
import Image from "next/image"
export default function Header() {
    return (
        <nav className="p-5 flex flex-row justify-between items-center font-bold border-solid border-x-transparent border-t-transparent border-b-slate-200">
            <div>
                <Link href="/">
                    <div className="max-h-[200px] max-w-[200px] px-4 cursor-pointer">
                        <Image src={logo} alt="Logo" />
                    </div>
                </Link>
                <h3 className="px-4 m-0">Defi NFT Marketplace</h3>
            </div>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6 no-underline text-black">Home</a>
                </Link>
                <Link href="/mint">
                    <a className="mr-4 p-6 no-underline text-black">Mint</a>
                </Link>
                <Link href="/sell-nft">
                    <a className="mr-4 p-6 no-underline text-black">Sell NFT</a>
                </Link>
                <Link href="/nft">
                    <a className="mr-4 p-6 no-underline text-black">Marketplace</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
