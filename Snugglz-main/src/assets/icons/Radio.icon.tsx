export const RadioIcon = (props: { selected?: boolean }) => {
  const { selected } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="addressBlocks-base-radioIcon"
    >
      <g fillRule="evenodd">
        <path d="M8 14.933A6.941 6.941 0 0 1 1.067 8 6.941 6.941 0 0 1 8 1.067 6.941 6.941 0 0 1 14.933 8 6.941 6.941 0 0 1 8 14.933M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8"></path>
        {selected && (
          <path d="M8 3.429a4.571 4.571 0 1 0 0 9.143 4.571 4.571 0 0 0 0-9.143"></path>
        )}
      </g>
    </svg>
  );
};
