import "./hamburger.css";
export default function Hamburger({ isOpen: [isOpen, setIsOpen] }) {
  // add animation to humberger
  const animateMenuIcon = () => {
    let noAnimation = document.querySelectorAll(".menu .no-animation");
    noAnimation.forEach((item) => {
      item.classList.remove("no-animation");
    });

    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <div
      className={`menu z-20 ${isOpen && "active"}`}
      onClick={animateMenuIcon}
    >
      <div className="line-one no-animation"></div>
      <div className="line-two no-animation"></div>
      <div className="line-three no-animation"></div>
    </div>
  );
}
