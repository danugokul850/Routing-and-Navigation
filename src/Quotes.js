import React from "react";
import styles from "./Quotes.module.css";

export default function Quotes() {
  const kalamQuotes = [
    { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "You have to dream before your dreams can come true.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "If you want to shine like a sun, first burn like a sun.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "Great dreams of great dreamers are always transcended.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "To succeed in life and achieve results, you must understand and master three mighty forces— Desire, Belief, and Expectation.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "Man needs his difficulties because they are necessary to enjoy success.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Excellence is a continuous process and not an accident.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "If you fail, never give up because FAIL means 'First Attempt In Learning'.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "We should not give up and we should not allow the problem to defeat us.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Confidence and hard work is the best medicine to kill the disease called failure.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "It is very easy to defeat someone, but it is very hard to win someone.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Winners are not those who never fail but those who never quit.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Small aim is a crime; have great aim.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "You cannot change your future, but you can change your habits, and surely your habits will change your future.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.", author: "Dr. A.P.J. Abdul Kalam" },
  {text: "It is very easy to defeat someone, but it is very hard to win someone.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Winners are not those who never fail but those who never quit.", author: "Dr. A.P.J. Abdul Kalam" }
  ];

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Famous Quotes by Dr. A.P.J. Abdul Kalam</h1>
      <div className={styles.quotesContainer}>
        {kalamQuotes.map((quote, index) => (
          <div className={styles.quoteCard} key={index}>
            <p className={styles.quoteText}>"{quote.text}"</p>
            <p className={styles.author}>- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
