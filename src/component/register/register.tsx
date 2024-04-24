import { FieldValues, useForm } from "react-hook-form";
import InputField from "../inputField";
import axios from "axios";
import Button from "../button";


export default function Register() {
    const {register, handleSubmit, reset} = useForm();
    const onSubmitForm = async (data: FieldValues)=>{
        const newCriminal = {
            nom: data.nom,
            postnom: data.postnom,
            prenom: data.prenom,
            sexe: data.sexe,
            telephone: data.telephone,
            date_de_naissance: data.date_de_naissance,
            adress: data.adress,
            email: data.email,
            mot_de_pass: data.mot_de_pass,
            Role: data.Role,
        }

        try {
            const response = await axios.post("http://localhost:3000/adminRegister",newCriminal)
                .then((response)=> console.log("register", response.data)
                )
                console.log(response);
                
            } catch (error) {
                console.log(error);
            }
            reset()
    }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmitForm)}>
       <span>
            <InputField
            type="text"
            name="nom"
            placeholder="nom"
            register={register}
            validation={{ required: true }}
            />
             <InputField
            type="text"
            name="postnom"
            placeholder="postnom"
            register={register}
            validation={{ required: true }}
            />
             <InputField
            type="text"
            name="prenom"
            placeholder="prenom"
            register={register}
            validation={{ required: true }}
            />
             <InputField
            type="text"
            name="sexe"
            placeholder="sexe"
            register={register}
            validation={{ required: true }}
            />
             <InputField
            type="number"
            name="telephone"
            placeholder="telephone"
            register={register}
            validation={{ required: true }}
            />
       </span>
       <span>
            <InputField
            type="date"
            name="date_de_naissance"
            placeholder="date de naissance"
            register={register}
            validation={{ required: true }}
            />
             <InputField
            type="text"
            name="adress"
            placeholder="adress"
            register={register}
            validation={{ required: true }}
            />
             <InputField
            type="email"
            name="email"
            placeholder="email"
            register={register}
            validation={{ required: true }}
            />
             <InputField
            type="password"
            name="mot_de_pass"
            placeholder="mot de passe"
            register={register}
            validation={{ required: true }}
            />
             <InputField
            type="text"
            name="Role"
            placeholder="role(facultatif)"
            register={register}
            />
       </span>
        <input type="checkbox"/>
       <Button className=" max-sm:w-[17rem] bg-[#4361EE] max-sm:mx-0 w-[16.625rem] h-[3.813rem] max-sm:text-xl text-4xl rounded-3xl text-white" textButton="s'enregistrez"  />
    </form>
    </>
  )
}
