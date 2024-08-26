interface MenuItem {
  id: number;
  name: string;
  path: string;
}

export const menuConfig: MenuItem[] = [
  {
    id: 1,
    name: "청약일정",
    path: "/schedule",
  },
  {
    id: 2,
    name: "청약게시판",
    path: "/board",
  },
  {
    id: 3,
    name: "인기공모주",
    path: "/popularStock",
  },
  {
    id: 4,
    name: "청약가이드",
    path: "/guide",
  },
];

export default menuConfig;
