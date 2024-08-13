import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "./components/MyButton";
import FetchData from "./components/FechData";

export default function Home() {
  return (
    <>
    <div> Welcome Home 
      
    </div>
    <MyButton/>
    <FetchData/>
   
    </>
  );
}
