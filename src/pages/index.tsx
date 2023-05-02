import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import WaveBottomShapeDivider from "@site/src/components/WaveBottomShapeDivider";
import WaveTopShapeDivider from "@site/src/components/WaveTopShapeDivider";
import ConferenceTalkLogos from "@site/src/components/ConferenceTalkLogos";
import HeroTitleSecondary from "@site/src/components/HeroTitleSecondary";
import HomePageMetadata from "@site/src/components/HomePageMetadata";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Project Odyssey</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/what-why-mentorship"
          >
            Read the updates! 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomePageMetadata />
      <HomepageHeader />
      <main>
        <WaveTopShapeDivider />
        <HomepageFeatures />
        <WaveBottomShapeDivider />
        <HeroTitleSecondary
          title="We are a passionate group of individuals working towards the deployment of full autonomous driving."
          ctaText="Read the docs! 📖"
          ctaLink="/docs/what-why-mentorship"
        />
        <ConferenceTalkLogos />
      </main>
    </Layout>
  );
}
