import axios from "axios";
import { useQuery } from "react-query";
import { Card, CardProps } from "../components/Card";
import Form from "../components/Form";

const RQSupes = () => {
  const { data, isLoading, isError, error } = useQuery("rq-supes", async () =>
    axios.get("http://localhost:4000/supes")
  );
  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error?.message}</span>
      </div>
    );

  return (
    <>
      <Form />
      <div className="grid grid-cols-3 gap-4 p-4">
        {data?.data.map(
          ({ image, name, playedBy, superPower, id }: CardProps) => {
            return (
              <Card
                key={id}
                image={image}
                name={name}
                playedBy={playedBy}
                superPower={superPower}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default RQSupes;
