import { community } from "../assets";
import styles, { layout } from "../style";
const EarnRewards = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Earn Rewards <br className="sm:block hidden" /> for every good
        samitarian act you do!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We believe in rewarding good samaritans. We have a reward system that
        rewards you for every good samaritan act you do. You can earn rewards
        for helping people in need.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={community} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default EarnRewards;
