import React, { useState } from "react";
import { useCart } from "../../../../context/CartContext"; // Asegúrate de que esta ruta sea correcta

const ProductCard = ({
  id,
  title = "Producto sin título",
  description = "Sin descripción",
  imageUrl = "",
  rating = 0,
  price = 0,
  oldPrice = null,
  stock = 0,
  discount = null,
  badgeType = "",
  soldOut = false,
  newProduct = false,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className="bi bi-star-fill" key={`full-${i}`} />);
    }

    if (halfStar) {
      stars.push(<i className="bi bi-star-half" key="half" />);
    }

    while (stars.length < 5) {
      stars.push(<i className="bi bi-star" key={`empty-${stars.length}`} />);
    }

    return stars;
  };

  const handleIncrement = () => {
    if (quantity < stock && quantity < 12) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, title, price, imageUrl, stock, description }, quantity);
  };

  return (
    <div className="product-card">
      <div className="card h-100 shadow-sm position-relative">
        {discount && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {discount}
            <span className="visually-hidden">{badgeType}</span>
          </span>
        )}
        {newProduct && (
          <span className="position-absolute top-0 start-0 translate-middle-y badge rounded-pill bg-success ms-2">
            <i className="bi bi-lightning-charge-fill me-1" /> NUEVO
          </span>
        )}

        <div className="position-relative">
          <img
            src={imageUrl || "https://via.placeholder.com/200"}
            className="card-img-top p-3 product-card-img"
            alt={title}
            style={{ height: "200px", objectFit: "contain" }}
          />
          {soldOut && (
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-light bg-opacity-50 d-flex align-items-center justify-content-center">
              <span className="badge bg-danger">AGOTADO</span>
            </div>
          )}
        </div>

        <div className="card-body product-card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0 product-card-title">{title}</h5>
            <div className="text-warning small">{renderStars()}</div>
          </div>
          <p className="card-text text-muted small product-card-description">
            {description}
          </p>

          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              {oldPrice !== null && (
                <span className="text-decoration-line-through text-muted me-2">
                  ${Number(oldPrice).toFixed(2)}
                </span>
              )}
              <span
                className={`fw-bold ${
                  oldPrice ? "text-danger" : "text-primary"
                }`}
              >
                ${Number(price).toFixed(2)}
              </span>
            </div>
            <button
              className="btn btn-sm btn-outline-primary"
              disabled={soldOut}
              onClick={handleAddToCart}
            >
              <i className="bi bi-cart-plus" />
            </button>
          </div>

          {!soldOut && (
            <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={handleDecrement}
                disabled={quantity <= 1}
              >
                <i className="bi bi-dash" />
              </button>
              <span>{quantity}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={handleIncrement}
                disabled={quantity >= stock || quantity >= 12}
              >
                <i className="bi bi-plus" />
              </button>
            </div>
          )}
        </div>

        <div className="card-footer bg-transparent border-top-0">
          <small className={stock > 0 ? "text-success" : "text-danger"}>
            <i
              className={`bi ${
                stock > 0
                  ? "bi-check-circle-fill"
                  : "bi-exclamation-circle-fill"
              } me-1`}
            />
            {stock > 0 ? `En stock (${stock} unidades)` : "Sin stock"}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
