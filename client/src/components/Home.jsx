import React, { useState } from "react";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function Home() {
  const [selectedToken, setSelectedToken] = useState("0.05 EHT");
  const [addr, setAddr] = useState(null);
  const tokens = [
    "5 EHT",
    "5 EHT",
    "5 EHT",
    "5 EHT",
    "5 EHT",
    "50 EHT",
    "50 EHT",
    "500 EHT",
    "500 EHT",
    "5000 EHT",
  ];
  return (
    <div className="align-center flex-col flex justify-center text-center">
      <button
        onClick={async () => {
          if (window.ethereum !== "undefined") {
            const account = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            console.log(account);
            setAddr(account);
          }
        }}
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Connect with MetaMask
      </button>
      {addr !== null ? <h1>Connected with: {addr}</h1> : <h1></h1>}
      <h1 className="">Token: {selectedToken}</h1>
      <button
        onClick={async () => {
          for (let i = 0; i < 40; i++) {
            const random = Math.floor(Math.random() * 10);
            const token = tokens[random];
            setSelectedToken(token);
            await delay(10);
          }
        }}
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Spin
      </button>
    </div>
  );
}

export default Home;
