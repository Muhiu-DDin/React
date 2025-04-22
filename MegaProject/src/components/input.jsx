import { forwardRef , useId} from "react";

export const Input = forwardRef((
    {
    label,
    type = "text",
    className = "",
    ...props} ,
    ref)=>{
       const ID  = useId()
        return(
            <div>
               {
                label && <label htmlFor={ID}> {label}</label>
               }
                <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none
                           border border-gray-200 w-full ${className}`}
                {...props}
                ref={ref}
                id={ID}

                />

            </div>
        )

})