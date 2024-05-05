import Image from '../image'
import Texte from '../texte'

export default function Card(props: {photo: string ,nom: string, postnom: string, prenom: string, pseudo: string, sexe: string, description: string}) {
  return (
    <div className=' border w-[100%] flex justify-center items-center mb-2 rounded-2xl'>
        <span className=' w-3/6 rounded-l-2xl'>
            <Image urlImage={props.photo} className=' h-[23rem] w-[100%] rounded-l-2xl' />
        </span>
        <span className=' bg-[#4361EE] w-3/6 h-[23rem] text-white text-3xl rounded-r-2xl pl-4 py-4 flex flex-col justify-between'>
            <Texte valueTeste={`Nom:  ${props.nom}`} className='' />
            <Texte valueTeste={`Post-om:  ${props.postnom}`} className='' />
            <Texte valueTeste={`Prenom:  ${props.prenom}`} className='' />
            <Texte valueTeste={`Pseudo:  ${props.pseudo}`} className='' />
            <Texte valueTeste={`sexe:  ${props.sexe}`} className='' />
            <Texte valueTeste={`Description:  ${props.description}`} className='' />
        </span>
    </div>
  )
}
