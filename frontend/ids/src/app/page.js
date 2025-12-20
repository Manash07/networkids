import Image from "next/image";
import Head from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />
      <Head />
      <Body />
      <Footer />
    </>
  );
}
