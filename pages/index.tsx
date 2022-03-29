import styles from "../styles/Home.module.css";
import PetList from "../components/Pet/PetList/PetList";

export default function Home() {
  return (
    <div className={styles.container}>
      <PetList />
    </div>
  );
}
