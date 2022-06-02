import React from "react";
import useSWR from "swr";
import Card from "./Card";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Dogs() {
  const URL = "https://api.thedogapi.com/v1/images/search?limit=2";
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <div>
      <Card data={data} />
    </div>
  );
}
