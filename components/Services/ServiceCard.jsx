import Link from "next/link";

const ServiceCard = ({title, icon, price, description, disclaimer, children}) => {
  return (
    <article className="p-4 md:p-8 flex flex-col">
      <div className="text-5xl">
        <div className="text-brand">{icon}</div>
        <p className="text-3xl text-dark">{title}</p>
        <div className="text-darkaccent mb-4 font-light text-lg">
          <p>
            {price ? (
              `base price: ${price}`
            ) : (
              <>
                <Link className="text-brand" href="/contact">
                  contact us
                </Link>{" "}
                for pricing
              </>
            )}
          </p>{" "}
        </div>

        {description && <p className="mb-8 text-lg text-darkaccent">{description}</p>}
      </div>
      {children && <div className="extra-content">{children}</div>}
      {disclaimer && <div className="text-sm mt-auto font-light">{disclaimer}</div>}
    </article>
  );
};

export default ServiceCard;
