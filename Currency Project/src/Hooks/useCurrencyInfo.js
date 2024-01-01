import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // Initializing state to hold the fetched data
  const [data, setData] = useState({});

  // useEffect runs when the component mounts or when 'currency' changes
  useEffect(() => {
    // Fetching currency data from an API based on the provided 'currency' parameter
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) // Converting the fetched data to JSON format
      .then((res) => setData(res[currency])); // Setting the fetched data to the state
    console.log(data); // This will log the current state (may not show updated data due to closure)
  }, [currency]); // useEffect dependency array with 'currency'

  console.log(data); // This logs the 'data' state outside the useEffect block (may show older data due to closure)

  return data; // Returning the fetched data for the specified currency
}

export default useCurrencyInfo;
