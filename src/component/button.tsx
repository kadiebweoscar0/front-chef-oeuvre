
export default function Button(props: {className: string, textButton: string, onClick?: any, desibled?: boolean}) {
    return (
      <button disabled={props.desibled} onClick={props.onClick} type="submit" className={props.className}>{props.textButton}</button>
    )
  }
  