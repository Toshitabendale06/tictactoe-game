const Square = ({ value, onClick, isWinningSquare }) => {
  const colourClassName = value === 'x' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';

  return (
    <button
      type="button"
      className={`square ${colourClassName}${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
