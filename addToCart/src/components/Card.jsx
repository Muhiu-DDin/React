function Card({ item, addToCart, isAdded , remove , removeItem}) {
    const { category, images, description, title, price } = item;
  
    return (
      <>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt={title}
              className="object-cover object-center w-full h-full block"
              src={images[1]} 
            />
          </a>
          <div className="mt-5">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {category.name}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {title || "Untitled"}
            </h2>
            <p className="mt-1">${price}</p>
            <button
              className="mt-2 inline-flex items-center bg-blue-500 text-white text-sm px-2 py-1 rounded"
              onClick={addToCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l1 7h11l1-7h2M4 10h15m-4 10H9m0 0H4a2 2 0 01-2-2V5h2m8 15h2a2 2 0 002-2v-2m-6 2H5"
                />
              </svg>
              {isAdded ? "Add to cart" : "Added"}
            </button>

           {
            remove &&
            <button
            className="py-1 ml-4 inline-flex items-center bg-blue-500 text-white text-sm px-2 rounded" onClick={removeItem}
          >
               delete
          </button>
           }
          </div>
        </div>
      </>
    );
  }
  
  export default Card;
  