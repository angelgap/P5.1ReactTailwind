import Header from "./componentes/Header.tsx"; // Import the Header component from the components folder
import Footer from "./componentes/Footer.tsx";
import Button from "./componentes/Button.tsx";
import Input from "./componentes/Input.tsx";
import Card from "./componentes/Card.tsx";

function App() {

  return (
    <>
      <div>
       <Header />
       <div className="flex items-center py-3 justify-center">
      <Button label="Click me" />
    </div>
       <div className="flex items-center py-3 justify-center ">
      <Input placeholder="default" />
      <Input placeholder="succes" status="success"/>
      <Input placeholder="error" status="error"/>
      <Input placeholder="warning" status="warning"/>
    </div>
    <div className="flex justify-center items-center  ">
      <Card
        image="image.png"
        title="Título "
        description="Este es un ejemplo de card con imagen, título y descripción."
      />
    </div>
       <Footer />
      </div>
    </>
  )
}

export default App
