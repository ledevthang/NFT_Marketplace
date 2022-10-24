import React, { useContext, useState } from "react";
import Link from "next/link";
import { LayoutContext } from "../hooks/LayoutContext";
const Navbar = () => {
  const data = useContext(LayoutContext);
  const connectWallet = data.connect;
  const account = data.account;
  const formatAccount = (account) => {
    return (
      (account = account.toString()),
      account.substring(0, 4) + "..." + account.substring(account.length - 3)
    );
  };
  return (
    <nav className="border-b p-6">
      <p className="text-4xl font-bold ">Metaverse Market</p>
      <div className="lg:flex mx-auto hidden justify-between items-center ">
        <div className="flex m-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">Home</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-4 text-pink-500">Sell Digital Asset</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-4 text-pink-500">My Digital Assets</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-4 text-pink-500">Creator Dashboard</a>
          </Link>
        </div>
        {account ? (
          <div className="px-8 py-1 border-2 border-black text-lg font-semibold shadow-sm rounded">
            {formatAccount(data.account)}
          </div>
        ) : (
          <button
            className="px-8 py-2 border-2 border-black text-lg font-semibold shadow-sm rounded bg-red-500"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
