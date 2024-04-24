
export default function Button(props: {className: string, textButton: string}) {
    return (
      <button type="submit" className={props.className}>{props.textButton}</button>
    )
  }
  