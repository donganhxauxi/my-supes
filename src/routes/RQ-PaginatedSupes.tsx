import axios from "axios";
import { useQuery } from "react-query";
import { Card, CardProps } from "../components/Card";
import { useState } from "react";

const fetchSupes = async (page: number) => {
  return axios.get(`http://localhost:4000/supes?_limit=3&_page=${page}`);
};
const RQPaginatedSupes = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    ["rq-supes", page],
    async () => fetchSupes(page),
    { keepPreviousData: true }
  );

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
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
      <div className="flex space-x-2 justify-center mt-16">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPage((page: number) => page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPage(page + 1)}
          disabled={page === 4}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RQPaginatedSupes;
