import Footer from "./Footer"
import Content from "./Content"
import Header from "./Header"
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
