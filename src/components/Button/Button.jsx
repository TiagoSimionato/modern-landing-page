export function Button({children, OtherStyles, bg = '', onClick, label}) {
  return (
    <button className={`
      inline
      rounded-[70px]
      w-16
      h-[62px]
      flex
      items-center
      justify-center
      ${bg}
      ${OtherStyles}
    `} onClick={(event) => onClick(event)} aria-label={label}>
      {children}
    </button>
  );
}
