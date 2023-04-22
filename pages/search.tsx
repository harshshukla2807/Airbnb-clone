import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { compareAsc, format } from "date-fns";
import React from "react";
import dateFormat, { masks } from "dateformat";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }: { searchResults: any }) {
  const router = useRouter();
  // console.log(router.query);
  const { location, startDate, endDate, noOfGuests } = router.query;

  const startDateString = Array.isArray(startDate) ? startDate[0] : startDate;
  const formattedStartDate = startDateString
    ? format(new Date(startDateString), "dd MMMM yy")
    : "";

  const endDateString = Array.isArray(endDate) ? endDate[0] : endDate;
  const formattedEndDate = endDateString
    ? format(new Date(endDateString), "dd MMMM yy")
    : "";
  // const formattedStartDate = format(
  //   new Date(startDate as string),
  //   "dd MMMM yy"
  // );
  // const formattedEndDate= format(new Date(endDate as string),"dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {" "}
            400+ stays {range} and {noOfGuests} number of guests.
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex space-x-3 mb-6 mt-2 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item: any) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
