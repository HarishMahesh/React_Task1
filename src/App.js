import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const card = [
    {
      type: "FREE",
      rate: 0,
      user: "Single User",
      storage: "5GB Storage",
      unlimitedPublicProj: true,
      communityAccess: true,
      unlimitedPrivateProjects: false,
      dedicatedPhoneSupport: false,
      subdomain: false,
      monthlySatusReports: false,
    },
    {
      type: "PLUS",
      rate: 9,
      user: "5 Users",
      storage: "50GB Storage",
      unlimitedPublicProj: true,
      communityAccess: true,
      unlimitedPrivateProjects: true,
      dedicatedPhoneSupport: true,
      subdomain: true,
      monthlySatusReports: false,
    },
    {
      type: "PRO",
      rate: 49,
      user: "Unlimited Users",
      storage: "150GB Storage",
      unlimitedPublicProj: true,
      communityAccess: true,
      unlimitedPrivateProjects: true,
      dedicatedPhoneSupport: true,
      subdomain: "Unlimited",
      monthlySatusReports: true,
    },
  ];
  return (
    <div className="container entire-container">
      <div className="row">
        <Card
          type={card[0].type}
          rate={card[0].rate}
          user={card[0].user}
          storage={card[0].storage}
          publicProjects={card[0].unlimitedPublicProj}
          comAccess={card[0].communityAccess}
          privateProjects={card[0].unlimitedPrivateProjects}
          phoneSup={card[0].dedicatedPhoneSupport}
          subDomain={card[0].subdomain}
          reports={card[0].monthlySatusReports}
        />
        <Card
          type={card[1].type}
          rate={card[1].rate}
          user={card[1].user}
          storage={card[1].storage}
          publicProjects={card[1].unlimitedPublicProj}
          comAccess={card[1].communityAccess}
          privateProjects={card[1].unlimitedPrivateProjects}
          phoneSup={card[1].dedicatedPhoneSupport}
          subDomain={card[1].subdomain}
          reports={card[1].monthlySatusReports}
        />
        <Card
          type={card[2].type}
          rate={card[2].rate}
          user={card[2].user}
          storage={card[2].storage}
          publicProjects={card[2].unlimitedPublicProj}
          comAccess={card[2].communityAccess}
          privateProjects={card[2].unlimitedPrivateProjects}
          phoneSup={card[2].dedicatedPhoneSupport}
          subDomain={card[2].subdomain}
          reports={card[2].monthlySatusReports}
        />
      </div>
    </div>
  );
}

export default App;
