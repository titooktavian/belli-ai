const CardColumn = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <h2 className="text-base">{label}</h2>
      <h2 className="text-base">{value}</h2>
    </div>
  );
}

export default CardColumn;
