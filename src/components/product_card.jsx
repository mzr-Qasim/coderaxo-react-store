import { Link } from "react-router";

export function ProductCard(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
      <div className="product-card">
        <figure className={props.product.type === "premium" ? "premium" : ""}>
          <Link to={`/products/${props.product.id}`}>
            <img
              src={props.product.image}
              loading="lazy"
              alt={props.product.title}
            />
          </Link>

          {props.product.sale > 0 && (
            <div className="sale">
              <small
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {props.product.sale}% OFF
              </small>
            </div>
          )}

          <ul className="product-actions">
            <li>
              <button>
                <i className="icon-favourite"></i>
              </button>
            </li>

            <li>
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#genieBot"
                aria-controls="genieBot"
              >
                <i className="icon-quick-view"></i>
              </button>
            </li>

            <li>
              <button>
                <i className="icon-quick-shop"></i>
              </button>
            </li>
          </ul>
        </figure>

        <div className="product-details pt-3">
          <Link
            className="product-title"
            to={`/products/${props.product.id}`}
          >
            {props.product.title}
          </Link>

          {props.product.sale > 0 ? (
            <div className="price">
              <span style={{ textDecoration: "line-through" }}>
                ${props.product.price}
              </span>

              <span
                className="px-3"
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                $
                {(
                  props.product.price -
                  (props.product.price * props.product.sale) / 100
                ).toFixed(2)}
              </span>
            </div>
          ) : (
            <span>${props.product.price}</span>
          )}
        </div>

        <div className="offcanvas quick-view" tabIndex="-1" id="genieBot">
          <div className="offcanvas-header">
            <button
              className="menu_close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="icon-ham_close_btn"></i>
            </button>
          </div>

          <div className="offcanvas-body"></div>
        </div>
      </div>
    </div>
  );
}