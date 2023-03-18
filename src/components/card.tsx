interface CardProps {
  item: Task;
}

const Card = ({ item }: CardProps) => {
  const dragStarted = (e: any, id: string) => {
    e.dataTransfer.setData("itemID", id);
  };

  return (
    <div
      draggable
      onDragStart={(e) => dragStarted(e, item.id)}
      className="p-3 rounded-md border cursor-pointer"
    >
      <h3 className="capitalize mb-2 font-semibold text-gray-600">
        {item.title}
      </h3>
      <p>{item.description}</p>
    </div>
  );
};

export default Card;
