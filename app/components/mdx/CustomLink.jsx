import Link from "next/link";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <Link href={href}>{props.children}</Link>;
  }

  return <a target="_blank" {...props} />;
};

export default CustomLink;
