const Footer = (props: string[]) => {
  return (
    <div>{props.map(item => {
        <p>{item}</p>
    })}</div>
  )
}

export default Footer