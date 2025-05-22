import Link from "next/link";

const ServiceCard = ({title, icon, price, description, disclaimer, children}) => {
  return (
    <article className="p-4 md:p-6 flex flex-col">
      <div className="text-5xl">
        <div className="text-brand">{icon}</div>
        <div className="text-2xl text-dark flex items-center justify-between mb-4">
          <div>{title}</div>

          <div className="flex justify-end flex-col font-light text-darkaccent text-right">
            {price ? (
              <>
                <p className="text-[8px] leading-none pr-[2]">*starting at</p>
                <p>{price}</p>
              </>
            ) : (
              <>
                <Link className="text-brand" href="/contact">
                  contact
                </Link>
              </>
            )}
          </div>
        </div>

        {/* {!price && (
          <div className="text-darkaccent -mt-4 mb-4 font-light text-xl">
            <Link className="text-brand" href="/contact">
              contact us&nbsp;
            </Link>
            for pricing
          </div>
        )} */}

        {description && <p className="mb-8 text-lg text-darkaccent">{description}</p>}
      </div>
      {children && <div className="mt-auto extra-content">{children}</div>}
      {disclaimer && <div className="text-xs mt-auto text-darkaccent">{disclaimer}</div>}
    </article>
  );
};

export default ServiceCard;
