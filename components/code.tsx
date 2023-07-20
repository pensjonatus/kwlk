type CodeProps = {
  children: JSX.Element;
};

export default function Code({ children }: CodeProps) {
  return <code className="font-mono font-bold">{children}</code>;
}
