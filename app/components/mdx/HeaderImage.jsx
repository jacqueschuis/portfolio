const HeaderImage = ({ headerImage }) => {
  if (headerImage) {
    return <img src={frontmatter.header} alt="" />;
  }
};

export default HeaderImage;
