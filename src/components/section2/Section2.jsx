import React from "react";
import Card from "../card/Card";
import "./Section2.css";

function Section2() {
  return (
    <section className="section2-wrapper">
      <div className="section2-container">
        <h1>Categories</h1>

        <div className="card-wrapper">
          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-car-vehicle-ui-drive-texi-cab-interface-4-13837.png?f=webp&w=256"
            }
            cardMessage={["Vehicle"]}
          />

          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-bike-1780541-1517631.png?f=webp&w=256"
            }
            cardMessage={["Bike", "Scooter", "Ride"]}
          />

          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-child-parent-free-ngo-avatar-male-person-44577.png?f=webp&w=256"
            }
            cardMessage={["Child", "Person"]}
          />

          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-dog-1539438-1306456.png?f=webp&w=256"
            }
            cardMessage={["Pet", "Dog", "Cat"]}
          />

          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-luggage-501-1113324.png?f=webp&w=256"
            }
            cardMessage={["Luggage"]}
          />

          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-bag-2456546-2036076.png?f=webp&w=256"
            }
            cardMessage={["Bag", "Purse", "Wallet"]}
          />

          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-keys-2549765-2133040.png?f=webp&w=256"
            }
            cardMessage={["Keys"]}
          />
          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-mobile-1257-460488.png?f=webp&w=256"
            }
            cardMessage={["Mobile", "Phone", "Device"]}
          />
          <Card
            imgURL={
              "https://cdn.iconscout.com/icon/free/png-512/free-laptop-mac-display-hardware-device-30500.png?f=webp&w=256"
            }
            cardMessage={["Laptop", "Computer", "Device"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Section2;
