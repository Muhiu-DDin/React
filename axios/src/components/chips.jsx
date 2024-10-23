export function Chips({cate , isChoosen , onClick}){
    const {name} = cate
    return(
        <div onClick={onClick} className={`${isChoosen && "bg-purple-600 , text-white"} hover:bg-purple-100 px-2 py-2 cursor-pointer rounded-md border  border-purple-600`}>
            <h1>{name}</h1>
        </div>
    )
}