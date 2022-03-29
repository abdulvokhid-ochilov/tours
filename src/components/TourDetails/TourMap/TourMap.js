import styles from "./TourMap.module.css";
import GoogleMapReact from "google-map-react";

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const TourMap = () => {
  return (
    <section className={styles["section-map"]}>
      <div id={styles["map"]}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: key,
            libraries: ["places"],
          }}
          center={[-33.918861, 18.4233]}
          defaultZoom={12}
          margin={[50, 50, 50, 50]}
          // onClick={({ lat, lng }) => {
          //   setStops([...stops, { lat, lng }]);
          // }}
        >
          {/* {stops.map(({ lat, lng }, i) => (
                  <div className={styles.marker} key={i} lat={lat} lng={lng}>
                    🚩
                  </div>
                ))} */}
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default TourMap;
