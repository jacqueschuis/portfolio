const Footer = ({ home, absolute }) => {
  return (
    <footer
      className={`${
        absolute && "absolute bottom-0"
      } md:h-10 h-4 w-full flex justify-center items-center text-[.5rem] md:text-xs ${
        home ? "text-white" : "md:text-blue-700 text-orange-600"
      }`}
    >
      <p>&copy; Copyright 2023, Jacques Pariseau</p>
    </footer>
  );
};

export default Footer;
