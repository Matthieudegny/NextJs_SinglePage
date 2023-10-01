type NavMobileProps = {
  position: string;
  color: string;
};

const NavMobile: React.FC<NavMobileProps> = ({ position, color }) => {
  const navStyle = `w-full h-2 ${color} rounded-182`;
  return (
    <div className={`h-14 w-25 ${position} top-29 left-24 flex flex-col justify-around z-20`}>
      <div className={navStyle}></div>
      <div className={navStyle}></div>
      <div className={navStyle}></div>
    </div>
  );
};

export default NavMobile;
