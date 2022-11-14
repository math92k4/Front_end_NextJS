import Head from "next/head";
import Image from "next/image";

export default function Henry() {
  return (
    <>
      <Head>
        <title>Henry</title>
      </Head>
      <h1>Hello from Henry</h1>
      <Image
        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
        alt="Cute dog"
        width="4240"
        height="2832"
        priority
        sizes="(max-width: 700px) 100vw,
        700px"
      />
    </>
  );
}
