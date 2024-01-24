import "./searchItem.css";
import { useEffect, useState } from "react";

const SearchItem = ({ source, destination, date }) => {
  const [flightsData, setFlightsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(source, "sourec", destination, "destination", date, "date");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/4829d4ab0e96bfab50e7"
        );
        const data = await response.json();
        if (data && data.data && data.data.result) {
          // Filter the data based on source and destination
          const filteredData = data.data.result.filter(
            (flight) =>
              flight.displayData.source.airport.cityName === source &&
              flight.displayData.destination.airport.cityName === destination
          );

          setFlightsData(filteredData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (source && destination) {
      fetchData();
    }
  }, []);
  return (
    <>
      <div>
      {isLoading ? (
          <p>Sit Back , we are on it...</p>
        ) : flightsData.length === 0 ? (
          <p>No data found</p>
        ) : (
        flightsData.map((flight) => (
          <div className="searchItem" key={flight.id}>
            {/* <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt=""
              className="siImg"
            /> */}
            <div className="siDesc">
              <h1 className="siTitle">
                {flight.displayData.source.airport.cityName}
              </h1>
              <span className="siDistance">
                {flight.displayData.source.airport.airportName}
              </span>
              {flight.displayData.airlines.map((airline) => (
                <span className="siTaxiOp">{airline.airlineName} Airlines</span>
              ))}
              <span className="siSubtitle">Seat availability</span>
              <span className="siFeatures">Cabin seats available</span>
              <span className="siCancelOp">Free cancellation </span>
              <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
              </span>
            </div>
            <div className="timeline-widget u-lfloat">
              <div className="c-timeline-wrapper horizontal">
                <div
                  className="label tl first"
                  style={{ fontSize: "12px" }}
                ></div>
                <div className="label tl" style={{ fontSize: "12px" }}>
                  {flight.displayData.totalDuration}
                </div>
                <div
                  className="label tl last"
                  style={{ fontSize: "12px" }}
                ></div>
                <div
                  className="c-timeline"
                  style={{
                    height: "2px",
                    backgroundColor: "rgb(187, 187, 187)",
                  }}
                ></div>
                <div
                  className="label br first"
                  style={{ fontSize: "12px" }}
                ></div>
                <div className="label br" style={{ fontSize: "12px" }}>
                  {flight.displayData.stopInfo}
                </div>
                <div
                  className="label br last"
                  style={{ fontSize: "12px" }}
                ></div>
              </div>
            </div>
            <div className="siDetails">
              <div className="siRating">
                <span className="siDesDistancePort">
                  {flight.displayData.destination.airport.cityName}
                </span>
                <span className="siDesDistance">
                  {flight.displayData.destination.airport.airportName}
                </span>
              </div>
              <div className="siDetailTexts">
                <span className="siPrice">{flight.fare}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
              </div>
            </div>
          </div>
       ) ))}
      </div>
    </>
  );
};

export default SearchItem;
