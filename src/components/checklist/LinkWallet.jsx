import { CheckIcon, WalletIcon } from '@heroicons/react/24/outline'
import { useAccount, useConnect } from '@starknet-react/core'

export function LinkWallet() {
  const { connect, connectors } = useConnect()
  const { address, status } = useAccount()

  return (
    <>
      <WalletIcon className="h-14 w-14 mx-auto text-slate-50" />
      <div className="text-md font-light text-slate-50 p-10">
        Web3 wallets are applications designed for interacting with blockchain
        platforms. <br />
        <br />
        They enable digital asset:
        <div className="grid grid-cols-10 gap-y-2 mt-4 justify-items-start">
          <div className="col-start-5">
            <CheckIcon className="h-5 w-5 text-green-500" />
          </div>
          <div className="col-start-6">ownership</div>
          <div className="col-start-5">
            <CheckIcon className="h-5 w-5 text-green-500" />
          </div>
          <div className="col-start-6">storage</div>
          <div className="col-start-5">
            <CheckIcon className="h-5 w-5 text-green-500" />
          </div>
          <div className="col-start-6">management</div>
        </div>
      </div>

      <ul className="mx-auto flex flex-row gap-x-8 mt-6 justify-center">
        {status === 'disconnected' ? (
          connectors.map((connector) => (
            <li key={connector.id} className="flex flex-row justify-between">
              <button
                onClick={() => connect({ connector })}
                type="button"
                className="rounded-md bg-indigo-100 px-4 py-2.5 shadow-sm hover:bg-indigo-200 flex items-center"
              >
                <img
                  src={connector.icon.light}
                  alt="connector-icon"
                  className="w-8"
                />
                <div className="ml-2 text-md font-normal text-indigo-600">
                  {connector.name}
                </div>
              </button>
            </li>
          ))
        ) : (
          <div className="rounded-md bg-indigo-100 px-4 py-2.5 shadow-sm hover:bg-indigo-200 flex items-center text-indigo-600">
            connected as {address.slice(0, 10)}
          </div>
        )}
      </ul>
    </>
  )
}
