import React from "react";

function DeliverySmCard({ image, title }) {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-48 md:h-56">
        <div className="w-full h-24 md:h-48">
          <img 
            className="w-full h-full object-cover object-center rounded-t-md md:h-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-sm my-1 text-center font-light">{title}</h3>
        </div>
      </div>
    </>
  );
}

function DeliveryLgCard({ image, title }) {
  return (
    <>
      <div className="hidden lg:block w-48 px-5 mx-auto">
        <div className="w-full h-36">
          <img
            className="w-full h-full object-cover object-center rounded-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-lg my-2 text-center font-medium text-gray-700">{title}</h3>
        </div>
      </div>
    </>
  );
}

function DeliveryCategory(props) {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
}

export default DeliveryCategory;