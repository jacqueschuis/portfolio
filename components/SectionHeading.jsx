const SectionHeading = ({ children }) => {
  return (
    <h2 className="section-heading font-bold text-5xl md:text-8xl mb-2 break-after-column">
      {children}
    </h2>
  );
};

export default SectionHeading;
