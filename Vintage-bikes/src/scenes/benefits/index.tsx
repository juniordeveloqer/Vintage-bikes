import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import HText from "@/shared/HText";
import BenefitPageGraphic from "@/assets/BenefitPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State Of The Art Facilitis",
    description:
      "The Cub won t be disappearing anytime soon. To help celebrate its 50th anniversary back in 2008, Honda churned out its 60 millionth unit, and sales haven t slowed; the 100 millionth Super Cub rolled off the line in 2017.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State Of The Art Facilitis",
    description:
      "The Gold Star was a pin awarded to riders able to lap the Brooklands circuit at an average speed north of 100 mph. In 1937 Wal Handley came out of retirement, hopped on a BSA, recorded a lap speed of 107.5 mph, and the BSA Gold Star was born.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State Of The Art Facilitis",
    description:
      "So successful were the Norton Commando race bikes that the term “unapproachable Norton” was coined in pit row. Interestingly, though, what made the Nortons so tough on the track was how approachable they actually were.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:-3/5 md:my-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            The Honda Super Cub is the most popular selling motorcycle in the
            world. More than five decades in production will do that; so will a
            bulletproof single-cylinder engine and a low cost of ownership.
          </p>
        </motion.div>
        {/* BENEFİTS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto  mb-[70px]  h-[500px]  "
            alt="motor bike"
            src={BenefitPageGraphic}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className=" text-gray-600">RIDE</span>
                  </HText>
                </div>
              </div>
            </div>

            {/* DESCRPTION */}
            <div>
              <p className="my-5">
                aking what Triumph had started with the Speed Twin, Norton
                employed a former Rolls-Royce engineer to develop a package for
                the larger 750cc Norton parallel-twin. The revolutionary use of
                rubber mounting for the mechanicals meant that the vibrations
                inherent with high strung twins at speed was all but eliminated.
                Riders could now push harder for much longer stints. It also
                meant riders would often go for broke; early Nortons were famous
                for leaking a bit of oil here and there, but we’re pretty sure
                they were just sweating horsepower.
              </p>
              <p className="my-5">
                Norton motorcycles and the Isle of Man TT go together like
                strawberries and Devonshire cream. Having competed in every
                Tourist Trophy race since its inception (1907), Norton made the
                race their raison d’etre. In 1950, the team was working with an
                antiquated and underpowered package. The “Featherbed” frame
                featured a fully welded duplex frame and pivoted rear fork
                suspension setup, instantly reducing weight and exponentially
                improving handling.
              </p>
            </div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Buy Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
