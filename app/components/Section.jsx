const Section = ({ children, className }) => {
  return (
    <section
      className={className ? className : "py-12 mb-20 w-full flex flex-col"}
    >
      {children}
    </section>
  );
};

export default Section;
