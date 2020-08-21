import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Success!" />
      <div class="content-container--narrow text">
        <h1>You're in!</h1>
        <p class="text--sans">
          Thanks for expressing interest in CSS Fundamentals! If you want to
          learn a little bit more about the course you can see more info here:{" "}
          <Link
            className="blog__title-link text"
            to={`https://fundamentals.cssacademy.com/`}
          >
            https://fundamentals.cssacademy.com/
          </Link>
        </p>
        <p class="text--sans">
          Normally you would see this on cssacademy.com and soon it will be
          there. But, I'm still working on designing and building it.{" "}
          <span role="img" aria-label="writing some code">
            👩‍💻
          </span>
        </p>
        <p class="text--sans">I'll keep you updated as I make progress.</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
