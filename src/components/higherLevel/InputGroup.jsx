export default function InputGroup({ value, onValueChange }) {
  const handleIncrement = () => {
    onValueChange(value + 1);
  };

  const handleDecrement = () => {
      onValueChange(value - 1);
  };
  return (
    <>
      <div className="input-group " id="quantity" style={{maxWidth: '150px'}}>
        <button 
          className="btn btn-outline-secondary" 
          type="button" 
          id="button-addon1"
          onClick={handleIncrement}
        >
          +
        </button>
        <input 
          type="text" 
          className="form-control" 
          placeholder=""
          value={value}
          onChange={(e) => onValueChange(Number(e.target.value))}
          aria-label="Example text with button addon" 
          aria-describedby="button-addon1"
        />
        <button 
          className="btn btn-outline-secondary" 
          type="button" 
          id="button-addon2"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </>
  )
}