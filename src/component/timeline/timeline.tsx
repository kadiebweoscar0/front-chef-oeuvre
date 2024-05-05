import imgDefault from "../../../public/image/_ (3).jpeg";
import { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";
import SearchBar from "../searchBar";
import Image from "../image";

export default function Timeline() {
  const [allCriminal, setAllCriminal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCriminal = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user/getAllCriminel"
        );
        setAllCriminal(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCriminal();
  }, []);

  const filteredCriminals = allCriminal.filter(
    (criminal: { [key: string]: any }) =>
      criminal.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" m-auto w-[80%] py-16 flex flex-col justify-center items-center ">
      <span className=" w-[100%] flex justify-between px-10">
        <SearchBar
          onChange={(event) => setSearchTerm(event.target.value)}
          className=" w-[60%] px-4 py-4 rounded-3xl drop-shadow-2xl mb-10 ml-72 border"
        />
        <Image
          urlImage={"hdjhdck"}
          className=" rounded-full border w-20 h-20"
        />
      </span>

      {filteredCriminals.map((item, index) => {
        return (
          <div key={index} className=" w-6/12">
            <Card
              photo={item.photo.length < 100 ? imgDefault : item.photo}
              nom={item.nom}
              postnom={item.postnom}
              prenom={item.prenom}
              pseudo={item.pseudo}
              sexe={item.sexe}
              description={item.description}
            />
          </div>
        );
      })}
    </div>
  );
}
