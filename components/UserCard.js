// Server Component - no "use client" needed
import Image from "next/image";
import styles from "./UserCard.module.css";

export default function UserCard({ user }) {
  return (
    <article className={styles.userCard}>
      {/* Async Server Component inside */}

      <Image
        src={user.image}
        alt={user.caption}
        className={styles.userCardImage}
        width={500}
        height={500}
      />
      <h3>{user.caption}</h3>
      <h2>{user.name}</h2>
      <h3>{user.title}</h3>
    </article>
  );
}
