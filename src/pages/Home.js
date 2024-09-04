import { useForm } from "react-hook-form"

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({mode:"all"});
  const onSubmit = () => {
    alert("submit")
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          className="outline-[1px] bg-slate-300"
          placeholder="email" 
          {...register('email', {
            required: {value: true, message: "The email is required"},
            maxLength: {value: 10, message: "TOO MUCH CHARACTERS"}
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </form>
    </div>
  )
}

export default Home
