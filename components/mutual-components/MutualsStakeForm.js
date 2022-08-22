import { useState } from "react"
import { useWeb3Contract } from "react-moralis"
import {
    wethAbi,
    wethAddress,
    mutualsAbi,
    mutualsAddress,
    achieverAbi,
    achieverAddress,
} from "../../constants"
import { TextField, FormControl } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"
import MutualsDetails from "./MutualsDetails"
export default function MutualsStakeForm() {
    const defaultText = "Approve and Stake"
    const [isLoading, setIsLoading] = useState(false)
    const [buttonText, setButtonText] = useState(defaultText)
    const dispatch = useNotification()
    const { runContractFunction } = useWeb3Contract()
    let wethApproveOptions = {
        abi: wethAbi,
        contractAddress: wethAddress,
        functionName: "approve",
    }

    let achApproveOptions = {
        abi: achieverAbi,
        contractAddress: achieverAddress,
        functionName: "approve",
    }

    let stakeOptions = {
        abi: mutualsAbi,
        contractAddress: mutualsAddress,
        functionName: "addLiquidity",
    }

    let getTokenOptions = {
        abi: mutualsAbi,
        contractAddress: mutualsAddress,
        functionName: null,
    }

    async function handleStakeSubmit() {
        const wethAmount = document.querySelector("#Token1").value
        const achAmount = document.querySelector("#Token0").value
        if (Number(wethAmount) <= 0) return
        setIsLoading(true)
        setButtonText("Approving...")
        wethApproveOptions.params = {
            wad: ethers.utils.parseUnits(wethAmount, "ether").toString(),
            guy: mutualsAddress,
        }

        achApproveOptions.params = {
            amount: ethers.utils.parseUnits(achAmount, "ether").toString(),
            spender: mutualsAddress,
        }

        const wethTx = await runContractFunction({
            params: wethApproveOptions,
            onError: (error) => console.log(error),
        })
        if (!wethTx) {
            setButtonText(defaultText)
            setIsLoading(false)
            return
        }
        const achTx = await runContractFunction({
            params: achApproveOptions,
            onError: (error) => console.log(error),
        })
        if (!achTx) {
            setButtonText(defaultText)
            setIsLoading(false)
            return
        }

        await achTx.wait(1)

        handleApproveSuccess(wethApproveOptions.params.wad, achApproveOptions.params.amount)
    }

    async function handleApproveSuccess(WETHAmount, ACHAmount) {
        setButtonText("Staking...")
        stakeOptions.params = {
            _amount0: WETHAmount,
            _amount1: ACHAmount,
        }
        const tx = await runContractFunction({
            params: stakeOptions,
            onError: (error) => console.log(error),
            onSuccess: () => {
                dispatch({
                    type: "success",
                    title: "Staked token successfully!",
                    position: "topR",
                    iconColor: "green",
                })
            },
        })
        setIsLoading(false)
        setButtonText(defaultText)
        if (!tx) return
        await tx.wait(1)

        document.querySelector("#Token0").value = ""
        document.querySelector("#Token1").value = ""

        console.log("Transaction has confirmed by 1 block")
    }
    async function handleChange(e) {
        console.log(e.target.id)
        if (e.target.value < 0) {
            e.target.value = 0
            return
        }

        let fixed = getFixed(e.target.value, 8)
        let amount = ethers.utils.parseUnits(fixed, "ether").toString()

        getTokenOptions.functionName = `calculate${e.target.id}Amount`
        getTokenOptions.params = e.target.id == "Token1" ? { x: amount } : { y: amount }
        console.log(getTokenOptions)
        const tx = await runContractFunction({
            params: getTokenOptions,
            onError: (error) => console.log(error),
        })
        const formattedAmount = tx ? ethers.utils.formatEther(tx).toString() : 0
        const fixedAmount = getFixed(formattedAmount, 8)
        let wethInput = document.querySelector("#Token1")
        let achInput = document.querySelector("#Token0")
        if (e.target.id == "Token1") achInput.value = fixedAmount
        else wethInput.value = fixedAmount
    }

    const getFixed = (number, decimals) => {
        let re = new RegExp("^-?\\d+(?:.\\d{0," + (decimals || -1) + "})?")
        return number.toString().match(re)[0]
    }

    const details = MutualsDetails()

    return (
        <div className="shadow-2xl rounded-xl p-8 px-12">
            <h3 className="font-bold text-2xl mb-4 text-slate-500">Let's Stake!</h3>
            <div className="flex flex-col gap-6 py-2">
                <FormControl className="w-1/2 min-w-[180px] flex gap-6">
                    <TextField
                        id="Token0"
                        label="Amount to stake (in ACH)"
                        size="small"
                        onChange={handleChange}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                    <TextField
                        id="Token1"
                        label="Amount to stake (in WETH)"
                        size="small"
                        onChange={handleChange}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                </FormControl>
                <div className="text-lg">
                    <div>
                        Your ACH Balance:
                        <span className="font-bold"> {getFixed(details.achBalance, 8)}</span>
                    </div>
                    <div>
                        Your WETH Balance:
                        <span className="font-bold"> {getFixed(details.wethBalance, 8)}</span>
                    </div>
                </div>
                <LoadingButton
                    variant="contained"
                    className="max-w-[200px] rounded-lg p-2"
                    type="submit"
                    onClick={handleStakeSubmit}
                    loading={isLoading}
                    loadingPosition="end"
                >
                    {buttonText}
                </LoadingButton>
            </div>
        </div>
    )
}
