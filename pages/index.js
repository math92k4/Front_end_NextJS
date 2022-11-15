import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontpage</title>
      </Head>
      <h1>Hello from Front page</h1>
    </>
  );
}

// THIS IS A STUPID HACK TO FIX CORS ISSUES ON MY API
// THIS WON'T HAPPEN IF YOU USE SUPABASE / WORDPRESS / REST.DB OR ANY OTHER API BUILDER
// Explanation is below the function... Don't get frustrated if it doesn't make sense
export async function getStaticProps() {
  return {
    props: {
      this_is_stupid: "I hate getInitialProps",
    },
  };
}

// So why?
// getInitialProps (the one in _app.js) can run both on server, in the client or on build time
// Where it exactly runs depends on the method we use on the specific page
// If getServerSideProps - it runs on the server
// If getStaticProps - it runs on build time
// If none of them - it runs client side (so in the browser)

// We didn't use getServerSideProps or getStaticProps on this page, therefore it will run client side
// And the dog API rejects requests from localhost - meaning the client-side on our local environment

// That's why just declaring a getStaticProps, will fix the issue

// I will reapeat from day 1. Is Next.js nice? Yes.. Is it perfect? Nope
