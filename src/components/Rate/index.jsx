import './style.css';
import { useEffect, useState } from 'react';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};

export const Rate = ({ from }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.frankfurter.app/latest?from=${from}&to=CZK`,
      );
      const data = await response.json();
      setAmount(data.rates.CZK);
    };
    fetchData();
  }, [from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{amount} CZK</div>
    </div>
  );
};
