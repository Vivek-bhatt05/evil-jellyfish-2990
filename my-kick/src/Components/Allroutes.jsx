import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from './Login'
import Art from '../Pages/Art'
import Comics from '../Pages/Comics'
import Design from '../Pages/Design'
import Film from '../Pages/Film'
import Food from '../Pages/Food'
import Game from '../Pages/Game'
import Music from '../Pages/Music'
import Publish from '../Pages/Publish'
import Signup from "./Signup";

export default function Allroutes(){
   return <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/art" element={<Art />}></Route>
    <Route path="/comic" element={<Comics />}></Route>
    <Route path="/design" element={<Design />}></Route>
    <Route path="/film" element={<Film />}></Route>
    <Route path="/food" element={<Food />}></Route>
    <Route path="/game" element={<Game />}></Route>
    <Route path="/music" element={<Music />}></Route>
    <Route path="/publish" element={<Publish />}></Route>
   </Routes>
}