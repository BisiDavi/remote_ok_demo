import React, { FC, useState } from "react";
import { useRouter } from "next/router";

const Dashboard: FC = () => {
  const router = useRouter();

  // if(loading)return null;

  const getJobAds = async (name: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/company`, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const { data } = await res.json();
    // setFolders((state)) => [...state, data]
  };

  const [newJobAds, setNewJobAds] = useState(false);
  return <h1>I am the Dashboard page</h1>;
};

export default Dashboard;
