import Image from "next/image";

const ArticleImage = ({ src, alt, imageClass, parentClass }) => {
  return (
    <div
      className={`relative not-prose overflow-hidden rounded-xl shadow-xl ${parentClass}`}
    >
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL="/utils/blur.png"
        width={1500}
        height={1200}
        className={`object-cover object-center ${imageClass}`}
      />
    </div>
  );
};

export default ArticleImage;
