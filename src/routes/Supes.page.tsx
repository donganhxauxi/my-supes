import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardProps } from "../components/Card";

const Supes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/supes")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map(({ image, name, playedBy, superPower, id }: CardProps) => {
        return (
          <Card
            key={id}
            image={image}
            name={name}
            playedBy={playedBy}
            superPower={superPower}
          />
        );
      })}
    </div>
  );
};
export default Supes;
