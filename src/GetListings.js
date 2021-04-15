import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import ListingsForm from "./ListingsForm";
import Listing1 from "./Listing.js";

export default function Listings({ flag, placePin, setValues }) {
  const [listingsList, setListingsList] = useState();

  useEffect(() => {
    //placePin({ lat: 0, lng: 0 });
    //setValues({ title: listingsList.title });
    const dbRef = database.ref("/Listings");
    dbRef.on("value", (snapshot) => {
      const dbData = snapshot.val();
      const dataList = [];
      for (let id in dbData) {
        dataList.push(dbData[id]);
      }
      setListingsList(dataList);
    });
  }, []);
  return (
    <div>
      {listingsList &&
        listingsList.map((todo, index) => (
          <Listing1
            data={todo}
            index={index}
            placePin={placePin}
            setValues={setValues}
            key={index}
          />
        ))}
    </div>
  );
}
