import React from "react";
import ArticleWrapper from "./ArticleWrapper";

const ArticleSecondSection = () => {
  return (
    <ArticleWrapper>
      <p>
        Thomas Rux stood miles down the road from Riverside RV Park — where his trailer
        stood before rushing waters swept his home away.
      </p>

      <p>
        Rux, like many in Central Texas, had to seek shelter after devastating floods claimed
        the lives of at least 24 and left many unaccounted for in{" "}
        <a href="#" style={{ color: "#065fd4", textDecoration: "underline" }}>
          Kerr County on Friday
        </a>.
      </p>

      <blockquote
        style={{
          borderLeft: "4px solid #ccc",
          margin: "1em 0",
          padding: "0.5em 1em",
          color: "#444",
          fontStyle: "italic",
        }}
      >
        “If it wasn’t for these trees … I would've lost everything,” said Rux, who lives in
        nearby Ingram. “It would have been down the river and gone. I got to cherry pick, and I
        got all my guns out, my valuables, and I’m going in and just getting a few more stuff
        right now while I can.”
      </blockquote>

      <p>
        Rux recalled getting a wake-up call from emergency first responders urging him to
        evacuate. The National Weather Service’s Austin/San Antonio office recorded the
        Guadalupe River’s gauge at a 22-foot rise in about two hours. The Associated Press
        reported the gauge failed after it recorded the river level at 29.5 feet. The Guadalupe
        River’s “total length is approximately 250 miles” with its north and south forks in
        Kerr County, according to Texas Parks and Wildlife.
      </p>

      <p style={{ fontWeight: "bold" }}>
        MISSING GIRLS:{" "}
        <a
          href="#"
          style={{
            color: "#065fd4",
            textDecoration: "underline",
            fontWeight: "normal",
          }}
        >
          What we know about Camp Mystic, the Texas summer camp where 20 girls are missing
          after deadly floods
        </a>
      </p>

      <p>
        “I grabbed my keys, my wallet, turned on my alarm, shut the door, locked the doors and I
        left,” Rux said. “Then I got a call from my alarm company that I was getting robbed and
        knew my trailer was gone… it was a laundry machine that got hit at that point.”
      </p>
    </ArticleWrapper>
  );
};

export default ArticleSecondSection;
