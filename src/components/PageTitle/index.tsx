import styles from "./PageTitle.module.css";

type Props = {
  title: string;
};

export default function PageTitle({ title }: Props) {
  return <h1 className={styles.module}>{title}</h1>;
}
