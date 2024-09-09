import './App.css'
import Header from './component/Header';
import Second from './component/Second';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Routing from './Route/Routing';


function App() {

  return (
    <>
      <Header />
      <Routing />
      {/* <Second /> */}
    </>
  )
}

export default App
