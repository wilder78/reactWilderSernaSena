import React from "react";

function ProductCard({
  title,
  description,
  image,
  alt,
  price,
  oldPrice,
  discount,
  isNew,
  rating = 0,
  stock = 0,
  isOutOfStock = false,
}) {
  // Función para renderizar estrellas según rating (de 0 a 5)
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (i - rating < 1) {
        stars.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="col">
      <div
        className={`card h-100 shadow-sm position-relative ${
          isOutOfStock ? "opacity-75" : ""
        }`}
      >
        {discount && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {discount}
            <span className="visually-hidden">descuento</span>
          </span>
        )}

        {isNew && (
          <span className="position-absolute top-0 start-0 translate-middle-y badge rounded-pill bg-success ms-2">
            <i className="bi bi-lightning-charge-fill me-1"></i>NUEVO
          </span>
        )}

        <div className="position-relative">
          <img
            src={image}
            className="card-img-top p-3"
            alt={alt}
            style={{ height: "200px", objectFit: "contain" }}
          />
          {isOutOfStock && (
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-light bg-opacity-50 d-flex align-items-center justify-content-center">
              <span className="badge bg-danger">AGOTADO</span>
            </div>
          )}
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">{title}</h5>
            <div className="text-warning small">{renderStars()}</div>
          </div>
          <p className="card-text text-muted small">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {oldPrice && (
                <span className="text-decoration-line-through text-muted me-2">
                  ${oldPrice}
                </span>
              )}
              <span
                className={`fw-bold ${
                  isOutOfStock ? "text-muted" : "text-danger"
                }`}
              >
                ${price}
              </span>
            </div>
            <button
              className={`btn btn-sm btn-outline-${
                isOutOfStock ? "secondary" : "primary"
              }`}
              disabled={isOutOfStock}
            >
              <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>

        <div className="card-footer bg-transparent border-top-0">
          {isOutOfStock ? (
            <small className="text-danger">
              <i className="bi bi-exclamation-circle-fill me-1"></i>Sin stock
            </small>
          ) : (
            <small className="text-success">
              <i className="bi bi-check-circle-fill me-1"></i>En stock ({stock}{" "}
              unidades)
            </small>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
