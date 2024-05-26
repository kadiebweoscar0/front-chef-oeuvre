/* eslint-disable @typescript-eslint/no-unused-vars */
// import { FieldValues, useForm } from "react-hook-form";
// import InputField from "../inputField";
// import axios from "axios";
// import Button from "../button";

// export default function AddCriminal() {
//   const token = sessionStorage.getItem('token');
// console.log(token);

//     const {register, handleSubmit, reset} = useForm();
//     // const onSubmitForm = async (data: FieldValues)=>{
//     //     const newCriminal = {
//     //         nom: data.nom,
//     //         postnom: data.postnom,
//     //         prenom: data.prenom,
//     //         pseudo: data.pseudo,
//     //         photo: data.photo,
//     //         crime: data.crime,
//     //         sexe: data.sexe,
//     //         telephone: data.telephone,
//     //         date_de_naissance: data.date_de_naissance,
//     //         adress: data.adress,
//     //         description: data.description,
//     //         userId: data.userId,
//     //     }

//     //     const token = sessionStorage.getItem('token')


//     //     try {
//     //         const response = await axios.post("http://localhost:3000/api/user/createCriminel",newCriminal, {
//     //           headers: {
//     //             'Authorization': `Bearer ${token}`
//     //           }
//     //         })
//     //             .then((response)=> console.log("register", response.data)
//     //             )
//     //             console.log(response);
                
//     //         } catch (error) {
//     //             console.log(error);
//     //         }
//     //         reset()
//     // }
//     const onSubmitForm = async (data: FieldValues)=>{
//       const newCriminal = {
//           nom: data.nom,
//           postnom: data.postnom,
//           prenom: data.prenom,
//           pseudo: data.pseudo,
//           photo: data.photo,
//           crime: data.crime,
//           sexe: data.sexe,
//           date_de_naissance: data.date_de_naissance,
//           adress: data.adress,
//           description: data.description,
//           userId: data.userId,
//       }
  
  
//       try {
//           // const response = await axios.post("https://capstone2-c1-kadiebweoscar0.onrender.com/api/user/createCriminel", newCriminal, {
//           //     headers: {
//           //         'Authorization': `Bearer ${token}`
//           //     }
//               const response = await axios.post("http://localhost:3000/api/user/createCriminel", newCriminal, {
//               headers: {
//                   'Authorization': `Bearer ${token}`
//               }
//       // http://localhost:3000/login

//           })
//           .then((response)=> console.log("register", response.data))
//           console.log(response);
                  
//       } catch (error) {
//           console.log(error);
//       }
//       reset()
      
//   }
  

//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmitForm)} className=" relative left-[40rem] mt-56 w-[63rem] h-[35rem] flex flex-col bg-[#F5F5F5] py-10 px-10 rounded-3xl justify-center">
//       <div className=" flex justify-center  w-[58rem] h-[25rem] items-center">
//        <span>
//             <InputField
//             type="text"
//             name="nom"
//             placeholder="nom"
//             register={register}
//             validation={{ required: true }}
//             />
//              <InputField
//             type="text"
//             name="postnom"
//             placeholder="postnom"
//             register={register}
//             validation={{ required: true }}
//             />
//              <InputField
//             type="text"
//             name="prenom"
//             placeholder="prenom"
//             register={register}
//             validation={{ required: true }}
//             />
//               <InputField
//             type="text"
//             name="pseudo"
//             placeholder="pseudo"
//             register={register}
//             validation={{ required: true }}
//             />
//             <InputField
//             type="file"
//             name="photo"
//             placeholder="photo"
//             register={register}
//             validation={{ required: true }}
//             />
             
//        </span>
//        <span>
//        <InputField
//             type="text"
//             name="crime"
//             placeholder="crime"
//             register={register}
//             validation={{ required: true }}
//             />
//             <InputField
//             type="text"
//             name="sexe"
//             placeholder="sexe"
//             register={register}
//             validation={{ required: true }}
//             />
//              <InputField
//             type="date"
//             name="date_de_naissance"
//             placeholder="date_de_naissance"
//             register={register}
//             validation={{ required: true }}
//             />
//              <InputField
//             type="text"
//             name="adress"
//             placeholder="adress"
//             register={register}
//             validation={{ required: true }}
//             />
//              <InputField
//             type="text"
//             name="description"
//             placeholder="description"
//             register={register}
//             />
//        </span>
//       </div>
//        <Button className=" max-sm:w-[17rem] bg-[#4361EE] max-sm:mx-0 w-[16.625rem] h-[3.813rem] max-sm:text-xl text-4xl rounded-3xl text-white" textButton="Ajouter"  />
//     </form>
//     </>

//   )
// }


//à ne pas supprimer
// import { FieldValues, useForm } from "react-hook-form";
// import InputField from "../inputField";
// import axios from "axios";
// import Button from "../button";
// import { useState } from "react";

// export default function AddCriminal() {
//   const token = sessionStorage.getItem('token');
//   const { register, handleSubmit, reset, setValue } = useForm();
//   const [photoBase64, setPhotoBase64] = useState<string>('');


//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files && event.target.files.length > 0 ? event.target.files[0] : null;
//     console.log(file);

//   transformeFile(file);
//   };
  
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const transformeFile = (file: File | null) => {
//     if (!file) {
//       setPhotoBase64("");
//       return;
//     }
//     const reader = new FileReader();
  
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       if (typeof reader.result === 'string') {
//         setPhotoBase64(reader.result);
//       } else {
//         setPhotoBase64("");
//       }
//     };
//   };
  

//   const onSubmitForm = async (data: FieldValues) => {
//     console.log(data.photo$);
    
//     const newCriminal = {
//       nom: data.nom,
//       postnom: data.postnom,
//       prenom: data.prenom,
//       pseudo: data.pseudo,
//       photo: photoBase64,
//       crime: data.crime,
//       sexe: data.sexe,
//       date_de_naissance: data.date_de_naissance,
//       adress: data.adress,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
//       description: data.description,
//       userId: data.userId,
//     };

//     try {
//       const response = await axios.post("http://localhost:3000/api/user/createCriminel", newCriminal, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       console.log("register", response.data);
//     } catch (error) {
//       console.log(error);
//     }
//     reset()
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmitForm)} className="relative left-[40rem] mt-56 w-[63rem] h-[35rem] flex flex-col bg-[#F5F5F5] py-10 px-10 rounded-3xl justify-center">
//         <div className="flex justify-center w-[58rem] h-[25rem] items-center">
//           <span>
//             <InputField
//               type="text"
//               name="nom"
//               placeholder="nom"
//               register={register}
//               validation={{ required: true }}
//             />
//             <InputField
//               type="text"
//               name="postnom"
//               placeholder="postnom"
//               register={register}
//               validation={{ required: true }}
//             />
//             <InputField
//               type="text"
//               name="prenom"
//               placeholder="prenom"
//               register={register}
//               validation={{ required: true }}
//             />
//             <InputField
//               type="text"
//               name="pseudo"
//               placeholder="pseudo"
//               register={register}
//               validation={{ required: true }}
//             />
           
//             <InputField
//              type="file"
//              name="photo"
//              placeholder="photo"
//              register={register}
//              validation={{ required: true }}
//              onChange={handleChange}
//              />
//           </span>
//           <span>
//             <InputField
//               type="text"
//               name="crime"
//               placeholder="crime"
//               register={register}
//               validation={{ required: true }}
//             />
//             <InputField
//               type="text"
//               name="sexe"
//               placeholder="sexe"
//               register={register}
//               validation={{ required: true }}
//             />
//             <InputField
//               type="date"
//               name="date_de_naissance"
//               placeholder="date_de_naissance"
//               register={register}
//               validation={{ required: true }}
//             />
//             <InputField
//               type="text"
//               name="adress"
//               placeholder="adress"
//               register={register}
//               validation={{ required: true }}
//             />
//             <InputField
//               type="text"
//               name="description"
//               placeholder="description"
//               register={register}
//             />
//           </span>
//         </div>
//         <Button className="max-sm:w-[17rem] bg-[#4361EE] max-sm:mx-0 w-[16.625rem] h-[3.813rem] max-sm:text-xl text-4xl rounded-3xl text-white" textButton="Ajouter" />
//       </form>
//     </>
//   )
// }


import React, { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import axios from 'axios';
import InputField from "../inputField";
import Button from "../button";

export default function AddCriminal() {
  const token = sessionStorage.getItem('token');
  const { register, handleSubmit, reset, setValue } = useForm();
  const [photoBase64, setPhotoBase64] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files.length > 0 ? event.target.files[0] : null;
    console.log(file);

    transformeFile(file);
  };

  const transformeFile = (file: File | null) => {
    if (!file) {
      setPhotoBase64("");
      return;
    }
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPhotoBase64(reader.result);
      } else {
        setPhotoBase64("");
      }
    };
  };

  const onSubmitForm = async (data: FieldValues) => {
    console.log(data.photo);

    const newCriminal = {
      nom: data.nom,
      postnom: data.postnom,
      prenom: data.prenom,
      pseudo: data.pseudo,
      photo: photoBase64,
      crime: data.crime,
      sexe: data.sexe,
      date_de_naissance: data.date_de_naissance,
      adress: data.adress,
      description: data.description,
      userId: data.userId,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/user/createCriminel", newCriminal, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log("register", response.data);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)} className="relative left-[40rem] mt-56 w-[63rem] h-[35rem] flex flex-col bg-[#F5F5F5] py-10 px-10 rounded-3xl justify-center">
        <div className="flex justify-center w-[58rem] h-[25rem] items-center">
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
              name="pseudo"
              placeholder="pseudo"
              register={register}
              validation={{ required: true }}
            />
           
            <InputField
              type="file"
              name="photo"
              placeholder="photo"
              register={register}
              validation={{ required: true }}
              onChange={handleChange}
            />
          </span>
          <span>
            <InputField
              type="text"
              name="crime"
              placeholder="crime"
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
              type="date"
              name="date_de_naissance"
              placeholder="date_de_naissance"
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
              type="text"
              name="description"
              placeholder="description"
              register={register}
            />
          </span>
        </div>
        <Button className="max-sm:w-[17rem] bg-[#4361EE] max-sm:mx-0 w-[16.625rem] h-[3.813rem] max-sm:text-xl text-4xl rounded-3xl text-white" textButton="Ajouter" />
      </form>
    </>
  );
}
