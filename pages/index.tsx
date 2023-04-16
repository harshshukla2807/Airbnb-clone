import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData,cardsData }: any) {

  return (
    <div>
    <header>
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      {/* {banner} */}
      <Banner />
    
    </header>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pulling data from server api */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        
        <section>
              <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
              
              
              <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                {cardsData.map((item:any)=>(
                  <MediumCard key={item.img} img={item.img} title={item.title}/>
                ))}  
              </div>
        </section> 
        
        <section>
                  <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb."
                    buttonText="Get Inspired"
                  />
        </section>
      </main>
      
      <footer>
            <Footer/>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res)=>res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    },
  };
}
