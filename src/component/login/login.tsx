import Button from "../button";
import InputField from "../inputField";
import Image from "../image";
import Texte from "../texte";
import imageGoogle from '../../../public/image/New Google Favicon Logo PNG Vector (EPS) Free Download.jpeg'
import { NavLink } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
export default function Login() {
    const {register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmitForm = async (data: FieldValues)=>{
        const credential = {
            email: data.email,
            mot_de_pass: data.mot_de_pass,
        }
        // console.log(credential);

        // try {
        // const response = await axios.post("http://localhost:3000/login",credential)
        //     .then((response)=> console.log("login", response.data)
        //     )
        //     console.log(response);
            
        // } catch (error) {
        //     console.log(error);
        // }
        // reset()

        try {
          const response = await axios.post("http://localhost:3000/login",credential);
    
          // Si la réponse contient un token, le stocker dans sessionStorage
          if (response.data.token) {
            sessionStorage.setItem('token', response.data.token);
            console.log(response.data.token);
            console.log('Token stocké avec succès');
          } else {
            console.log('Pas de token dans la réponse');
          }
        } catch (error) {
          console.error('Erreur lors de la connexion', error);
        }
        reset()
      };
    // }
    
return (
    <>
    <div className=" max-sm:w-[24.333rem] max-sm:mx-0 max-sm:px-0 w-[65.5rem] h-[34.5rem] flex m-auto rounded-xl drop-shadow-2xl py-28">
        <div className=" max-sm:hidden bg-[#4361EE] w-[32.75rem] h-[34.5rem] py-52 rounded-l-2xl">
            <Texte className=" text-white font-semibold text-4xl text-center m-auto px-16" valueTeste="Travaillons main dans la main pour un Congo plus sûr, meilleur et Securisé." />
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)} className=" max-sm:mx-0 max-sm:bg-white  max-sm:w-[24.333rem] max-sm:px-2 max-sm:m-0 bg-[#F5F5F5] w-[32.75rem] h-[34.5rem] rounded-r-2xl py-28">
            <span className=" max-sm:w-[23rem] flex flex-col gap-6 items-center max-sm:p-4 justify-center mb-12">
                {/* <input className=" max-sm:mx-0 max-sm:w-[23rem] bg-[#FFFFFF] w-[28.125rem] h-[3.813rem] rounded-xl text-xl p-4" type="email" placeholder="Email" {...register("email", {required: true, pattern: /^[\w.-]+@[\w.-]+\.\w+$/})}/>
                <input className=" max-sm:mx-0 max-sm:w-[23rem] bg-[#FFFFFF] w-[28.125rem] h-[3.813rem] rounded-xl text-xl p-4" type="password" placeholder="Mot de passe"  {...register("mot_de_pass", {required: true})}/> */}

            <InputField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            validation={{ required: true, pattern: /^[\w.-]+@[\w.-]+\.\w+$/ }}
            />
            <InputField
            type="password"
            name="mot_de_pass"
            placeholder="Mot de passe"
            register={register}
            validation={{ required: true }}
            />

            </span>
            <span className=" max-sm:flex-row max-sm:mx-0 max-sm:p-2 max-sm:w-[23rem] flex justify-between gap-11 w-[27.5rem] mx-9">
                <Button className=" max-sm:w-[17rem] bg-[#4361EE] max-sm:mx-0 w-[16.625rem] h-[3.813rem] max-sm:text-xl text-4xl rounded-3xl text-white" textButton="Connexion" />
                <Image urlImage={imageGoogle} className=" w-16 h-16 rounded-lg" />
            </span>
            <p className=" max-sm:w-[23rem] max-sm:text-xl max-sm:p-2 max-sm:mx-0 text-2xl ml-8 mt-8">Vous avez pas de compte ? <NavLink className=" text-blue-600" to="#">inscrivez-vous</NavLink></p>
        </form>
    </div>
    </>
)
}
