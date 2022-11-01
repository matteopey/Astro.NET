import { useEffect, useState } from "react";

const Coins = () => {
  console.log("Rendering coins");

  const [coins, setCoins] = useState([])

  useEffect(() => {
    getContent().then(c => setCoins([...c]));
  }, [])

  return (
    <div>
      <h2>Coins list</h2>
      <ul>{
        coins
          .slice(0, 10)
          .map(coin =>
            <li id={coin.symbol}>{coin.name}</li>
          )}
      </ul>
    </div>
  );
}

const getContent = async () => {
  const resp = await fetch("https://api.coingecko.com/api/v3/coins/list");
  const coins = await resp.json();
  return coins;
}

export default Coins;