import { useWeb3Contract } from "react-moralis"
import { mutualsAbi, mutualsAddress } from "../../constants"
import { ethers } from "ethers"
import { useState } from "react"
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import MutualsDetails from "./MutualsDetails"

export default function MutualsSwapForm() {
    const [swapAmount, setSwapAmount] = useState("0")
    const [tokenSelected, setTokenSelected] = useState("")
    const details = MutualsDetails()

    const { runContractFunction: getReserve0 } = useWeb3Contract({
        abi: mutualsAbi,
        contractAddress: mutualsAddress,
        functionName: "reserve0",
        params: {},
    })

    const { runContractFunction: getReserve1 } = useWeb3Contract({
        abi: mutualsAbi,
        contractAddress: mutualsAddress,
        functionName: "reserve1",
        params: {},
    })
    async function handleSwapChanged(data) {
        if (isNaN(data.target.value)) {
            let token = data.target.value
            setTokenSelected(token)
        } else {
            if (!tokenSelected) return
            setSwapAmount(await getTokenSwapAmount(tokenSelected, data.target.value))
        }
    }

    async function getTokenSwapAmount(token, a) {
        const RESERVE_0 = ethers.utils.formatEther(await getReserve0()).toString()
        const RESERVE_1 = ethers.utils.formatEther(await getReserve1()).toString()
        let r = token == "WETH" ? RESERVE_0 : RESERVE_1
        console.log(token, a)
        return (Math.sqrt(r * (r * 3988009 + a * 3988000)) - r * 1997) / 1994
    }
    const getFixed = (number, decimals) => {
        let re = new RegExp("^-?\\d+(?:.\\d{0," + (decimals || -1) + "})?")
        return number.toString().match(re)[0]
    }

    return (
        <div className="rounded-xl p-8 px-12">
            <h3 className="font-bold text-2xl mb-4 text-slate-500">Optimizer Calculator</h3>
            <div className="flex flex-col gap-5 py-2">
                <FormControl size="small" className="w-1/2 flex gap-6" sx={{ minWidth: "240px" }}>
                    <InputLabel id="select">Select a token</InputLabel>
                    <Select value={tokenSelected} onChange={handleSwapChanged} label="select">
                        <MenuItem value="ACH">ACH</MenuItem>
                        <MenuItem value="WETH">WETH</MenuItem>
                    </Select>
                    <TextField
                        id="swap-amount"
                        label="Amount intended to utilize"
                        size="small"
                        onChange={handleSwapChanged}
                        type="number"
                        required
                    />
                </FormControl>

                <div className="info text-lg">
                    <div>
                        Optimized Amount To Swap:{" "}
                        <span className="font-bold"> {getFixed(swapAmount, 8)}</span>
                    </div>
                    <br></br>
                    <div>
                        Your ACH Balance:
                        <span className="font-bold"> {getFixed(details.achBalance, 8)}</span>
                    </div>
                    <div>
                        Your WETH Balance:
                        <span className="font-bold"> {getFixed(details.wethBalance, 8)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
