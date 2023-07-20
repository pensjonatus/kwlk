export type BoxLinkProps = {
  href: string;
  label: string;
  description: string;
  external?: boolean;
};

export default function BoxLink({
  href,
  label,
  description,
  external,
}: BoxLinkProps) {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {label}{" "}
        <span
          className={`inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ${
            external ? "-rotate-45" : ""
          }`}
        >
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </a>
  );
}
