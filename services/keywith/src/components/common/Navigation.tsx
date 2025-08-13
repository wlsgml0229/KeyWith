import React, { useState } from "react";
import menuConfig from "@/src/config/menu";
import * as styles from "./Navigation.css";

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <nav className={styles.navigation}>
      <div className={`${styles.navContainer} ${styles.navContainerMobile}`}>
        <div className={styles.navBrand}>
          <span className={`${styles.brandText} ${styles.brandTextMobile}`}>
            KeyWith
          </span>
          <div className={styles.brandGlow}></div>
        </div>

        <ul className={`${styles.navMenu} ${styles.navMenuMobile}`}>
          {menuConfig.map((menu) => (
            <li
              key={menu.id}
              className={`${styles.navItem} ${activeMenu === menu.id ? "active" : ""}`}
              onMouseEnter={() => setActiveMenu(menu.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a
                href={menu.path}
                className={`${styles.navLink} ${styles.navLinkMobile} ${styles.navItemHover} ${styles.navItemActive}`}
              >
                <span className={`${styles.navIcon} ${styles.navIconHover}`}>
                  {menu.id === 1 && "📅"}
                  {menu.id === 2 && "📋"}
                  {menu.id === 3 && "📈"}
                  {menu.id === 4 && "📚"}
                </span>
                <span className={`${styles.navText} ${styles.navTextHover}`}>
                  {menu.name}
                </span>
                <div
                  className={`${styles.navUnderline} ${styles.navUnderlineHover} ${styles.navUnderlineActive}`}
                ></div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
