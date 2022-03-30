import styles from "../styles/Home.module.css";
import { PetList } from "src/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <PetList />
    </div>
  );
}
