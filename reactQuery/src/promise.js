const todos = ["breakfast" , "cricket" , "programing" , "lunch"];

export const getTodos = () => new Promise((resolve , reject)=>{
setTimeout(
    ()=>{
        resolve(todos);
    }, 2000
)
})

export const addTodo = (todo) => new Promise (
    (resolve , reject)=>{
        setTimeout(
            ()=>{
                todos.push(todo)
                // do not pass the reference of array
                // resolve(todos);
                resolve([...todos])
            } , 2000
        )
    }
)