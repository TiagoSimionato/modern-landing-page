export function Button({children, OtherStyles, bg = '', onClick}) {
  return (
    <button className={`
      inline
      rounded-full
      w-16
      h-16 flex
      items-center
      justify-center
      ${bg}
      ${OtherStyles}
    `} onClick={(event) => onClick(event)}>
      {children}
    </button>
  );
}
