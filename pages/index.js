import Head from "next/head";
import Banner from "../components/Banner";
import DiscoverCard from "../components/DiscoverCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import TryDeployCard from "../components/TryDeployCard";

export default function Home({ exploreData, cardsData, discoverData }) {
  return (
    // tailwind css
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header page="Home" />
      {/* Banner */}
      <Banner />

      {/* main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16 font-serif">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints NEXTJS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                Key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard Key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb."
          buttonText="Get Inspired"
        />

        <section>
          <h2 className="text-4xl font-semibold py-8">Discover things to do</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {discoverData?.map(({ img, title, desc }) => (
              <DiscoverCard Key={img} img={img} title={title} desc={desc} />
            ))}
          </div>
        </section>

        <TryDeployCard
          img="https://i.ibb.co/MNY1qzV/airbnb4.jpg"
          title="Try hosting"
          description="Earn extra income and unlock new oppurtunities by sharing your space."
          buttonText="Learn more"
        />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  const discoverData = await fetch("https://jsonkeeper.com/b/8XLH").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
      discoverData,
    },
  };
}
