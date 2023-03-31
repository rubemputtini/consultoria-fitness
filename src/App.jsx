import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Benefits,
  Steps,
  MemberArea,
  Testimonials,
  Guarantee,
  CTA,
  Footer,
  Author,
  FAQ,
} from "./components";
import { questionsData } from "./constants";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Benefits />
        <Steps />
        <CTA />
        <MemberArea />
        <Guarantee />
        <Author />
        <Testimonials />
        <FAQ questions={questionsData} />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
