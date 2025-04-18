import styles from './Header.module.css'

function Header(){
    return (
        <div className={styles["Header-Container"]}>
            <img className={styles["Header-Logo"]} src="/logo.svg" alt="" />
            <button className={styles["Theme-Toggle-Button"]}><img src="/icon-moon.svg" alt="" /></button>
        </div>
    );
}

export default Header;