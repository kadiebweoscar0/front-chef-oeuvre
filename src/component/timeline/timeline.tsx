import { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";

export default function Timeline() {
    // cexport default function Timeline() {onst [allCriminal, setAllCriminal] = useState<Array<{[key: string]: any}> | null>(null);
        const [allCriminal, setAllCriminal] = useState([]);
    useEffect(()=>{
        const fetchCriminal = async ()=>{
            try {
                const response = await axios.get('http://localhost:3000/api/user/getAllCriminel');
                setAllCriminal(response.data)
                if (allCriminal) {
                    allCriminal.map((item: {[key: string]: any}) => console.log(item))
                }
                
                    
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchCriminal()
    } ,[])

    // console.log("all",allCriminal);
    

  return (
    <>
    <h1>On est au bon endroit</h1>
    {allCriminal.map((item, index) => {
        return(
            <div key={index}>
                     <Card photo={item.photo} nom={item.nom} postnom={item.postnom} prenom={item.prenom} pseudo={item.pseudo} sexe={item.sexe} description={item.description} />
                 </div>
        )
        // <div>Item {index}</div>
    })}
    </>

    // { allCriminal?.map((item: {[key: string]: any}, index: number) =>
    // // { Array.isArray(allCriminal) && allCriminal?.map((item: {[key: string]: any}, index: number) =>

    //     <div key={index}>
    //         <Card photo={item.photo} nom={item.nom} postnom={item.postnom} prenom={item.prenom} pseudo={item.pseudo} sexe={item.sexe} description={item.description} />
    //     </div>
    // )}
    
  )
}
