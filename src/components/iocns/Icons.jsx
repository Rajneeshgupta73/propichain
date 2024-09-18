const IconArrow = ({ className, ...props }) => {
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

const IconUserArrow = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="399"
      height="105"
      viewBox="0 0 399 105"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M0.5 12L163 2.5L398 103" stroke="#B3B3B3" stroke-width="3" />
    </svg>
  );
};
const IconUserRightArrow = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="461"
      height="138"
      viewBox="0 0 461 138"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M460 59.5L324 2L1 136.5" stroke="#B3B3B3" stroke-width="3" />
    </svg>
  );
};

const IconUserBottomLeftArrow = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="385"
      height="341"
      viewBox="0 0 385 341"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M0.5 339.5L239.5 315L383 1.5"
        stroke="#B3B3B3"
        stroke-width="3"
      />
    </svg>
  );
};

const IconUserBottomRightArrow = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="281"
      height="319"
      viewBox="0 0 281 319"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M279.5 317L63.5 236L1.5 1" stroke="#B3B3B3" stroke-width="3" />
    </svg>
  );
};

const IconTransition = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M17 18.0526C17 15.9464 14.0522 15.3881 13.2702 17.3588C11.3784 22.1258 10 26.3902 10 28.6958C10 36.0435 16.268 42 24 42C31.732 42 38 36.0435 38 28.6958C38 26.2187 36.409 21.4807 34.2996 16.2876C31.5672 9.56044 30.201 6.19687 28.5145 6.0157C27.9749 5.95773 27.3862 6.06196 26.9047 6.30071C25.4 7.04684 25.4 10.7154 25.4 18.0526C25.4 20.2569 23.5196 22.0438 21.2 22.0438C18.8804 22.0438 17 20.2569 17 18.0526Z"
        fill="#2B8872"
      />
    </svg>
  );
};

const IconMoneyBill = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.58579 10.5858C4 11.1716 4 12.1144 4 14V34C4 35.8856 4 36.8284 4.58579 37.4142C5.17157 38 6.11438 38 8 38H40C41.8856 38 42.8284 38 43.4142 37.4142C44 36.8284 44 35.8856 44 34V14C44 12.1144 44 11.1716 43.4142 10.5858C42.8284 10 41.8856 10 40 10H8C6.11438 10 5.17157 10 4.58579 10.5858ZM10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5H14C14.8284 17.5 15.5 16.8284 15.5 16C15.5 15.1716 14.8284 14.5 14 14.5H10ZM32.5 32C32.5 31.1716 33.1716 30.5 34 30.5H38C38.8284 30.5 39.5 31.1716 39.5 32C39.5 32.8284 38.8284 33.5 38 33.5H34C33.1716 33.5 32.5 32.8284 32.5 32ZM27 24C27 25.6569 25.6569 27 24 27C22.3431 27 21 25.6569 21 24C21 22.3431 22.3431 21 24 21C25.6569 21 27 22.3431 27 24ZM30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24Z"
        fill="#2B8872"
      />
    </svg>
  );
};

const IconTicketBill = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.87868 8.87868C4 9.75736 4 11.1716 4 14V18.5C4 18.9659 4 19.1989 4.07612 19.3827C4.17761 19.6277 4.37229 19.8224 4.61732 19.9239C4.80109 20 5.03406 20 5.5 20H6C6.92997 20 7.39496 20 7.77646 20.1022C8.81173 20.3796 9.62038 21.1883 9.89778 22.2235C10 22.605 10 23.07 10 24C10 24.93 10 25.395 9.89778 25.7765C9.62038 26.8117 8.81173 27.6204 7.77646 27.8978C7.39496 28 6.92997 28 6 28H5.5C5.03406 28 4.80109 28 4.61732 28.0761C4.37229 28.1776 4.17761 28.3723 4.07612 28.6173C4 28.8011 4 29.0341 4 29.5V34C4 36.8284 4 38.2426 4.87868 39.1213C5.75736 40 7.17157 40 10 40H38C40.8284 40 42.2426 40 43.1213 39.1213C44 38.2426 44 36.8284 44 34V29.5C44 29.0341 44 28.8011 43.9239 28.6173C43.8224 28.3723 43.6277 28.1776 43.3827 28.0761C43.1989 28 42.9659 28 42.5 28H42C41.07 28 40.605 28 40.2235 27.8978C39.1883 27.6204 38.3796 26.8117 38.1022 25.7765C38 25.395 38 24.93 38 24C38 23.07 38 22.605 38.1022 22.2235C38.3796 21.1883 39.1883 20.3796 40.2235 20.1022C40.605 20 41.07 20 42 20H42.5C42.9659 20 43.1989 20 43.3827 19.9239C43.6277 19.8224 43.8224 19.6277 43.9239 19.3827C44 19.1989 44 18.9659 44 18.5V14C44 11.1716 44 9.75736 43.1213 8.87868C42.2426 8 40.8284 8 38 8H10C7.17157 8 5.75736 8 4.87868 8.87868ZM23.1135 21.3771L23.1135 21.3771C22.9223 21.8718 22.8267 22.1192 22.6478 22.2874C22.5976 22.3346 22.5431 22.3766 22.4851 22.4129C22.2784 22.5423 22.0202 22.5663 21.504 22.6142C20.63 22.6955 20.1931 22.7361 20.0596 22.9946C20.032 23.0482 20.0132 23.1062 20.004 23.1662C19.9598 23.4559 20.281 23.7591 20.9235 24.3657L21.1019 24.5342L21.1019 24.5342C21.4023 24.8178 21.5525 24.9596 21.6393 25.1365C21.6914 25.2427 21.7264 25.357 21.7428 25.4749C21.77 25.6715 21.7261 25.8772 21.6381 26.2886L21.6381 26.2886L21.6067 26.4356C21.4489 27.1734 21.3701 27.5423 21.4685 27.7236C21.557 27.8865 21.7199 27.9908 21.8998 27.9997C22.1001 28.0096 22.3824 27.7709 22.9469 27.2935C23.3189 26.979 23.5049 26.8218 23.7113 26.7603C23.9 26.7042 24.1 26.7042 24.2887 26.7603C24.4951 26.8218 24.6811 26.979 25.0531 27.2935C25.6176 27.7709 25.8999 28.0096 26.1002 27.9997C26.2801 27.9908 26.443 27.8865 26.5315 27.7236C26.6299 27.5423 26.5511 27.1734 26.3933 26.4356L26.3619 26.2886C26.2739 25.8772 26.23 25.6715 26.2572 25.4749C26.2736 25.357 26.3086 25.2427 26.3607 25.1365C26.4475 24.9596 26.5977 24.8178 26.8981 24.5342L27.0765 24.3657C27.719 23.7591 28.0402 23.4559 27.996 23.1662C27.9868 23.1062 27.968 23.0482 27.9404 22.9946C27.8069 22.7361 27.37 22.6955 26.496 22.6142C25.9798 22.5663 25.7216 22.5423 25.5149 22.4129C25.4569 22.3766 25.4024 22.3346 25.3522 22.2874C25.1733 22.1192 25.0777 21.8718 24.8865 21.3771C24.5502 20.5071 24.3821 20.0722 24.1089 20.0119C24.0371 19.996 23.9629 19.996 23.8911 20.0119C23.6179 20.0722 23.4498 20.5071 23.1135 21.3771Z"
        fill="#2B8872"
      />
    </svg>
  );
};

const IconStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M20.613 14.4407C21.8972 11.2393 22.5392 9.63864 23.5824 9.4168C23.8567 9.35846 24.1402 9.35846 24.4145 9.4168C25.4576 9.63864 26.0997 11.2393 27.3839 14.4407C28.1141 16.2613 28.4793 17.1715 29.1625 17.7907C29.3541 17.9643 29.5621 18.119 29.7836 18.2525C30.5733 18.7285 31.5591 18.8167 33.5307 18.9933C36.8682 19.2922 38.537 19.4417 39.0466 20.3931C39.1521 20.5902 39.2239 20.8036 39.2588 21.0244C39.4278 22.0904 38.201 23.2065 35.7474 25.4388L35.0661 26.0587C33.919 27.1023 33.3454 27.6241 33.0137 28.2753C32.8147 28.6659 32.6813 29.0866 32.6187 29.5205C32.5145 30.2439 32.6825 31.0009 33.0184 32.5149L33.1384 33.0558C33.7408 35.7709 34.042 37.1284 33.666 37.7957C33.3283 38.395 32.7062 38.7788 32.019 38.8116C31.2539 38.8481 30.176 37.9697 28.02 36.2129C26.5996 35.0555 25.8894 34.4768 25.101 34.2507C24.3805 34.0441 23.6164 34.0441 22.8959 34.2507C22.1075 34.4768 21.3973 35.0555 19.9769 36.2129C17.8209 37.9697 16.7429 38.8481 15.9779 38.8116C15.2907 38.7788 14.6686 38.395 14.3309 37.7957C13.9549 37.1284 14.2561 35.7709 14.8585 33.0558L14.9785 32.5149C15.3144 31.0009 15.4824 30.2439 15.3781 29.5205C15.3156 29.0866 15.1822 28.6659 14.9832 28.2753C14.6514 27.6241 14.0779 27.1023 12.9308 26.0587L12.2495 25.4388C9.79587 23.2065 8.56908 22.0904 8.73803 21.0244C8.77302 20.8036 8.84478 20.5902 8.95032 20.3931C9.45992 19.4417 11.1287 19.2922 14.4662 18.9933C16.4378 18.8167 17.4236 18.7285 18.2132 18.2525C18.4347 18.119 18.6428 17.9643 18.8344 17.7907C19.5176 17.1715 19.8828 16.2613 20.613 14.4407Z"
        fill="#2B8872"
        stroke="#2B8872"
        stroke-width="2"
      />
    </svg>
  );
};

const IconGroupUser = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M40.2755 38.6081C40.8651 38.4852 41.2155 37.871 40.9658 37.3229C39.8073 34.7806 37.7249 32.5446 34.9577 30.8931C31.8141 29.0169 27.9624 28 24 28C20.0375 28 16.1858 29.0169 13.0422 30.893C10.275 32.5446 8.19261 34.7806 7.03411 37.3229C6.78436 37.871 7.13481 38.4852 7.72442 38.6081L15.8391 40.2992C21.2218 41.421 26.7781 41.421 32.1608 40.2992L40.2755 38.6081Z"
        fill="#2B8872"
      />
      <circle cx="24" cy="16" r="10" fill="#2B8872" />
    </svg>
  );
};

const IconUser = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M40.2755 38.6081C40.8651 38.4852 41.2155 37.871 40.9658 37.3229C39.8073 34.7806 37.7249 32.5446 34.9577 30.8931C31.8141 29.0169 27.9624 28 24 28C20.0375 28 16.1858 29.0169 13.0422 30.893C10.275 32.5446 8.19261 34.7806 7.03411 37.3229C6.78436 37.871 7.13481 38.4852 7.72442 38.6081L15.8391 40.2992C21.2218 41.421 26.7781 41.421 32.1608 40.2992L40.2755 38.6081Z"
        fill="#2B8872"
      />
      <circle cx="24" cy="16" r="10" fill="#2B8872" />
    </svg>
  );
};

const IconGift = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <rect x="2" y="18" width="40" height="8" rx="2.5" fill="#2B8872" />
      <path
        d="M24 10V20H14C11.7909 20 10 18.2091 10 16V10C10 7.79086 11.7909 6 14 6H20C22.2091 6 24 7.79086 24 10Z"
        stroke="#2B8872"
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M24 13V20H31C32.6569 20 34 18.6569 34 17V13C34 11.3431 32.6569 10 31 10H27C25.3431 10 24 11.3431 24 13Z"
        stroke="#2B8872"
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 28.5V42.4C8 42.9601 8 43.2401 8.10899 43.454C8.20487 43.6422 8.35785 43.7951 8.54601 43.891C8.75992 44 9.03995 44 9.6 44H34.4C34.9601 44 35.2401 44 35.454 43.891C35.6422 43.7951 35.7951 43.6422 35.891 43.454C36 43.2401 36 42.9601 36 42.4V28.5H26.5V42H23.5V28.5H8ZM8.00003 25.5H25H36C35.9996 25.0058 35.9933 24.7468 35.891 24.546C35.7951 24.3578 35.6422 24.2049 35.454 24.109C35.2401 24 34.9601 24 34.4 24H9.6C9.03995 24 8.75992 24 8.54601 24.109C8.35785 24.2049 8.20487 24.3578 8.10899 24.546C8.00669 24.7468 8.00041 25.0058 8.00003 25.5Z"
        fill="#2B8872"
      />
    </svg>
  );
};

const IconCheckedCircle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5ZM16.7682 10.1402C17.1218 9.71591 17.0645 9.08534 16.6402 8.73178C16.2159 8.37821 15.5853 8.43554 15.2318 8.85982L11.6338 13.1774C11.2871 13.5934 11.0922 13.8238 10.9366 13.9653L10.9306 13.9707L10.9242 13.9659C10.7564 13.839 10.5415 13.6272 10.1585 13.2443L8.70711 11.7929C8.31658 11.4024 7.68342 11.4024 7.29289 11.7929C6.90237 12.1834 6.90237 12.8166 7.29289 13.2071L8.74428 14.6585L8.78511 14.6993L8.78512 14.6993C9.11161 15.026 9.4257 15.3402 9.71794 15.5611C10.0453 15.8087 10.474 16.0415 11.0234 16.0165C11.5728 15.9916 11.9787 15.721 12.2823 15.4448C12.5534 15.1983 12.8377 14.8569 13.1333 14.5021L13.1333 14.5021L13.1703 14.4577L16.7682 10.1402Z"
        fill="#2B8872"
      />
    </svg>
  );
};

const IconCircle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5ZM12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5Z"
        fill="#E8E8E8"
      />
    </svg>
  );
};

const IconLeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M19.5 12H5.5"
        stroke="#B3B3B3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 5L5.5 12L12.5 19"
        stroke="#B3B3B3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const IconRightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M5.5 12H19.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 5L19.5 12L12.5 19"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const IconTabTopLeft = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="168" viewBox="0 0 121 168" fill="none" className={className}
    {...props}>
    <path d="M1.5 167L100.5 105L119.5 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
  );
};

const IconTabBottomLeft = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="269" viewBox="0 0 60 269" fill="none" className={className}
    {...props}>
  <path d="M1.5 269V95.5L58.5 1" stroke="#B3B3B3" stroke-width="2"/>
</svg>
  );
};

const IconTabBottomRight = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="269" viewBox="0 0 40 269" fill="none" className={className}
    {...props}>
  <path d="M34 268.5L38.5 95L1.5 1" stroke="#B3B3B3" stroke-width="2"/>
</svg>
  );
};

const IconTabTopRight = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="140" viewBox="0 0 149 140" fill="none" className={className}
    {...props}>
  <path d="M148 139L29 83.5L1.5 1" stroke="#B3B3B3" stroke-width="2"/>
</svg>
  );
};

const IconMobileTopLeft = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="199" viewBox="0 0 85 199" fill="none" className={className}
    {...props}>
  <path d="M33.5 198.5L1.5 63.5L84 0.5" stroke="#B3B3B3"/>
</svg>
  );
};
const IconMobileTopRight = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="78" height="206" viewBox="0 0 78 206" fill="none" className={className}
    {...props}>
  <path d="M59.5 205.5L77 54L1 0.5" stroke="#B3B3B3"/>
</svg>
  );
};

const IconMobileBottomLeft = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="348" viewBox="0 0 66 348" fill="none" className={className}
    {...props}>
    <path d="M1 347L65.5 315.5V0" stroke="#B3B3B3"/>
  </svg>
  );
};

const IconMobileBottomRight = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="354" viewBox="0 0 57 354" fill="none" className={className}
    {...props}>
  <path d="M56 353.5L1.5 317L34.5 1" stroke="#B3B3B3"/>
</svg>
  );
};
export {
  IconArrow,
  IconUserArrow,
  IconUserRightArrow,
  IconUserBottomLeftArrow,
  IconUserBottomRightArrow,
  IconTransition,
  IconMoneyBill,
  IconTicketBill,
  IconStar,
  IconGroupUser,
  IconUser,
  IconGift,
  IconCheckedCircle,
  IconCircle,
  IconLeftArrow,
  IconRightArrow,
  IconTabTopLeft,
  IconTabBottomLeft,
  IconTabBottomRight,
  IconTabTopRight,
  IconMobileTopLeft,
  IconMobileTopRight,
  IconMobileBottomLeft,
  IconMobileBottomRight
};
