"use client";

import styles from "./MeetingListPage.module.css";
import { useMeetingListPage } from "@/features/meetings/Page/useMeetingListPage";

export default function MeetingListPage() {
  const { title } = useMeetingListPage();
  return <h1 className={styles.heading}>{title}</h1>;
}
