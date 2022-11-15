import Head from "next/head";
import Image from "next/image";

export default function Henry({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{data.content.heading}</h1>
      <p>{data.content.text}</p>
      <Image
        src={data.content.image.src}
        alt={data.content.image.alt}
        width={data.content.image.width}
        height={data.content.image.height}
        priority
        sizes="(max-width: 700px) 100vw,
        700px"
      />
    </>
  );
}

// Fetching each route from the paths-array
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

// Creating an array of slugs/paths to be built
export async function getStaticPaths() {
  const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs");
  const data = await res.json();

  const paths = data.map((entry) => {
    return { params: { slug: entry.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
