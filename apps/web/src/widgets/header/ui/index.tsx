export const Header = () => {
  const displayName = "모험가, 밝은윌리님!";
  return (
    <header className="flex items-center">
      <div className="text-l font-bold text-neutral-900">{displayName}</div>
    </header>
  );
};
