const ArticleImage = ({ src, alt, className }) => {
  return (
    <div className="not-prose">
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default ArticleImage;
