import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Full Computer Vision Stack",
    image: "/img/undraw-mg-community.svg",
    description: (
      <>
        Using deep learning and convolutional neural networks, we are able to efficiently predict
        lane lines, whose parameters are then used to directly control the vehicle via GPIO pins.
      </>
    ),
  },
  {
    title: "Open Source",
    image: "/img/undraw-mg-book.svg",
    description: (
      <>
        Our code is completely open source and available on GitHub. While we aren't looking for active
        contributions due to the nature of the project, we are always open to suggestions and feedback.
      </>
    ),
  },
  {
    title: "Looking to use our code?",
    image: "/img/undraw-mg-mundo.svg",
    description: (
      <>
        Go ahead! Our code is licensed under the GPLv3
        agreement. You're totally free to modify it and make it better.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          src={useBaseUrl(image)}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="header-pill">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={clsx(styles.features)}>
        <div className={clsx(styles.featuresContainer, "margin--xl")}>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
