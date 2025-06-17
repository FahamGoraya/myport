import ReactOriginal from "devicons-react/icons/ReactOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptPlain";
import TypescriptOriginal from "devicons-react/icons/TypescriptPlain";
import COriginal from "devicons-react/icons/COriginal";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import JavaOriginalWordmark from "devicons-react/icons/JavaOriginalWordmark";
import PythonOriginalWordmark from "devicons-react/icons/PythonOriginalWordmark";
import FlutterOriginal from "devicons-react/icons/FlutterOriginal";
import FirebaseOriginal from "devicons-react/icons/FirebaseOriginal";
import AzuresqldatabasePlain from "devicons-react/icons/AzuresqldatabasePlain";
import MongodbOriginalWordmark from "devicons-react/icons/MongodbOriginalWordmark";
import AndroidstudioOriginal from "devicons-react/icons/AndroidstudioOriginal";
import IntellijOriginal from "devicons-react/icons/IntellijOriginal";
import PycharmOriginal from "devicons-react/icons/PycharmOriginal";
import NextjsPlain from "devicons-react/icons/NextjsPlain";
import VercelOriginalWordmark from "devicons-react/icons/VercelOriginalWordmark";
import styles from "./techstack.module.css"; // Adjust the path/extension if your CSS module file is named differently
const MyStack = () => {
  return (
    <section className={styles.technicalSkills} id="skills">
      <h2 className={styles.technicalSkillsTitle}>My tech stack 🖥️</h2>

      <div className={styles.skillsColumns}>
        <div className={styles.skillColumn}>
          <div className={styles.skillCategoryHeader}>
            <span className={styles.codeIcon}>{"<>"}</span>
            <h3 className={styles.skillCategoryTitle}>Languages/Frameworks</h3>
          </div>
          <div className={styles.skillIconGrid}>
            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <ReactOriginal size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <JavascriptOriginal size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <TypescriptOriginal size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <COriginal size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <CplusplusOriginal size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <JavaOriginalWordmark size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <PythonOriginalWordmark size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <FlutterOriginal size={40} />
                </div>
              </div>
            </div>
            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <NextjsPlain size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.skillColumn}>
          <div className={styles.skillCategoryHeader}>
            <span className={styles.toolIcon}>🔧</span>
            <h3 className={styles.skillCategoryTitle}>Developer Tools</h3>
          </div>
          <div className={styles.skillIconGrid}>
            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <FirebaseOriginal size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <AzuresqldatabasePlain size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <MongodbOriginalWordmark size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <AndroidstudioOriginal size={40} />
                </div>
              </div>
            </div>

            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <IntellijOriginal size={40} />
                </div>
              </div>
            </div>
            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <PycharmOriginal size={40} />
                </div>
              </div>
            </div>
            <div className={styles.skillIconWrapper}>
              <div className={styles.skillIcon}>
                <div className={styles.iconPlaceholder}>
                  <VercelOriginalWordmark size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
