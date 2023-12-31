import { Meeting } from "@/types/meetings/types";
import styles from "./MeetingListItem.module.css";
import Link from "next/link";

type Props = {
  meeting: Meeting;
};

export default function MeetingListItem({ meeting }: Props) {
  return (
    <div className={styles.module}>
      <Link href={`/meetings/${meeting.id}`}>
        <div className={styles.item}>
          <p>{`id: ${meeting.id}`}</p>
          <p>{`title: ${meeting.title}`}</p>
        </div>
      </Link>
    </div>
  );
}
