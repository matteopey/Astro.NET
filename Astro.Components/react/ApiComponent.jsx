import { useEffect, useState } from "react";

const ApiComponent = () => {
  const [link, setLink] = useState("");

  getLink().then(x => setLink(x));

  return (
    <div>
      <a href={link}>LINK TO GOOGLE</a>
    </div>
  )
}

const getLink = async () => {
  const resp = await fetch("https://localhost:5001")
  const link = await resp.text();
  return link;
}

export default ApiComponent;