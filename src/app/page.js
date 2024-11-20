import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
    </div>
  );
}
