export const GridSingleView = () => {
  return (
    <svg className="Icon Icon--wall-1" role="presentation" viewBox="0 0 36 36">
      <rect fill="currentColor" width="36" height="36"></rect>
    </svg>
  );
};

export const GridDualView = () => {
  return (
    <svg className="Icon Icon--wall-2" role="presentation" viewBox="0 0 36 36">
      <path
        fill="currentColor"
        d="M21 36V21h15v15H21zm0-36h15v15H21V0zM0 21h15v15H0V21zM0 0h15v15H0V0z"
      ></path>
    </svg>
  );
};

export const GridMultiView = () => {
  return (
    <svg className="Icon Icon--wall-4" role="presentation" viewBox="0 0 36 36">
      <path
        fill="currentColor"
        d="M28 36v-8h8v8h-8zm0-22h8v8h-8v-8zm0-14h8v8h-8V0zM14 28h8v8h-8v-8zm0-14h8v8h-8v-8zm0-14h8v8h-8V0zM0 28h8v8H0v-8zm0-14h8v8H0v-8zM0 0h8v8H0V0z"
      ></path>
    </svg>
  );
};
