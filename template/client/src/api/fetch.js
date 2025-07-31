const serverUrl = "http://localhost:3001";

export async function fetchData({ endpoint = "" } = {}) {
  let baseURL = serverUrl;

  let path = `/${endpoint}`;

  const dataURL = `${baseURL}${path}`;

  try {
    const response = await fetch(dataURL, { mode: "cors" });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}
