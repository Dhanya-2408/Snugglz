export const ArrowDownIcon = () => (
  <svg
    className="Icon Icon--select-arrow"
    role="presentation"
    viewBox="0 0 19 12"
  >
    <polyline
      fill="none"
      stroke="currentColor"
      points="17 2 9.5 10 2 2"
      fillRule="evenodd"
      strokeWidth="2"
      strokeLinecap="square"
    ></polyline>
  </svg>
);

export const ArrowPrevIcon = () => {
  return (
    <svg viewBox="0 0 100 100">
      <path
        d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z"
        className="arrow"
      ></path>
    </svg>
  );
};

export const ArrowNextIcon = () => {
  return (
    <svg viewBox="0 0 100 100">
      <path
        d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z"
        className="arrow"
        transform="translate(100, 100) rotate(180)"
      ></path>
    </svg>
  );
};
