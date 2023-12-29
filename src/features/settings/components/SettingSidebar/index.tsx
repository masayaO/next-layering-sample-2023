import styles from "./SettingsSidebar.module.css";

export default function SettingsSidebar() {
  return (
    <div className={styles.module}>
      <p className={styles.header}>SettingsSidebar</p>
      {["SidebarItem1", "SidebarItem2", "SidebarItem3"].map((item, index) => (
        <div key={index} className={styles.item}>
          {item}
        </div>
      ))}
    </div>
  );
}
