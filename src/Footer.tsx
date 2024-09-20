type idk = {
    links: string[]
}

const Footer = ({links}: idk) => {
  return (
    <div>{links.map(item => (
        <p>{item}</p>
    ))}</div>
  )
}

export default Footer