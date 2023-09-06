  import clsx from "clsx";
  import React, { forwardRef } from "react";
  
  const possibleColorTypes = ["blue", "green", "orange"] as const;
  
  
  type ColorType = (typeof possibleColorTypes)[any];

  
  export type CardProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    colorType?: ColorType;
  };
  
  const CarrierCard = forwardRef<HTMLButtonElement,CardProps>(function CardRaw(
    {
      className,
      children,
      colorType,
      title,
      ...props
    },
    ref
  ) {
    const blue_1 = 'bg-[#E8F3FF]'
    const blue_2 = 'bg-[#F5FAFF]'
    const green_1 = 'bg-[#D4FFE5]'
    const green_2 = 'bg-[#F1FFF7]'
    const orange_1 = 'bg-[#FFE9D4]'
    const orange_2 = 'bg-[#FFF6EE]'
  
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-16">
            <div className='flex flex-col'>
                <div className={clsx(
                    'p-6 rounded-t-xl',
                    colorType === "blue"
                    ? blue_1
                    : colorType === "green"
                    ? green_1
                    : colorType === "orange"
                    ? orange_1
                    : "",
                    className
                )}>
                    <h5>{title}</h5>
                </div>
                <div className='flex flex-col'>
                    <div className={clsx(
                        'py-6 px-4 flex justify-between items-center',
                        colorType === "blue"
                        ? blue_2
                        : colorType === "green"
                        ? green_2
                        : colorType === "orange"
                        ? orange_2
                        : "",
                        className
                    )}>
                        {children}
                    </div>
                    <div className={clsx(
                        'h-2',
                        colorType === "blue"
                        ? blue_1
                        : colorType === "green"
                        ? green_1
                        : colorType === "orange"
                        ? orange_1
                        : "",
                        className
                    )}/>
                </div>

                <div className={clsx(
                    'h-5 rounded-b-xl',
                    colorType === "blue"
                    ? blue_1
                    : colorType === "green"
                    ? green_1
                    : colorType === "orange"
                    ? orange_1
                    : "",
                    className
                )}/>
            </div>
        </div>
        
    );
  });
  
  export default CarrierCard;
  