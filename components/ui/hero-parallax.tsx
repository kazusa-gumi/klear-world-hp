"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  properties,
}: {
  properties: {
    title: string;
    location: string;
    price: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = properties.slice(0, 5);
  const secondRow = properties.slice(5, 10);
  const thirdRow = properties.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((property) => (
            <PropertyCard
              property={property}
              translate={translateX}
              key={property.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((property) => (
            <PropertyCard
              property={property}
              translate={translateXReverse}
              key={property.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((property) => (
            <PropertyCard
              property={property}
              translate={translateX}
              key={property.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Discover Your Dream Home <br /> in Japan
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We specialize in helping international clients find and purchase their ideal properties in Japan. 
        From modern Tokyo apartments to traditional Kyoto homes, explore our curated selection of premium real estate.
      </p>
    </div>
  );
};

export const PropertyCard = ({
  property,
  translate,
}: {
  property: {
    title: string;
    location: string;
    price: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={property.title}
      className="group/property h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href="#"
        className="block group-hover/property:shadow-2xl"
      >
        <Image
          src={property.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
          alt={property.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/property:opacity-80 bg-black pointer-events-none rounded-lg transition-opacity"></div>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover/property:opacity-100 text-white">
        <h2 className="text-xl font-semibold">{property.title}</h2>
        <p className="text-sm text-gray-300">{property.location}</p>
        <p className="text-lg font-bold mt-1">{property.price}</p>
      </div>
    </motion.div>
  );
};