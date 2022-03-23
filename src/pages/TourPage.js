import { useEffect, useState } from "react";
import TourHeader from "../components/TourDetails/TourHeader/TourHeader";
import TourDescription from "../components/TourDetails/TourDescription/TourDescription";
import TourPictures from "../components/TourDetails/TourPictures/TourPictures";
import TourMap from "../components/TourDetails/TourMap/TourMap";
import TourReviews from "../components/TourDetails/TourReviews/TourReviews";
import TourCTA from "../components/TourDetails/TourCTA/TourCTA";
import { useParams } from "react-router-dom";

const TourPage = () => {
  const id = useParams().id;
  const [tour, setTour] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/tours/${id}`)
      .then((results) => results.json())
      .then((data) => {
        setTour(data.data.tour);
      });
  }, [id]);

  return tour ? (
    <>
      <TourHeader name={tour.name} duration={tour.duration} />
      <TourDescription
        startDates={tour.startDates}
        ratingsAverage={tour.ratingsAverage}
        maxGroupSize={tour.maxGroupSize}
        name={tour.name}
        description={tour.description}
        difficulty={tour.difficulty}
      />
      <TourPictures images={tour.images} />
      <TourMap />
      <TourReviews />
      <TourCTA images={tour.images} />
    </>
  ) : (
    <p>Loading ...</p>
  );
};

export default TourPage;
