// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LoginSignUp from './pages/LoginSignUp';
import Products from './pages/Products';
import Cart from './pages/Cart';
import InquiryForm from './pages/InquiryForm';
import ProductDetails from './pages/ProductDetails'; 
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext'; 
import './styles/App.css';


import Agriminda from './assets/images/insecticidess/Agriminda.jpg';
import Bold4GR from './assets/images/insecticidess/Bold4GR.jpg';
import DiZine from './assets/images/insecticidess/DiZine.jpg';
import Fipropride from './assets/images/insecticidess/Fipropride.jpg';
import GFipro from './assets/images/insecticidess/GFipro.jpg';
import Gmire from './assets/images/insecticidess/Gmire.jpg';
import GRoma from './assets/images/insecticidess/GRoma.jpg';
import KeeparPlus from './assets/images/insecticidess/KeeparPlus.jpg';
import Gati from './assets/images/herbicidess/Gati.jpg';
import Glypho from './assets/images/herbicidess/Glypho.jpg';
import GOxy from './assets/images/herbicidess/GOxy.jpg';
import Imizza from './assets/images/herbicidess/Imizza.jpg';
import Matraaz from './assets/images/herbicidess/Matraaz.jpg';
import Pclor from './assets/images/herbicidess/Pclor.jpg';
import SuperKill from './assets/images/herbicidess/SuperKill.jpg';
import Gtwofour from './assets/images/herbicidess/Gtwofour.jpg';
import Blutol from './assets/images/fungicidess/Blutol.jpg';
import Carbol from './assets/images/fungicidess/Carbol.jpg';
import Carmax from './assets/images/fungicidess/Carmax.jpg';
import Cleaver from './assets/images/fungicidess/Cleaver.jpg';
import Cymote from './assets/images/fungicidess/Cymote.jpg';
import Gold from './assets/images/fungicidess/Gold.jpg'; // 
import HexaSuper from './assets/images/fungicidess/HexaSuper.jpg';
import Jivic from './assets/images/fungicidess/Jivic.jpg';
import DonSuper from './assets/images/organics/DonSuper.jpg'; 
import GLong from './assets/images/organics/GLong.jpg';
import GoldSuper from './assets/images/organics/GoldSuper.jpg'; 
import HumiP from './assets/images/organics/HumiP.jpg';
import SiliconProtection from './assets/images/organics/SiliconProtection.jpg';
import SoilGold from './assets/images/organics/SoilGold.jpg';
import Sugergold from './assets/images/organics/Sugergold.jpg';
import Tejal from './assets/images/organics/Tejal.jpg';



function App() {
  const products = [
    {id: 1, name: 'Agriminda', description: (<><strong>Imidachloprid 30.5% SC</strong><br/><br/>It is systemic insecticide containing 
    imidacloprid active ingredient, balance auxiliaries and inert material. It is used for the control of termites in buildings.
    <br/><br/><strong>Available Packing:</strong> <br/>250ml, 500ml, 1 Ltr.</>),price: 2500,imageUrl: Agriminda,},
      { id: 2, name: 'Bold-4-GR', description: (<><strong>Cartap Hydrochloride 4% GR</strong><br/><br/>Cartap Hydrochloride 4% GR 
      recommended for to control stem borer, Leaf folder and whorl maggot of rice crop<br/><br/><strong>Available Packing:
        </strong><br/>4Kg</>), price: 3000, imageUrl: Bold4GR },
      { id: 3, name: 'Di-Zine', description: 'Fast-acting pesticide for pest control.', price: 3500, imageUrl: DiZine },
      { id: 4, name: 'Fipropride', description: 'Fast-acting pesticide for pest control.', price: 3550, imageUrl: Fipropride },
      { id: 5, name: 'G-Fipro', description: 'Wide-spectrum pesticide with fast action.', price: 4550, imageUrl: GFipro },
      { id: 6, name: 'G-mire', description: 'Effective pest control for organic farming.', price: 5050, imageUrl: Gmire },
      { id: 7, name: 'G-Roma', description: 'Protects crops from common pests.', price: 5500, imageUrl: GRoma },
      { id: 8, name: 'Keepar-Plus', description: 'Protects crops from common pests.', price: 5550, imageUrl: KeeparPlus },
      { id: 9, name: 'G-ati', description: 'High-quality pesticide for crop protection.', price: 2450, imageUrl:Gati },
      { id: 10, name:'G-lypho', description:'Organic pesticide for sustainable farming.', price :5300,imageUrl : Glypho },
      { id :11,name : "G Oxy",description : "Fast-acting pesticide for pest control.",price :9350,imageUrl : GOxy },
      { id :12,name :"Imizza",description :"Fast-acting pesticide for pest control.",price :3450,imageUrl : Imizza },
      { id :13,name :"Matraaz",description :"Wide-spectrum pesticide with fast action.",price :7450,imageUrl : Matraaz },
      { id :14,name :"Pclor",description :"Effective pest control for organic farming.",price :5500,imageUrl:Pclor },
      { id :15,name :'Super Kill',description :'Protects crops from common pests.',price :4550,imageUrl : SuperKill },
      { id :16,name :'G-2,4',description :'Protects crops from common pests.',price :5050,imageUrl:Gtwofour },
      { id :17,name :"Blutol",description :"High-quality pesticide for crop protection.",price :2550,imageUrl : Blutol },
      { id :18,name :"Carbol",description :"Organic pesticide for sustainable farming.",price :3800,imageUrl : Carbol },
      { id :19,name :"Carmax",description :"Fast-acting pesticide for pest control.",price :3950,imageUrl : Carmax },
      { id :20,name :"Cleaver",description :"Fast-acting pesticide for pest control.",price :4350,imageUrl : Cleaver },
      { id :21,name :"Cymote",description :"Wide-spectrum pesticide with fast action.",price :4550,imageUrl : Cymote },
      { id :22,name :"Gold",description :"Effective pest control for organic farming.",price :5500,imageUrl : Gold },
      { id :23,name :"Hexa Super",description :"Protects crops from common pests.",price :4550,imageUrl : HexaSuper },
      { id :24,name :"Jivic",description :"Protects crops from common pests.",price :5500,imageUrl:Jivic },
      { id :41,name :"Tejal",description :"High-quality pesticide for crop protection.",price :2450,imageUrl:Tejal },
      { id :42,name :"Suger gold",description :"Organic pesticide for sustainable farming.",price :9300,imageUrl:Sugergold },
      { id :43,name :"Soil Gold",description :"Fast-acting pesticide for pest control.",price :3450,imageUrl:SoilGold }, 
      { id :44,name :"Silicon Protection",description :"Fast-acting pesticide for pest control.",price :7350,imageUrl:SiliconProtection }, 
      { id :45,name :"HumiP",description :"Wide-spectrum pesticide with fast action.",price :2450,imageUrl:HumiP }, 
      { id :46,name :"Gold Super",description :"Effective pest control for organic farming.",price :5800,imageUrl:GoldSuper }, 
      { id :47,name :"G-Long",description :"Protects crops from common pests.",price :5500,imageUrl:GLong }, 
      { id :48,name :"Don Super",description :"Protects crops from common pests.",price :7550,imageUrl:DonSuper }, 
  ];

  return (
    <CartProvider> {/* Wrap your components with CartProvider to manage cart state */}
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/login" element={<LoginSignUp />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/inquiry" element={<InquiryForm />} />
                    {/* Add route for Product Details */}
                    <Route path="/product/:id" element={<ProductDetails products={products} />} /> 
                </Routes>
                <Footer />
            </div>
        </Router>
    </CartProvider>
);
}

export default App;