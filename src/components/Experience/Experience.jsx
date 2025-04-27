// import React from "react";

// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             return (
//               <div key={id} className={styles.skill}>
//                 <div className={styles.skillImageContainer}>
//                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//             );
//           })}
//         </div>
//         <ul className={styles.history}>
//           {history.map((historyItem, id) => {
//             return (
//               <li key={id} className={styles.historyItem}>
//                 <img
//                   src={getImageUrl(historyItem.imageSrc)}
//                   alt={`${historyItem.organisation} Logo`}
//                 />
//                 <div className={styles.historyItemDetails}>
//                   <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                   <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                   <ul>
//                     {historyItem.experiences.map((experience, id) => {
//                       return <li key={id}>{experience}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// };
import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const techStack = [
    "HTML", "CSS", "JavaScript", "Node", "Express", "Supabase", "SQL", "React", "Figma", "Data Science", "ML"
  ];

  // Hardcoded skills array with image paths and titles
  const skills = [
    { title: "HTML", imageSrc: "/skills/html.png" },
    { title: "CSS", imageSrc: "/skills/css.png" },
    // { title: "JavaScript", imageSrc: "/skills/js.png" },
    { title: "Node", imageSrc: "/skills/node.png" },
    // { title: "Express", imageSrc: "/skills/express.png" },
    { title: "Supabase", imageSrc: "/skills/supabase.png" },
    // { title: "SQL", imageSrc: "/skills/sql.png" },
    { title: "React", imageSrc: "/skills/react.png" },
    { title: "Figma", imageSrc: "/skills/figma.png" },
    // { title: "Data Science", imageSrc: "/skills/data-science.png" },
    // { title: "ML", imageSrc: "/skills/ml.png" }
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.filter((skill) => techStack.includes(skill.title)).map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skill.imageSrc} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
