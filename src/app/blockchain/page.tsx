"use client";

import { Template } from "@/components/template";
import { ethers } from "ethers";
import Link from "next/link";
import { useEffect, useState } from "react";

const providerUrl =
  "https://eth-mainnet.g.alchemy.com/v2/xrIMt-E7Ihf6OH8L0v1GF72cqQriu76R";
const baseUrl = "https://etherscan.io/";

async function getTransactions(limit: number) {
  const provider = new ethers.JsonRpcProvider(providerUrl);

  const blockNumber = await provider.getBlockNumber();
  const getBlocks = Array.from({ length: limit }, (x, y) =>
    provider.getBlock(blockNumber - (y + 1))
  );
  const blocks = await Promise.all(getBlocks);

  const transactionsList = blocks[0]?.transactions.slice(0, limit) as string[];
  const getTransactions = transactionsList.map((transaction) =>
    provider.getTransaction(transaction)
  );
  const transactions = await Promise.all(getTransactions);

  return { blocks, transactions };
}

export default function Transactions() {
  const [newTransactions, setNewTransactions] = useState<
    (ethers.TransactionResponse | null)[]
  >([]);
  const [newBlocks, setNewBlocks] = useState<(ethers.Block | null)[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { blocks, transactions } = await getTransactions(10);

    setNewTransactions(transactions);
    setNewBlocks(blocks);
  };

  const formatDate = (date: number) =>
    new Date(date * 1000).toLocaleDateString("en", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  const shortenWallet = (address = "") => `${address?.slice(0, 18)}...`;

  const roundNumber = (value: ethers.BigNumberish) =>
    parseFloat(ethers.formatEther(value)).toFixed(4);

  return (
    <Template title="Blockchain">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="border rounded-lg shadow-md bg-[#f8f9fa]">
          <h1 className="p-5 border-b text-lg font-bold bg-[#2563eb] text-white rounded-t-lg">
            Últimos blocos ({newBlocks.length})
          </h1>
          <ul className="flex flex-col max-h-[30rem] overflow-y-auto bg-white">
            {newBlocks.map((block) => (
              <li
                key={block?.hash}
                className="flex gap-4 items-center p-4 border-t hover:bg-[#f0f8ff]"
              >
                <div>
                  <span>Número do bloco: </span>
                  <Link
                    href={`${baseUrl}block/${block?.number}`}
                    className="text-[#2563eb] font-semibold"
                  >
                    {block?.number}
                  </Link>
                  <br />
                  <span>Data e hora: </span>
                  <span className="text-gray-600 text-sm">
                    {formatDate(block?.timestamp as number)}
                  </span>
                </div>
                <div>
                  <span>Validado por: </span>
                  <Link
                    href={`${baseUrl}address/${block?.miner}`}
                    className="text-[#2563eb] font-semibold"
                  >
                    {shortenWallet(block?.miner)}
                  </Link>
                  <br />
                  <span>Transações no bloco: </span>
                  <Link
                    href={`${baseUrl}/txs?block=${block?.number}`}
                    target="_blank"
                    className="text-gray-500 text-sm"
                  >
                    {block?.length} transações
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-lg shadow-md bg-[#f8f9fa]">
          <h1 className="p-5 border-b text-lg font-bold bg-[#ffc936] text-white rounded-t-lg">
            Últimas transações ({newTransactions.length})
          </h1>
          <ul className="flex flex-col max-h-[30rem] overflow-y-auto bg-white">
            {newTransactions.map((transaction) => (
              <li
                key={transaction?.hash}
                className="flex gap-4 items-center p-4 border-t hover:bg-[#fff5db]"
              >
                <div>
                  <span>Hash da transação: </span>
                  <Link
                    href={`${baseUrl}tx/${transaction?.hash}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[#ffc936] font-semibold"
                  >
                    {shortenWallet(transaction?.hash)}
                  </Link>
                </div>
                <div>
                  <span>De: </span>
                  <Link
                    href={`${baseUrl}address/${transaction?.from}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[#ffc936] font-semibold"
                  >
                    {shortenWallet(transaction?.from)}
                  </Link>
                  <br />
                  <span>Para: </span>
                  <Link
                    href={`${baseUrl}address/${transaction?.to}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[#ffc936] font-semibold"
                  >
                    {shortenWallet(transaction?.to as string)}
                  </Link>
                </div>
                <div>
                  <span>Valor: </span>
                  <span className="text-gray-800">
                    {roundNumber(transaction?.value as bigint)}
                  </span>{" "}
                  <strong className="text-[#ffc936]">eth</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Template>
  );
}
