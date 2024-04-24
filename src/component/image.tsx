
export default function Image(props: {className: string, urlImage: string}) {
    return (
      <img src={props.urlImage} className={props.className} alt="img" />
    )
  }