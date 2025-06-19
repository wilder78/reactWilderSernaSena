function StockFilter() {
  return (
    <div className="mb-3">
      <h6 className="fw-bold mb-3">Disponibilidad</h6>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="inStock"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="inStock">
          En stock
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="outOfStock" />
        <label className="form-check-label" htmlFor="outOfStock">
          Agotados
        </label>
      </div>
    </div>
  );
}

export default StockFilter;
