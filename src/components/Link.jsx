export default function Link({ href, children, className }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={className}
    >
      {children}
    </a>
  );
}
