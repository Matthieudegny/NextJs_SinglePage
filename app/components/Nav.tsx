import NavMobile from "./Nav/NavMobile";
import NavDesktop from "./Nav/NavDesktop";

type NavProps = {
  navVisible: boolean;
  isTablet: boolean;
};

const Nav: React.FC<NavProps> = ({ navVisible, isTablet }) => {
  return (
    <>
      {navVisible && !isTablet ? <NavMobile position={"fixed"} color={"bg-blackLighter"} /> : ""}
      {isTablet ? <NavDesktop position={"fixed"} color={"text-blackLighter"} /> : ""}
    </>
  );
};

export default Nav;
