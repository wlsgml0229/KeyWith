import { style, keyframes } from "@vanilla-extract/css";
import { f } from "../../shared/styles/functions";

// 애니메이션 정의
const gradientShift = keyframes({
  "0%, 100%": {
    backgroundPosition: "0% 50%",
  },
  "50%": {
    backgroundPosition: "100% 50%",
  },
});

const pulse = keyframes({
  "0%, 100%": {
    transform: "translate(-50%, -50%) scale(1)",
    opacity: 0.5,
  },
  "50%": {
    transform: "translate(-50%, -50%) scale(1.1)",
    opacity: 0.8,
  },
});

// 네비게이션 컨테이너
export const navigation = style([
  f.pSticky,
  {
    top: 0,
    zIndex: 1000,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
]);

export const navContainer = style([
  f.flex,
  f.alignCenter,
  f.justifyBetween,
  {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    height: "70px",
  },
]);

// 브랜드 스타일
export const navBrand = style([f.flex, f.alignCenter, f.pRelative]);

export const brandText = style({
  fontSize: "1.8rem",
  fontWeight: 700,
  background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)",
  backgroundSize: "300% 300%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: `${gradientShift} 3s ease-in-out infinite`,
  position: "relative",
  zIndex: 2,
});

export const brandGlow = style([
  f.pAbsolute,
  {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100px",
    height: "100px",
    background:
      "radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: `${pulse} 2s ease-in-out infinite`,
  },
]);

// 메뉴 스타일
export const navMenu = style([
  f.flex,
  {
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "2rem",
  },
]);

export const navItem = style([
  f.pRelative,
  {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
]);

export const navLink = style([
  f.flex,
  f.alignCenter,
  {
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    color: "rgba(255, 255, 255, 0.9)",
    textDecoration: "none",
    fontWeight: 500,
    borderRadius: "12px",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    ":before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
      transition: "left 0.5s ease",
    },
    ":hover:before": {
      left: "100%",
    },
  },
]);

export const navIcon = style({
  fontSize: "1.2rem",
  transition: "transform 0.3s ease",
});

export const navText = style({
  fontSize: "1rem",
  transition: "all 0.3s ease",
});

export const navUnderline = style([
  f.pAbsolute,
  {
    bottom: 0,
    left: "50%",
    width: 0,
    height: "2px",
    background: "linear-gradient(90deg, #ff6b6b, #4ecdc4)",
    transition: "all 0.3s ease",
    transform: "translateX(-50%)",
  },
]);

// 호버 효과
export const navItemHover = style({
  selectors: {
    [`${navItem}:hover &`]: {
      color: "white",
      background: "rgba(255, 255, 255, 0.1)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    },
  },
});

export const navIconHover = style({
  selectors: {
    [`${navItem}:hover &`]: {
      transform: "scale(1.2) rotate(5deg)",
    },
  },
});

export const navTextHover = style({
  selectors: {
    [`${navItem}:hover &`]: {
      transform: "scale(1.05)",
    },
  },
});

export const navUnderlineHover = style({
  selectors: {
    [`${navItem}:hover &`]: {
      width: "80%",
    },
  },
});

// 활성 상태
export const navItemActive = style({
  selectors: {
    [`${navItem}.active &`]: {
      color: "white",
      background: "rgba(255, 255, 255, 0.15)",
    },
  },
});

export const navUnderlineActive = style({
  selectors: {
    [`${navItem}.active &`]: {
      width: "80%",
    },
  },
});

// 반응형 디자인
export const navContainerMobile = style({
  "@media": {
    "(max-width: 768px)": {
      padding: "0 1rem",
      flexDirection: "column",
      height: "auto",
    },
  },
});

export const navMenuMobile = style({
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "0.5rem",
      width: "100%",
      marginTop: "1rem",
    },
  },
});

export const navLinkMobile = style({
  "@media": {
    "(max-width: 768px)": {
      justifyContent: "center",
      padding: "1rem",
    },
  },
});

export const brandTextMobile = style({
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
});

// 다크 모드 지원
export const navigationDark = style({
  "@media": {
    "(prefers-color-scheme: dark)": {
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    },
  },
});
