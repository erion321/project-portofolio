import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Erion, a 20yr student majoring in Business
              Administration who has a passion about technology. I have always
              been fascinated by technology and how it can be used to make our
              lives easier and more connected. I specialize in the frontend,
              primarily Javascript and React, but love building with whatever
              tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I am currently working only on my personal projects mostly to show
              my skills and learn new technologies as a belive the best way to
              learn coding is by building stuff. My goal is to build websites
              that are not only visually appealing but also highly functional
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m looking for new positions where I can show my love for
              coding and help on building real world applications. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
