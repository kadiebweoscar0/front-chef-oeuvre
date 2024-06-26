import Skeleton from "react-loading-skeleton";

export default function Texte(props: {className: string, valueTeste: string}) {
    return (
      <p className={props.className}>{props.valueTeste || <Skeleton />}</p>
    )
  }
  