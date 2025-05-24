import React from "react";

const ProductCard = ({
  title,
  description,
  imageUrl,
  rating,
  price,
  oldPrice,
  stock,
  discount,
  badgeType,
  soldOut = false,
  newProduct = false,
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className="bi bi-star-fill" key={`full-${i}`}></i>);
    }
    if (halfStar) {
      stars.push(<i className="bi bi-star-half" key="half"></i>);
    }
    while (stars.length < 5) {
      stars.push(<i className="bi bi-star" key={`empty-${stars.length}`}></i>);
    }

    return stars;
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm position-relative">
        {discount && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {discount}
            <span className="visually-hidden">{badgeType}</span>
          </span>
        )}
        {newProduct && (
          <span className="position-absolute top-0 start-0 translate-middle-y badge rounded-pill bg-success ms-2">
            <i className="bi bi-lightning-charge-fill me-1"></i>NUEVO
          </span>
        )}
        <div className="position-relative">
          <img
            src={imageUrl}
            className="card-img-top p-3"
            alt={title}
            style={{ height: "200px", objectFit: "contain" }}
          />
          {soldOut && (
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
                  ${oldPrice.toFixed(2)}
                </span>
              )}
              <span className={`fw-bold ${oldPrice ? "text-danger" : "text-primary"}`}>
                ${price.toFixed(2)}
              </span>
            </div>
            <button className="btn btn-sm btn-outline-primary" disabled={soldOut}>
              <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
        <div className="card-footer bg-transparent border-top-0">
          <small className={stock > 0 ? "text-success" : "text-danger"}>
            <i className={`bi ${stock > 0 ? "bi-check-circle-fill" : "bi-exclamation-circle-fill"} me-1`}></i>
            {stock > 0 ? `En stock (${stock} unidades)` : "Sin stock"}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
