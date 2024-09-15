const IconArrow = ({className, ...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M18.5 18L12.5 12L6.5 18" stroke="#03DF84" stroke-width="2" />
      <path d="M18.5 12L12.5 6L6.5 12" stroke="#03DF84" stroke-width="2" />
    </svg>
  );
};

const IconUserArrow = ({className, ...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="399" height="105" viewBox="0 0 399 105" fill="none" className={className}
        {...props}>
        <path d="M0.5 12L163 2.5L398 103" stroke="#B3B3B3" stroke-width="3"/>
        </svg>
    );
  };
  const IconUserRightArrow = ({className, ...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="461" height="138" viewBox="0 0 461 138" fill="none" className={className} >
<path d="M460 59.5L324 2L1 136.5" stroke="#B3B3B3" stroke-width="3"/>
</svg>
    );
  };

export { IconArrow, IconUserArrow, IconUserRightArrow };
