import React from "react";

export default function People() {
  return (
    <div>
      <h2 className="head-color">
        The video maker for your entire organization
      </h2>
      <div className="photos">
        <div>
          <img
            className="pic"
            src="https://biteable.com/static-assets/ui/CardsProfession/image-1.min.png"
          />
          <h3 className="head-color">Sales enablement</h3>
          <p style={{ width: "220px", color: "#000a47" }}>
            Create up-to-the-minute reporting, sales education, and updates.
          </p>
          <a className="head-color" href="/teams/sales-enablement">
            Learn More
          </a>
        </div>
        <div>
          <img
            className="pic"
            style={{ backgroundColor: "#1DE9B6" }}
            src="https://biteable.com/static-assets/ui/CardsProfession/image-2.min.png"
          />
          <h3 className="head-color">Internal communication</h3>
          <p style={{ width: "220px", color: "#000a47" }}>
            Boost your culture and drive company-wide engagement.
          </p>
          <a className="head-color" href="/teams/sales-enablement">
            Learn More
          </a>
        </div>
        <div>
          <img
            className="pic"
            style={{ backgroundColor: "#EE8AA1" }}
            src="https://biteable.com/static-assets/ui/CardsProfession/image-3.min.png"
          />
          <h3 className="head-color">People ops</h3>
          <p style={{ width: "220px", color: "#000a47" }}>
            Onboard, train, and communicate more efficiently.
          </p>
          <a className="head-color" href="/teams/sales-enablement">
            Learn More
          </a>
        </div>
        <div>
          <img
            className="pic"
            style={{ backgroundColor: "#FFCE00" }}
            src="https://biteable.com/static-assets/ui/CardsProfession/image-4.min.png"
          />
          <h3 className="head-color">Marketers</h3>
          <p style={{ width: "220px", color: "#000a47" }}>
            Irresistible ads, promos, and content for all your channels.
          </p>
          <a className="head-color" href="/teams/sales-enablement">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
