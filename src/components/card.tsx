interface CardProps {
  cardTitle: string;
  cardDescription: string;
}

const Card = ({ cardTitle, cardDescription }: CardProps) => {
  return (
    <div className="p-3 rounded-md border cursor-pointer">
      <h3 className="capitalize mb-2 font-semibold text-gray-600">
        {cardTitle}
      </h3>
      <p>{cardDescription}</p>
    </div>
  );
};

export default Card;
