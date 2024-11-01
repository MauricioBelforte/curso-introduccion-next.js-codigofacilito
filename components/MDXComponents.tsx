// Dependencies
import Link, { LinkProps } from "next/link";

const CustomLink = (props: React.ComponentProps<"a"> & LinkProps) => {
  const href = props.href; //href es un string
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }
  
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink, // Cuando vaya a renderizar un link va a usar el CustomLink
};

export default MDXComponents;
