export interface CardProps {
  id?: string;
  name: string;
  superPower: string;
  image: string;
  playedBy: string;
}

export const Card = ({ name, image, playedBy, superPower }: CardProps) => {
  return (
    <div className="cursor-pointer max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
      <img className="h-48 w-full object-cover" src={image} alt={name} />
      <div className="p-6">
        <div className="font-semibold text-xl mb-2">{name}</div>
        <div className="text-gray-700 mb-2">Superpower: {superPower}</div>
        <div className="text-gray-500 mb-2">Played by: {playedBy}</div>
      </div>
    </div>
  );
};
