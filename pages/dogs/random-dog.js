import { useState } from "react";

export default function RndDog({ initImageUrl }) {
  const [imageUrl, setImageUrl] = useState(initImageUrl);

  // This will fetch and update the image client side (in the browser)
  async function fetchNewImg() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setImageUrl(data.message);
  }

  return (
    <>
      <img src={imageUrl} alt="A random dog" />
      <button onClick={fetchNewImg}>New random dog</button>
    </>
  );
}

// This function runs on the server
// This will get the inital image server side
export async function getServerSideProps() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  return {
    props: {
      initImageUrl: data.message,
    },
  };
}
