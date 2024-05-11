import { FieldValues, useForm } from "react-hook-form";
import InputField from "../inputField";
import axios from "axios";
import Button from "../button";
import { useState } from "react";

export default function Register() {
  const [isChecked, setIsChecked] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmitForm = async (data: FieldValues) => {
    const newUSer = {
      nom: data.nom,
      postnom: data.postnom,
      prenom: data.prenom,
      sexe: data.sexe,
      telephone: data.telephone,
      date_de_naissance: data.date_de_naissance,
      adress: data.adress,
      email: data.email,
      mot_de_pass: data.mot_de_pass,
    };
    

    try {
      const response = await axios
        .post(
          "https://capstone2-c1-kadiebweoscar0.onrender.com/register",
          newUSer
        )
        .then((response) => console.log("register", response.data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <form
        className="registerBg drop-shadow-2xl w-[63rem] h-[35rem] flex flex-col bg-[#F5F5F5] justify-center px-9 m-auto rounded-3xl"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        //flex justify-center  w-[58rem] h-[25rem] items-center
        <div className=" w-[58rem] h-[25rem] flex justify-center">
          <span className=" ">
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
          </span>
        </div>
        <div>
          <span className=" flex gap-2 -mt-6">
            <input
              className=" w-5"
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <p>j'accepte les conditions et les politiques de confidatialité</p>
          </span>
          <Button
            className={` ${
              isChecked ? " bg-[#4361EE]" : " bg-slate-400"
            } max-sm:w-[17rem]  max-sm:mx-0 w-[16.625rem] h-[3.813rem] max-sm:text-xl text-3xl mt-5 rounded-3xl text-white`}
            textButton="s'enregistrez"
            disabled={!isChecked}
          />
        </div>
      </form>
    </>
  );
}
