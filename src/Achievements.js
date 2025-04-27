import styles from "./ach.module.css"
export function Achievements(){
    return (
        <div className={styles.body}>
            <h2><span className="script-text">The Legacy </span> That</h2>
             <h1 className="million">Inspired Millions</h1>
            <div className={styles.img}>
             <img src="https://cdn.educba.com/academy/wp-content/uploads/2023/12/APJ-Abdul-Kalam.jpg" alt="Dr. Kalam working" className={styles.image} height={'300px'} weigth={"300px"}
                />
            </div>
            <h1 id={styles.hasil}>Achievements</h1>
            <ol>
                <li><strong>Missile Man of India</strong>
                    <ul>
                        <li>Played a major role in developing India's ballistic missile and launch vehicle technology.</li>
                        <li>Worked on Agni and Prithvi missiles under the Integrated Guided Missile Development Program (IGMDP).</li>
                     </ul>
                </li>
                <li><strong>Pokhran-II Nuclear Tests (1998)</strong>
                    <ul>
                        <li>Key figure behind India's successful nuclear bomb tests at Pokhran.</li>
                        <li>Made India a nuclear power officially on the world map.</li>
                     </ul>
                </li>
                <li><strong>Bharat Ratna Award (1997)</strong>
                    <ul>
                        <li>Received India's highest civilian award for his contributions to science and technology.</li>
                     </ul>
                </li>
                <li><strong>ISRO Contributions</strong>
                    <ul>
                        <li>Project Director of SLV-III (Satellite Launch Vehicle) which successfully deployed Rohini Satellite in 1980 — India’s first indigenous satellite launch.</li>
                     </ul>
                </li>
                <li><strong>DRDO Contributions</strong>
                    <ul>
                        <li>Worked at the Defence Research and Development Organisation (DRDO) to strengthen India’s military defense technologies.</li>
                     </ul>
                </li>
                <li><strong>11th President of India (2002-2007)</strong>
                    <ul>
                        <li>Served as the President of India, famously known as the "People's President" for his humble and approachable style.</li>
                     </ul>
                </li>
                <li><strong>DRDO Contributions</strong>
                    <ul>
                        <li>Worked at the Defence Research and Development Organisation (DRDO) to strengthen India’s military defense technologies.</li>
                     </ul>
                </li>
                <li><strong>Vision 2020</strong>
                    <ul>
                        <li>Authored "India 2020: A Vision for the New Millennium" proposing a roadmap to transform India into a developed nation.</li>
                     </ul>
                </li>
                <li><strong>Author of Many Inspirational Books</strong>
                    <ul>
                        <li>Wings of Fire (autobiography)</li>
                        <li>Ignited Minds</li>
                        <li>Turning Points</li>
                        <li>My Journey: Transforming Dreams into Actions</li>
                     </ul>
                </li>
                <li><strong>Teaching and Youth Motivation</strong>
                    <ul>
                        <li>After his Presidency, he taught at institutes like IISc Bangalore, IITs, and Anna University.</li>
                        <li>He constantly motivated youth, saying,"Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action."</li>
                     </ul>
                </li>
            </ol>


        </div>
    )
}