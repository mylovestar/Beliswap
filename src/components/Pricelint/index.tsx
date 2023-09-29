import { useState, useEffect } from 'react';
import axios from 'axios';

const PriceFeed = ({ jobID, oracleAddress }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://chainlink.example.com/v2/specs/${jobID}/runs`,
          {
            data: {
              address: oracleAddress,
              functionSelector: 'latestAnswer()'
            }
          }
        );
        const result = response.data.result;
        setPrice(result);
      } catch (error) {
        console.error('Error fetching price feed', error);
      }
    };
    fetchData();
  }, [jobID, oracleAddress]);

  return (
    <div>
      {price ? (
        <p>Price: {price}</p>
      ) : (
        <p>Loading price feed...</p>
      )}
    </div>
  );
};

export default PriceFeed;
