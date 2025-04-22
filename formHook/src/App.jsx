import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const Signup = z.object({
  email: z.string().email({message : "email should be valid"}),
  password : z.string().min(8 , {message : "min password length must me 8"}),
  confirmPassword : z.string().min(8 , {message : "confirm password must match with password"})
}).superRefine(({password , confirmPassword}, ctx)=>{
  if(password !== confirmPassword){
    ctx.addIssue({
      path: ["confirmPassword"] ,
      message : "your confirm password must match with password"
    })
  } 
}) 

function App() {
  const { register, handleSubmit, reset , formState: { errors } } = useForm({
    resolver : zodResolver(Signup)
  });

  const submit=(data)=>{
    reset();
    console.log(data);
  }

  return (
      <div className='min-h-screen flex flex-col justify-center border px-6 py-12 lg:px-8'>
          <div className="mt-10 px-6 py-12  mx-auto w-[25rem] h-[25rem] flex flex-col gap-5 border rounded-lg">
              <h1 className='text-3xl text-center font-mono'>Form</h1>
              <form onSubmit={handleSubmit(submit)} className="flex gap-5 flex-col justify-center">
                <input {...register("email")} className="border border-blue-600 outline-none rounded-lg px-2 py-3 -600" type="email" placeholder='enter your email'/>
                  {errors["email"]? <span className="text-red-600">{errors["email"].message}</span>:null}
                <input {...register("password")} className="border border-blue-600 outline-none rounded-lg px-2 py-3 -600" type="password" placeholder='enter your password'/>
                {errors["password"]? <span className="text-red-600">{errors["password"].message}</span>:null}
                <input  {...register("confirmPassword")} className="border border-blue-600 outline-none rounded-lg px-2 py-3 -600" type="password" placeholder='confirm password'/>
                {errors["confirmPassword"]? <span className="text-red-600">{errors["confirmPassword"].message}</span>:null}
                <button className="bg-blue-600 text-white px-2 py-2 rounded-lg" type="submit">Submit</button>
              </form>
          </div>
      </div> 
  )
}

export default App
