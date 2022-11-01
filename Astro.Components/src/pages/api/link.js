export const getLink = async () => {
  const resp = await fetch("http://localhost:5000/api/values");
  const link = await resp.text();
  return link;
}
