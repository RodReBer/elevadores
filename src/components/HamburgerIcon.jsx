const HamburgerIcon = ({ isOpen }) => {
    return (
      <div className="w-6 h-6 flex flex-col justify-between items-center">
        <span
          className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.75" : ""}`}
        />
        <span className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
        <span
          className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.75" : ""}`}
        />
      </div>
    )
  }
  
  export default HamburgerIcon
  
  