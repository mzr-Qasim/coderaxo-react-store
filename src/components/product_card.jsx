import { Link } from "react-router-dom";

export function ProductCard(props) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
      <div className="product-card">
        <figure className= {props.product.type === "premium" ? "premium" : "relative group/product overflow-hidden w-full aspect-[1/1.5]" }>
          <Link>
            <img
              src={props.product.image}
              loading="lazy"
              alt={props.product.title}
              className="w-full h-full object-cover"
            />
          </Link>

          {props.product.sale > 0 && (
            <div className="sale absolute top-5 left-5 bg-red-600 py-2 px-2 z-[10]">
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
         <ul className="product-actions-inner flex flex-col absolute top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2 z-[20] w-full  -translate-x-full group-hover/product:translate-x-0  duration-500">
            <li className="mb-2">
              <button className="rounded-full w-10 h-10 bg-black text-white group/button hover:bg-white">
                <i className="icon-favourite group-hover/button:text-black"></i>
              </button>
            </li>

            <li className="mb-2">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#genieBot"
                aria-controls="genieBot"
                className="rounded-full w-10 h-10 bg-black text-white"
              >
                <i className="icon-quick-view"></i>
              </button>
            </li>

            <li>
              <button className="rounded-full w-10 h-10 bg-black text-white">
                <i className="icon-quick-shop "></i>
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
            <span className="block">${props.product.price}</span>
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