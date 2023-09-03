export function Button({children, OtherStyles, bg = '', onClick, label}) {
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
    `} onClick={(event) => onClick(event)} aria-label={label}>
      {children}
    </button>
  );
}
