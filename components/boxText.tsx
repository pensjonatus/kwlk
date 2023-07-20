type BoxTextProps = {
  children: JSX.Element | JSX.Element[];
};

export default function BoxText({ children }: BoxTextProps) {
  return (
    <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      {children}
    </p>
  );
}
