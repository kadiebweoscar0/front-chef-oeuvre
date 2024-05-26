import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../button";
import InputField from "../inputField";
import Image from "../image";
import Texte from "../texte";
import imageGoogle from '../../../public/image/New Google Favicon Logo PNG Vector (EPS) Free Download.jpeg';
import { NavLink } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useContextApp } from '../../assets/contextApp';

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [isWaiting, setIsWaiting] = useState(false);
  const navigate = useNavigate();
  const {  tokenExists,
    setTokenExists,
    // infoUserConnect,
    setInfoUserConnect, } = useContextApp();

  const onSubmitForm = async (data: FieldValues) => {
    setIsWaiting(true);
    const credential = {
      email: data.email,
      mot_de_pass: data.mot_de_pass,
    };

    try {
      const response = await axios.post("http://localhost:3000/login", credential);
      console.log(response.data);
      
      
      
      
      if (response.data.token) {
        sessionStorage.setItem('token', response.data.token);
        console.log('Token stocké avec succès');
        setTokenExists(true);
        setInfoUserConnect(response.data.infoPlayload)
        // console.log(infoUserConnect);
        
      } else {
        console.log('Pas de token dans la réponse');
        setTokenExists(false);
        alert('Email ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
    }
    setIsWaiting(false);
    reset();
  };

  useEffect(() => {
    if (tokenExists) {
      navigate('/home');
    }
  }, [tokenExists, navigate]);

  return (
    <>
      {isWaiting && ( 
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <p className="text-white text-3xl font-semibold">En attente...</p>
        </div>
      )}
      <div className="max-sm:w-[24.333rem] max-sm:mx-0 max-sm:px-0 w-[65.5rem] h-[34.5rem] flex m-auto rounded-xl drop-shadow-2xl py-28">
        <div className="max-sm:hidden bg-[#4361EE] w-[32.75rem] h-[34.5rem] py-52 rounded-l-2xl">
          <Texte className="text-white font-semibold text-4xl text-center m-auto px-16" valueTeste="Travaillons main dans la main pour un Congo plus sûr, meilleur et Securisé." />
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)} className="max-sm:mx-0 max-sm:bg-white max-sm:w-[24.333rem] max-sm:px-2 max-sm:m-0 bg-[#F5F5F5] w-[32.75rem] h-[34.5rem] rounded-r-2xl py-28">
          <span className="max-sm:w-[23rem] flex flex-col gap-6 items-center max-sm:p-4 justify-center mb-12">
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
          <span className="max-sm:flex-row max-sm:mx-0 max-sm:p-2 max-sm:w-[23rem] flex justify-between gap-11 w-[27.5rem] mx-9">
            <Button
              className="max-sm:w-[17rem] bg-[#4361EE] max-sm:mx-0 w-[16.625rem] h-[3.813rem] max-sm:text-xl text-4xl rounded-3xl text-white"
              textButton="Connexion"
              disabled={isWaiting}
            />
            <Image urlImage={imageGoogle} className="w-16 h-16 rounded-lg" />
          </span>
          <p className="max-sm:w-[23rem] max-sm:text-xl max-sm:p-2 max-sm:mx-0 text-2xl ml-8 mt-8">Vous avez pas de compte ? <NavLink className="text-blue-600" to="register">inscrivez-vous</NavLink></p>
        </form>
      </div>
    </>
  );
}
