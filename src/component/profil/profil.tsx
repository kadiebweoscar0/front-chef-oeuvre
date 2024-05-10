
import React from 'react';

type ProfileProps = {
  nom?: string;
  prenom?: string;
  postnom?: string;
  sexe?: string;
  photo?: string;
};

const Profil: React.FC<ProfileProps> = ({ nom, prenom, postnom, sexe, photo }) => {
  return (
    <div className=" border border-black relative w-[77%] left-[23.9rem]">
      <img className="" src={photo} alt={`${prenom} ${postnom} ${nom}`} />
      <h2 className="">{`${prenom} ${postnom} ${nom}`}</h2>
      <p className="">{sexe}</p>
    </div>
  );
};

export default Profil;

