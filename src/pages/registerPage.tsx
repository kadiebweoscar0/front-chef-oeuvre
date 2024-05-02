import Register from "../component/register/register";

export default function RegisterPage() {
  return (
    <div className=" h-[100vh] w[100%] flex flex-col justify-center items-center py-5">
      <h1 className=" mt-10 text-4xl">Enregistrez vous avec vos identitez correcte</h1>
         <Register />
    </div>
  )
}
