import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { forwardRef } from "react";

const possibleButtonTypes = ["default", "inactive"] as const;
const possibleArrowTypes = ["right", "left"] as const;

type ArrowType = (typeof possibleButtonTypes)[number];
type ArrowDirect = (typeof possibleArrowTypes)[number];

export type ArrowProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  arrowType?: ArrowType;
  arrowDirect?: ArrowDirect;
};

const Arrow: React.FC<ArrowProps> = forwardRef<
  HTMLButtonElement,
 ArrowProps
>(function ArrowRaw(
  {className, children, arrowType="default", arrowDirect="right", ...props },
  ref
) {
  const arrowInactive =
    "bg-medify-white text-medify-gray-100 hover:bg-medify-blue-300 hover:text-medify-white active:bg-medify-blue-300 active:text-medify-white";
  const arrowDefault =
    "bg-medify-blue-500 text-medify-white hover:bg-medify-blue-300 active:bg-medify-blue-300";

  if (arrowDirect == "right") {
    return (
        <button
          ref={ref}
          className={clsx(
            "h-8 w-8 lg:h-14 lg:w-14 p-2 lg:p-4 rounded-lg",
            arrowType === "default"
              ? arrowDefault
              : arrowType === "inactive"
              ? arrowInactive
              : "",
            className
          )
    }
          {...props}
        >
            
          <FontAwesomeIcon className="w-4 h-4 lg:w-5 lg:h-5" icon={faChevronRight} />
        </button>
      );
  } else {
    return (
        <button
          ref={ref}
          className={clsx(
            "h-8 w-8 lg:h-14 lg:w-14 p-2 lg:p-4 rounded-lg",
            arrowType === "default"
              ? arrowDefault
              : arrowType === "inactive"
              ? arrowInactive
              : "",
            className
          )
    }
          {...props}
        >
          
            
          <FontAwesomeIcon className="w-4 h-4 lg:w-5 lg:h-5" icon={faChevronLeft} />
        </button>
      );
  }

  
});

export default Arrow;