import Navbar from './Components/Navbar';
import './App.css';
import Catogories from './Components/Catogories';
import Counts from './Components/Counts';
import Making from './Components/Making';
import Stories from './Components/Stories';
import Cato from './Components/Cato';
import Footer from './Components/Footer';

function App() {
  return (
    <>
   <Navbar />
     <hr />
   <Catogories />
   <hr />
   <Counts />
   <hr />
   <Making />
   <Stories />
   <Cato />
   <hr />
   <Footer />
    </>
  );
}

export default App;
