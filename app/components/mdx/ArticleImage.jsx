import Image from "next/image";

const ArticleImage = ({ src, alt, imageClass, parentClass, caption }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
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
      {caption && <p className="text-blue-600 italic text-sm">{caption}</p>}
    </div>
  );
};

export default ArticleImage;
