import styles from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
