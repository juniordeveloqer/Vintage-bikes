import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMedia";
import HomePageText from "@/assets/HomePageText.png";
import homePageGrapich from "@/assets/HomePageGrapich.png";
import SponsorDucati from "@/assets/SponsorDucati.png";
import SponsorHarley from "@/assets/SponsorHarley.png";
import SponsorNissan from "@/assets/SponsorNissan.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md-pb-0  gap-16 bg-slate-200 py-10  md:h-full"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:-top-30  before:absolute before:-left-20 before:z-[-1]    before:content-evolvetext">
                <img alt="homepage-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-2 text-sm">
              Since first opening in 2012, Steel Vintage motorbikes has become
              the ultimate destination for rare, classic and Vintage motorbikes.
              Operating from our workshop and showroom in Berlin, Germany;
              quality and craftsmanship of handmade steel motorbikes.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Buy Now
            </ActionButton>
            <AnchorLink
              className=" text-sm font-bold text-primary-500 hover:text-orange-300"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="HomePageGrapich" src={homePageGrapich} />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-gray-400 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img
                alt="Harley-sponsor"
                src={SponsorHarley}
                className="h-20"
              ></img>
              <img
                alt="Nissan-sponsor"
                src={SponsorNissan}
                className="h-20"
              ></img>
              <img
                alt="ducati-sponsor"
                src={SponsorDucati}
                className="h-20"
              ></img>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
