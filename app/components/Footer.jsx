const Footer = ({ home }) => {
  return (
    <footer
      className={`absolute bottom-0 md:h-10 h-4 w-full flex justify-center items-center text-[.5rem] md:text-xs ${
        home ? "text-white" : "text-blue-700"
      }`}
    >
      <p>&copy; Copyright 2023, Jacques Pariseau</p>
    </footer>
  );
};

export default Footer;
