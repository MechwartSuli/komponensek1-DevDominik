import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
function App() {
  return (
    <>
      <Header title="Első weboldal" />
      <Content isActive={true} content="Lorem ipsum sit amen dolorem" ></Content>
      <Footer links={["Home", "About", "Contact"]} />
    </>
  )
}

export default App
