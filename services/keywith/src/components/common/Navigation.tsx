import React from "react";
import menuConfig from "@/src/config/menu";

export const Navigation = () => {
  return (
    <ul>
      {menuConfig.map((menu) => (
        <li key={menu.id}>{menu.name}</li>
      ))}
    </ul>
  );
};
