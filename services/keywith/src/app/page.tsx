import Header from "../components/common/Header";
import * as s from "./page.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <p className={s.typo}>안녕하세요</p>
      </main>
    </>
  );
}
