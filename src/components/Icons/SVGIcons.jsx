const InfoCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CheckCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const StarCircle = () => (
<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 8.76421L15.372 8.01368L12 0L8.628 8.02579L0 8.76421L6.552 14.49L4.584 23L12 18.4847L19.416 23L17.46 14.49L24 8.76421ZM12 16.2211L7.488 18.9689L8.688 13.7879L4.704 10.3016L9.96 9.84158L12 4.96316L14.052 9.85368L19.308 10.3137L15.324 13.8L16.524 18.9811L12 16.2211Z" fill="currentColor"/>
</svg>

);

const ErrorCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const Agent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="none"
    fill="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M17.7542 13.9999C18.9962 13.9999 20.003 15.0068 20.003 16.2488V16.8242C20.003 17.7185 19.6835 18.5833 19.1019 19.2627C17.5326 21.0962 15.1454 22.0011 12 22.0011C8.85414 22.0011 6.46812 21.0959 4.90182 19.2617C4.32206 18.5828 4.00354 17.7193 4.00354 16.8265V16.2488C4.00354 15.0068 5.0104 13.9999 6.25242 13.9999H17.7542ZM17.7542 15.4999H6.25242C5.83882 15.4999 5.50354 15.8352 5.50354 16.2488V16.8265C5.50354 17.3622 5.69465 17.8802 6.04251 18.2876C7.29582 19.7553 9.2617 20.5011 12 20.5011C14.7383 20.5011 16.7059 19.7553 17.9624 18.2873C18.3113 17.8797 18.503 17.3608 18.503 16.8242V16.2488C18.503 15.8352 18.1678 15.4999 17.7542 15.4999ZM12 2.00464C14.7614 2.00464 17 4.24321 17 7.00464C17 9.76606 14.7614 12.0046 12 12.0046C9.23857 12.0046 7 9.76606 7 7.00464C7 4.24321 9.23857 2.00464 12 2.00464ZM12 3.50464C10.067 3.50464 8.5 5.07164 8.5 7.00464C8.5 8.93764 10.067 10.5046 12 10.5046C13.933 10.5046 15.5 8.93764 15.5 7.00464C15.5 5.07164 13.933 3.50464 12 3.50464Z"
      fill="#212121"
    />
  </svg>
);

const AgentFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="none"
    fill="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.7542 13.9999C18.9962 13.9999 20.003 15.0068 20.003 16.2488V17.1673C20.003 17.7406 19.8238 18.2997 19.4905 18.7662C17.9446 20.9294 15.4203 22.0011 12 22.0011C8.57903 22.0011 6.05607 20.9289 4.51391 18.7646C4.18195 18.2987 4.00354 17.7409 4.00354 17.1688V16.2488C4.00354 15.0068 5.0104 13.9999 6.25242 13.9999H17.7542ZM12 2.00464C14.7614 2.00464 17 4.24321 17 7.00464C17 9.76606 14.7614 12.0046 12 12.0046C9.23857 12.0046 7 9.76606 7 7.00464C7 4.24321 9.23857 2.00464 12 2.00464Z" />
  </svg>
);

const Edit = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.0303 2.96967C22.4278 4.36713 22.4278 6.63286 21.0303 8.03033L9.06201 19.9987C8.78513 20.2755 8.4408 20.4754 8.06303 20.5784L2.94734 21.9736C2.38747 22.1263 1.87374 21.6125 2.02643 21.0527L3.42162 15.937C3.52465 15.5592 3.72447 15.2149 4.00135 14.938L15.9697 2.96967C17.3671 1.5722 19.6329 1.5722 21.0303 2.96967ZM15.0002 6.06057L5.06201 15.9987C4.96972 16.0909 4.90311 16.2057 4.86877 16.3316L3.81892 20.1811L7.66836 19.1312C7.79428 19.0969 7.90906 19.0303 8.00135 18.938L17.9392 8.99957L15.0002 6.06057ZM17.0303 4.03033L16.0602 4.99957L18.9992 7.93957L19.9697 6.96967C20.7813 6.15799 20.7813 4.842 19.9697 4.03033C19.158 3.21865 17.842 3.21865 17.0303 4.03033Z"
      fill="currentColor"
    />
  </svg>
);

const EditBox = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const Delete = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1.75C13.733 1.75 15.1492 3.10645 15.2449 4.81558L15.25 5H20.5C20.9142 5 21.25 5.33579 21.25 5.75C21.25 6.1297 20.9678 6.44349 20.6018 6.49315L20.5 6.5H19.704L18.4239 19.5192C18.2912 20.8683 17.1984 21.91 15.8626 21.9945L15.6871 22H8.31293C6.95734 22 5.81365 21.0145 5.59883 19.6934L5.57614 19.5192L4.295 6.5H3.5C3.1203 6.5 2.80651 6.21785 2.75685 5.85177L2.75 5.75C2.75 5.3703 3.03215 5.05651 3.39823 5.00685L3.5 5H8.75C8.75 3.20507 10.2051 1.75 12 1.75ZM18.197 6.5H5.802L7.06893 19.3724C7.12768 19.9696 7.60033 20.4343 8.18585 20.4936L8.31293 20.5H15.6871C16.2872 20.5 16.7959 20.0751 16.9123 19.4982L16.9311 19.3724L18.197 6.5ZM13.75 9.25C14.1297 9.25 14.4435 9.53215 14.4932 9.89823L14.5 10V17C14.5 17.4142 14.1642 17.75 13.75 17.75C13.3703 17.75 13.0565 17.4678 13.0068 17.1018L13 17V10C13 9.58579 13.3358 9.25 13.75 9.25ZM10.25 9.25C10.6297 9.25 10.9435 9.53215 10.9932 9.89823L11 10V17C11 17.4142 10.6642 17.75 10.25 17.75C9.8703 17.75 9.55651 17.4678 9.50685 17.1018L9.5 17V10C9.5 9.58579 9.83579 9.25 10.25 9.25ZM12 3.25C11.0818 3.25 10.3288 3.95711 10.2558 4.85647L10.25 5H13.75C13.75 4.0335 12.9665 3.25 12 3.25Z"
      fill="currentColor"
    />
  </svg>
);

const Close = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Circle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const Search = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const Download = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Eye = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOff = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const Link = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const Key = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
  </svg>
);

const Headset = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V14C19 15.1046 18.1046 16 17 16H15C14.4477 16 14 15.5523 14 15V11C14 10.4477 14.4477 10 15 10H17.5V9C17.5 5.96243 15.0376 3.5 12 3.5C8.96243 3.5 6.5 5.96243 6.5 9V10H9C9.55228 10 10 10.4477 10 11V15C10 15.5523 9.55228 16 9 16H7C6.82734 16 6.6598 15.9781 6.49998 15.937L6.5 16.25C6.5 17.4409 7.42516 18.4156 8.59595 18.4948L8.75 18.5L9.87776 18.5008C10.1864 17.6265 11.02 17 12 17C13.2426 17 14.25 18.0074 14.25 19.25C14.25 20.4926 13.2426 21.5 12 21.5C11.0204 21.5 10.1871 20.874 9.87812 20.0003L8.75 20C6.74574 20 5.10873 18.4276 5.0052 16.4492L5 16.25V9Z"
      fill="currentColor"
    />
  </svg>
);

const Refresh = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.3256 3.99314V7.43709C19.3256 7.97507 18.8895 8.41119 18.3516 8.41119H14.9076C14.3696 8.41119 13.9335 7.97507 13.9335 7.43709C13.9335 6.89911 14.3696 6.46299 14.9076 6.46299L15.7082 6.46199C13.0894 4.8955 9.64594 5.24023 7.38999 7.49618C4.72713 10.159 4.72713 14.4764 7.38999 17.1392C10.0529 19.8021 14.3702 19.8021 17.0331 17.1392C18.6538 15.5185 19.3322 13.2303 18.9065 11.0206C18.8047 10.4924 19.1505 9.98164 19.6787 9.87986C20.207 9.77808 20.7177 10.1238 20.8195 10.6521C21.3663 13.49 20.4934 16.4341 18.4106 18.5168C14.987 21.9405 9.43609 21.9405 6.01241 18.5168C2.58874 15.0932 2.58874 9.54228 6.01241 6.1186C9.10978 3.02123 13.9482 2.72602 17.3774 5.23297L17.3775 3.99314C17.3775 3.45516 17.8136 3.01904 18.3516 3.01904C18.8895 3.01904 19.3256 3.45516 19.3256 3.99314Z"
      fill="currentColor"
    />
  </svg>
);

const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Filter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const PlusCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const Unlocked = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.00104C13.7084 2.00104 15.2111 3.0822 15.7713 4.66746C15.9553 5.18819 15.6823 5.75949 15.1616 5.94348C14.678 6.11434 14.1509 5.89117 13.9307 5.44149L13.8855 5.33377C13.6057 4.54174 12.8541 4.00104 12 4.00104C10.9462 4.00104 10.0828 4.81649 10.0065 5.85082L10.001 6L10.001 7.99904L17.75 8C18.9409 8 19.9156 8.92516 19.9948 10.096L20 10.25V19.7463C20 20.9371 19.0748 21.9119 17.904 21.9911L17.75 21.9963H6.25C5.05914 21.9963 4.08436 21.0711 4.00519 19.9003L4 19.7463V10.25C4 9.05914 4.92516 8.08436 6.09595 8.00519L6.25 8L8.001 7.99904L8.00104 6C8.00104 3.79143 9.79143 2.00104 12 2.00104ZM12 13.4995C11.1723 13.4995 10.5014 14.1705 10.5014 14.9981C10.5014 15.8258 11.1723 16.4968 12 16.4968C12.8277 16.4968 13.4986 15.8258 13.4986 14.9981C13.4986 14.1705 12.8277 13.4995 12 13.4995Z"
      fill="currentColor"
    />
  </svg>
);

const Locked = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C14.2091 2 16 3.79086 16 6V8H18.5C19.3284 8 20 8.67157 20 9.5V20.5C20 21.3284 19.3284 22 18.5 22H5.5C4.67157 22 4 21.3284 4 20.5V9.5C4 8.67157 4.67157 8 5.5 8H8V6C8 3.79086 9.79086 2 12 2ZM12.0001 13.5C11.1717 13.5 10.5001 14.1716 10.5001 15C10.5001 15.8284 11.1717 16.5 12.0001 16.5C12.8286 16.5 13.5001 15.8284 13.5001 15C13.5001 14.1716 12.8286 13.5 12.0001 13.5ZM12 4C10.8954 4 10 4.89543 10 6V8H14V6C14 4.89543 13.1046 4 12 4Z"
      fill="currentColor"
    />
  </svg>
);

const Scheduled = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.75 3C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V8.5ZM7.75 14.5C8.44036 14.5 9 15.0596 9 15.75C9 16.4404 8.44036 17 7.75 17C7.05964 17 6.5 16.4404 6.5 15.75C6.5 15.0596 7.05964 14.5 7.75 14.5ZM12 14.5C12.6904 14.5 13.25 15.0596 13.25 15.75C13.25 16.4404 12.6904 17 12 17C11.3096 17 10.75 16.4404 10.75 15.75C10.75 15.0596 11.3096 14.5 12 14.5ZM7.75 10.5C8.44036 10.5 9 11.0596 9 11.75C9 12.4404 8.44036 13 7.75 13C7.05964 13 6.5 12.4404 6.5 11.75C6.5 11.0596 7.05964 10.5 7.75 10.5ZM12 10.5C12.6904 10.5 13.25 11.0596 13.25 11.75C13.25 12.4404 12.6904 13 12 13C11.3096 13 10.75 12.4404 10.75 11.75C10.75 11.0596 11.3096 10.5 12 10.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75C17.5 12.4404 16.9404 13 16.25 13C15.5596 13 15 12.4404 15 11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V7H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5Z"
      fill="currentColor"
    />
  </svg>
);

const Attendance = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 12C20.5376 12 23 14.4624 23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12ZM12.0223 13.9993C11.3752 15.0098 11 16.2111 11 17.5C11 19.1303 11.6002 20.6205 12.5917 21.7615C11.7962 21.9216 10.9313 22.0011 10 22.0011C6.57903 22.0011 4.05607 20.9289 2.51391 18.7646C2.18195 18.2987 2.00354 17.7409 2.00354 17.1688V16.2488C2.00354 15.0068 3.0104 13.9999 4.25242 13.9999L12.0223 13.9993ZM14.8536 17.1465C14.6583 16.9512 14.3417 16.9512 14.1464 17.1465C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.1464 19.8536C16.3417 20.0488 16.6583 20.0488 16.8536 19.8536L20.8536 15.8536C21.0488 15.6583 21.0488 15.3417 20.8536 15.1465C20.6583 14.9512 20.3417 14.9512 20.1464 15.1465L16.5 18.7929L14.8536 17.1465ZM10 2.00464C12.7614 2.00464 15 4.24321 15 7.00464C15 9.76606 12.7614 12.0046 10 12.0046C7.23857 12.0046 5 9.76606 5 7.00464C5 4.24321 7.23857 2.00464 10 2.00464Z"
      fill="currentColor"
    />
  </svg>
);

const Delegated = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 12C20.5376 12 23 14.4624 23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12ZM12.0223 13.9993C11.3752 15.0098 11 16.2111 11 17.5C11 19.1442 11.6105 20.6458 12.6171 21.7905C11.8149 21.9313 10.942 22.0011 10 22.0011C7.1105 22.0011 4.87168 21.3445 3.30882 20.0008C2.48019 19.2884 2.00354 18.25 2.00354 17.1573V16.2499C2.00354 15.0073 3.0109 13.9999 4.25354 13.9999L12.0223 13.9993ZM16.7192 14.5886L16.65 14.6465L14.1344 17.1628L14.0937 17.2134L14.059 17.2708L14.0268 17.3488L14.0153 17.392L14.004 17.4784L14.0079 17.5659L14.0268 17.651L14.0587 17.7287L14.0834 17.7711L14.1343 17.8371L16.65 20.3536C16.8452 20.5488 17.1618 20.5488 17.3571 20.3536C17.5306 20.18 17.5499 19.9106 17.4149 19.7157L17.3571 19.6465L15.711 18H20.5C20.7455 18 20.9496 17.8231 20.9919 17.5899L21 17.5C21 17.2546 20.8231 17.0504 20.5899 17.0081L20.5 17H15.711L17.3571 15.3536C17.5306 15.18 17.5499 14.9106 17.4149 14.7157L17.3571 14.6465C17.1835 14.4729 16.9141 14.4536 16.7192 14.5886ZM10 2.00464C12.7614 2.00464 15 4.24321 15 7.00464C15 9.76606 12.7614 12.0046 10 12.0046C7.23857 12.0046 5 9.76606 5 7.00464C5 4.24321 7.23857 2.00464 10 2.00464Z"
      fill="currentColor"
    />
  </svg>
);

const Pdf = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M30 18v-2h-6v10h2v-4h3v-2h-3v-2h4z" fill="currentColor" />
    <path
      d="M19 26h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3zm-2-2h2a1.001 1.001 0 0 0 1-1v-4a1.001 1.001 0 0 0-1-1h-2z"
      fill="currentColor"
    />
    <path
      d="M11 16H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2.002 2.002 0 0 0-2-2zm-3 5v-3h3l.001 3z"
      fill="currentColor"
    />
    <path
      d="M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2zm-8-4V4.4l5.6 5.6z"
      fill="currentColor"
    />
  </svg>
);

const Comment = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const Attachment = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

const InfoFilled = () => (
  <svg viewBox="0 0 512 512">
    <path
      d="M257,0C116.39,0,0,114.39,0,255s116.39,257,257,257s255-116.39,255-257S397.61,0,257,0z M287,392c0,16.54-13.47,30-30,30
			c-16.54,0-30-13.46-30-30V240c0-16.54,13.46-30,30-30c16.53,0,30,13.46,30,30V392z M257,150c-16.54,0-30-13.46-30-30
			s13.46-30,30-30c16.53,0,30,13.46,30,30S273.53,150,257,150z"
      fill="currentColor"
    />
  </svg>
);

const User = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const Book = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const Exit = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const CloseSmall = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
  </svg>
);

const Warning = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Square = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);

const Excel = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 384 512"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      fill="currentColor"
      d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"
    ></path>
  </svg>
);

const Bell = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const Inbox = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
  </svg>
);

const MoreVertical = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const Icons = {
  InfoCircle,
  CheckCircle,
  ErrorCircle,
  StarCircle,
  Agent,
  AgentFilled,
  Edit,
  EditBox,
  Delete,
  Close,
  Check,
  Circle,
  Search,
  Download,
  Eye,
  EyeOff,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Link,
  Key,
  Headset,
  Refresh,
  Clock,
  Filter,
  PlusCircle,
  Unlocked,
  Locked,
  Scheduled,
  Attendance,
  Delegated,
  Pdf,
  Comment,
  Attachment,
  InfoFilled,
  User,
  Book,
  Exit,
  Play,
  CloseSmall,
  Warning,
  Square,
  Excel,
  Bell,
  Inbox,
  MoreVertical,
};

export default Icons;
