export function Button({children, OtherStyles, bg = '', onClick, label}) {
  return (
    <button className={`
      flex
      rounded-[70px]
      w-16
      h-[62px]
      items-center
      justify-center
      ${bg}
      ${OtherStyles}
    `} onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
}
