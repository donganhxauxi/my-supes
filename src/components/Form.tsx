import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const addSupe = (supe: any) => {
  return axios.post("http://localhost:4000/supes", supe);
};

const Form = () => {
  const [supeData, setSupeData] = useState({
    name: "",
    superPower: "",
    playedBy: "",
    image: "",
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addSupe, {
    onSuccess: () => {
      queryClient.invalidateQueries("rq-supes");
    },
  });

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg m-auto mt-8">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          onChange={() => {
            setSupeData({
              ...supeData,
              name: (document.getElementById("name") as HTMLInputElement).value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="superPower"
        >
          Super Power
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="superPower"
          type="text"
          placeholder="Super Power"
          onChange={() => {
            setSupeData({
              ...supeData,
              superPower: (
                document.getElementById("superPower") as HTMLInputElement
              ).value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="playedBy"
        >
          Played By
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="playedBy"
          type="text"
          placeholder="Played By"
          onChange={() => {
            setSupeData({
              ...supeData,
              playedBy: (
                document.getElementById("playedBy") as HTMLInputElement
              ).value,
            });
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            mutate(supeData);
            setSupeData({
              name: "",
              superPower: "",
              playedBy: "",
              image: "",
            });
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
