<template>
  <!-- component -->
  <section
    id="tech"
    class="flex min-h-screen items-center justify-center px-[5rem]"
  >
    <div class="container mx-auto">
      <div
        class="relative flex items-center pl-4 -ml-4 animate-left-title group scroll-mt-40"
      >
        <h2 class="text-5xl font-bold leading-snug !mb-2 text-cyan-400">
          {{ $t("tech.title") }}
        </h2>
      </div>
      <p
        class="animate-slideUp-subtitle block antialiased font-sans text-base font-light leading-relaxed text-inherit !mb-4 !text-white"
      >
        {{ $t("tech.subtitle") }}
      </p>
      <div
        class="grid grid-cols-2 gap-6 mt-8 md:grid-cols-4"
        id="frameworks-integration"
      >
        <!-- html -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              width="90"
              height="90"
              viewBox="0 0 32 32"
              fill="none"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
              <path
                d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                fill="white"
              />
            </svg>
          </span>
        </span>
        <!-- css -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              width="90"
              height="90"
              viewBox="0 0 32 32"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
              <path
                d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                fill="white"
              />
            </svg>
          </span>
        </span>
        <!-- javascript -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              width="90"
              height="90"
              viewBox="0 0 256 256"
              version="1.1"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"
                  fill="#F7DF1E"
                ></path>
                <path
                  d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                  fill="#000000"
                ></path>
                <path
                  d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </span>
        </span>
        <!-- Tailwind -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              width="90"
              height="90"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                style="fill: #44a8b3"
              />
            </svg>
          </span>
        </span>
        <!-- Laravel -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              width="90px"
              height="90px"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              viewBox="-4 0 264 264"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M255.855641,59.619717 C255.950565,59.9710596 256,60.3333149 256,60.6972536 L256,117.265345 C256,118.743206 255.209409,120.108149 253.927418,120.843385 L206.448786,148.178786 L206.448786,202.359798 C206.448786,203.834322 205.665123,205.195421 204.386515,205.937838 L105.27893,262.990563 C105.05208,263.119455 104.804608,263.201946 104.557135,263.289593 C104.464333,263.320527 104.376687,263.377239 104.278729,263.403017 C103.585929,263.58546 102.857701,263.58546 102.164901,263.403017 C102.051476,263.372083 101.948363,263.310215 101.840093,263.26897 C101.613244,263.186479 101.376082,263.1143 101.159544,262.990563 L2.07258227,205.937838 C0.7913718,205.201819 0,203.837372 0,202.359798 L0,32.6555248 C0,32.2843161 0.0515567729,31.9234187 0.144358964,31.5728326 C0.175293028,31.454252 0.24747251,31.3459828 0.288717928,31.2274022 C0.366053087,31.0108638 0.438232569,30.7891697 0.55165747,30.5880982 C0.628992629,30.4540506 0.742417529,30.3457814 0.83521972,30.2220451 C0.953800298,30.0570635 1.06206952,29.8869261 1.20127281,29.7425672 C1.31985339,29.6239866 1.4745237,29.5363401 1.60857131,29.4332265 C1.75808595,29.3094903 1.89213356,29.1754427 2.06227091,29.0774848 L2.06742659,29.0774848 L51.6134853,0.551122364 C52.8901903,-0.183535768 54.4613221,-0.183535768 55.7380271,0.551122364 L105.284086,29.0774848 L105.294397,29.0774848 C105.459379,29.1805983 105.598582,29.3094903 105.748097,29.4280708 C105.882144,29.5311844 106.031659,29.6239866 106.15024,29.7374115 C106.294599,29.8869261 106.397712,30.0570635 106.521448,30.2220451 C106.609095,30.3457814 106.727676,30.4540506 106.799855,30.5880982 C106.918436,30.7943253 106.985459,31.0108638 107.06795,31.2274022 C107.109196,31.3459828 107.181375,31.454252 107.212309,31.5779883 C107.307234,31.9293308 107.355765,32.2915861 107.356668,32.6555248 L107.356668,138.651094 L148.643332,114.878266 L148.643332,60.6920979 C148.643332,60.3312005 148.694889,59.9651474 148.787691,59.619717 C148.823781,59.4959808 148.890804,59.3877116 148.93205,59.269131 C149.014541,59.0525925 149.08672,58.8308984 149.200145,58.629827 C149.27748,58.4957794 149.390905,58.3875102 149.478552,58.2637739 C149.602288,58.0987922 149.705401,57.9286549 149.84976,57.7842959 C149.968341,57.6657153 150.117856,57.5780688 150.251903,57.4749553 C150.406573,57.351219 150.540621,57.2171714 150.705603,57.1192136 L150.710758,57.1192136 L200.261973,28.5928511 C201.538395,27.8571345 203.110093,27.8571345 204.386515,28.5928511 L253.932573,57.1192136 C254.107866,57.2223271 254.241914,57.351219 254.396584,57.4697996 C254.525476,57.5729132 254.674991,57.6657153 254.793572,57.7791402 C254.93793,57.9286549 255.041044,58.0987922 255.16478,58.2637739 C255.257582,58.3875102 255.371007,58.4957794 255.443187,58.629827 C255.561767,58.8308984 255.628791,59.0525925 255.711282,59.269131 C255.757683,59.3877116 255.824707,59.4959808 255.855641,59.619717 Z M247.740605,114.878266 L247.740605,67.8378666 L230.402062,77.8192579 L206.448786,91.6106946 L206.448786,138.651094 L247.745761,114.878266 L247.740605,114.878266 Z M198.194546,199.97272 L198.194546,152.901386 L174.633101,166.357704 L107.351512,204.757188 L107.351512,252.27191 L198.194546,199.97272 Z M8.25939501,39.7961379 L8.25939501,199.97272 L99.0921175,252.266755 L99.0921175,204.762344 L51.6392637,177.906421 L51.6237967,177.89611 L51.603174,177.885798 C51.443348,177.792996 51.3093004,177.658949 51.1597857,177.545524 C51.0308938,177.44241 50.8813791,177.359919 50.7679542,177.246494 L50.7576429,177.231027 C50.6235953,177.102135 50.5307931,176.942309 50.4173682,176.79795 C50.3142546,176.658747 50.1905184,176.540167 50.1080276,176.395808 L50.1028719,176.380341 C50.0100697,176.22567 49.9533572,176.040066 49.8863334,175.864773 C49.8193096,175.710103 49.7316631,175.565744 49.6904177,175.400762 L49.6904177,175.395606 C49.6388609,175.19969 49.6285496,174.993463 49.6079269,174.792392 C49.5873041,174.637722 49.5460587,174.483051 49.5460587,174.328381 L49.5460587,174.31807 L49.5460587,63.5689658 L25.5979377,49.7723734 L8.25939501,39.8012935 L8.25939501,39.7961379 Z M53.6809119,8.89300821 L12.3994039,32.6555248 L53.6706006,56.4180414 L94.9469529,32.6503692 L53.6706006,8.89300821 L53.6809119,8.89300821 Z M75.1491521,157.19091 L99.0972731,143.404629 L99.0972731,39.7961379 L81.7587304,49.7775291 L57.8054537,63.5689658 L57.8054537,167.177457 L75.1491521,157.19091 Z M202.324244,36.934737 L161.047891,60.6972536 L202.324244,84.4597702 L243.59544,60.6920979 L202.324244,36.934737 Z M198.194546,91.6106946 L174.24127,77.8192579 L156.902727,67.8378666 L156.902727,114.878266 L180.850848,128.664547 L198.194546,138.651094 L198.194546,91.6106946 Z M103.216659,197.616575 L163.759778,163.052915 L194.023603,145.781396 L152.778185,122.034346 L105.289242,149.374903 L62.0073307,174.292291 L103.216659,197.616575 Z"
                    fill="#FF2D20"
                  ></path>
                </g>
              </g>
            </svg>
          </span>
        </span>
        <!-- vue -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              width="90"
              height="90"
              viewBox="0 0 64 64"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
            >
              <rect
                id="Icons"
                x="-512"
                y="-128"
                width="1280"
                height="800"
                style="fill: none"
              />
              <!-- Tambahkan path untuk logo Vue.js -->
              <path
                d="M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z"
                style="fill: #435466"
              />
              <path
                d="M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z"
                style="fill: #4dba87"
              />
            </svg>
          </span>
        </span>
        <!-- node js -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js logo.svg"
              height="361"
              width="590"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
            />
          </span>
        </span>
        <!-- sequelize -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              width="90px"
              height="90px"
              class="-mx-4 transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              xmlns:serif="http://www.serif.com/"
              style="
                fill-rule: evenodd;
                clip-rule: evenodd;
                stroke-linejoin: round;
                stroke-miterlimit: 2;
              "
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect
                  id="Icons"
                  x="-1088"
                  y="-64"
                  width="1280"
                  height="800"
                  style="fill: none"
                ></rect>
                <g id="Icons1" serif:id="Icons">
                  <g id="Strike"></g>
                  <g id="H1"></g>
                  <g id="H2"></g>
                  <g id="H3"></g>
                  <g id="list-ul"></g>
                  <g id="hamburger-1"></g>
                  <g id="hamburger-2"></g>
                  <g id="list-ol"></g>
                  <g id="list-task"></g>
                  <g id="trash"></g>
                  <g id="vertical-menu"></g>
                  <g id="horizontal-menu"></g>
                  <g id="sidebar-2"></g>
                  <g id="Pen"></g>
                  <g id="Pen1" serif:id="Pen"></g>
                  <g id="clock"></g>
                  <g id="external-link"></g>
                  <g id="hr"></g>
                  <g id="info"></g>
                  <g id="warning"></g>
                  <g id="plus-circle"></g>
                  <g id="minus-circle"></g>
                  <g id="vue"></g>
                  <g id="cog"></g>
                  <g id="logo"></g>
                  <g id="radio-check"></g>
                  <g id="eye-slash"></g>
                  <g id="eye"></g>
                  <g id="toggle-off"></g>
                  <g id="shredder"></g>
                  <g
                    id="spinner--loading--dots-"
                    serif:id="spinner [loading, dots]"
                  ></g>
                  <g id="react">
                    <circle
                      cx="32.001"
                      cy="31.955"
                      r="4.478"
                      style="fill: #00d8ff"
                    ></circle>
                    <path
                      d="M32.33,22.516c7.635,0.052 15.965,0.609 21.683,5.708c0.168,0.15 0.33,0.306 0.488,0.467c1.349,1.375 2.054,3.595 0.965,5.422c-2.234,3.751 -7.23,5.387 -12.067,6.394c-7.234,1.506 -14.798,1.518 -22.029,0.192c-4.161,-0.764 -8.416,-2.103 -11.373,-4.904c-1.151,-1.09 -2.135,-2.524 -1.981,-4.12c0.25,-2.582 2.727,-4.239 4.812,-5.361c5.791,-3.116 12.847,-3.813 19.502,-3.798Zm-0.554,1.173c-7.224,0.049 -15.043,0.51 -20.621,5.129c-0.195,0.161 -0.383,0.33 -0.564,0.507c-0.117,0.114 -0.23,0.233 -0.339,0.355c-0.979,1.1 -1.316,2.867 -0.392,4.188c0.93,1.329 2.342,2.288 3.796,3.07c5.438,2.924 11.864,3.443 18.129,3.465c6.343,0.023 12.884,-0.555 18.487,-3.452c2.232,-1.155 4.744,-2.851 4.655,-5.035c-0.082,-2.004 -2.036,-3.242 -3.499,-4.126c-0.396,-0.239 -0.803,-0.46 -1.216,-0.668c-5.562,-2.787 -12.08,-3.447 -18.436,-3.433Z"
                      style="fill: #00d8ff"
                    ></path>
                    <path
                      d="M42.115,10.703c2.793,0.071 4.24,3.429 4.431,5.909c0.038,0.493 0.052,0.988 0.046,1.483c-0.006,0.536 -0.035,1.072 -0.082,1.606c-0.589,6.612 -3.608,12.909 -7.163,18.724c-3.477,5.688 -7.717,11.36 -13.485,13.996c-1.907,0.872 -4.175,1.41 -5.863,0.437c-2.314,-1.333 -2.567,-4.451 -2.524,-6.816c0.011,-0.581 0.049,-1.162 0.109,-1.741c0.889,-8.56 5.228,-16.669 10.658,-23.655c3.168,-4.076 6.937,-8.119 11.632,-9.583c0.739,-0.231 1.326,-0.371 2.241,-0.36Zm-0.134,1.172c-3.279,0.052 -6.223,2.482 -8.83,5.007c-6.854,6.637 -11.905,15.464 -13.937,24.721c-0.157,0.717 -0.289,1.439 -0.386,2.166c-0.075,0.563 -0.13,1.129 -0.159,1.697c-0.023,0.452 -0.031,0.905 -0.017,1.358c0.01,0.354 0.033,0.708 0.072,1.06c0.029,0.269 0.068,0.537 0.117,0.803c0.037,0.197 0.08,0.393 0.13,0.588c0.041,0.158 0.087,0.315 0.139,0.471c0.409,1.233 1.463,2.411 2.878,2.45c3.301,0.09 6.409,-2.317 9.096,-4.933c4.717,-4.591 8.232,-10.36 10.978,-16.424c2.216,-4.896 4.243,-10.218 3.111,-15.607c-0.043,-0.204 -0.093,-0.406 -0.15,-0.606c-0.047,-0.163 -0.1,-0.324 -0.158,-0.483c-0.44,-1.199 -1.475,-2.271 -2.884,-2.268Z"
                      style="fill: #00d8ff"
                    ></path>
                    <path
                      d="M22.109,10.747c3.564,0.069 6.765,2.488 9.607,5.197c5.186,4.943 9.011,11.231 11.913,17.849c2.248,5.127 4.316,10.882 2.478,16.292c-0.579,1.705 -2.044,3.265 -3.997,3.305c-3.581,0.072 -6.9,-2.532 -9.78,-5.335c-7.225,-7.034 -12.589,-16.32 -14.427,-26.168c-0.132,-0.704 -0.237,-1.414 -0.309,-2.127c-0.059,-0.582 -0.096,-1.167 -0.106,-1.752c-0.008,-0.472 0.002,-0.944 0.035,-1.414c0.022,-0.314 0.054,-0.626 0.097,-0.937c0.041,-0.292 0.093,-0.583 0.158,-0.871c0.043,-0.191 0.091,-0.38 0.146,-0.568c0.539,-1.843 1.941,-3.485 4.185,-3.471Zm-0.135,1.173c-2.087,0.046 -3.042,2.507 -3.234,4.234c-0.039,0.354 -0.063,0.711 -0.074,1.068c-0.014,0.456 -0.008,0.913 0.015,1.369c0.328,6.599 3.278,12.979 6.838,18.821c3.352,5.5 7.4,10.978 12.968,13.794c1.608,0.813 3.562,1.452 4.951,0.684c1.742,-0.964 1.956,-3.261 2.049,-4.973c0.025,-0.466 0.028,-0.934 0.013,-1.401c-0.018,-0.586 -0.064,-1.171 -0.133,-1.753c-0.642,-5.437 -3.05,-10.582 -5.816,-15.444c-3.442,-6.048 -7.659,-12.076 -13.627,-15.225c-1.236,-0.652 -2.574,-1.185 -3.95,-1.174Z"
                      style="fill: #00d8ff"
                    ></path>
                  </g>
                  <g id="check-selected"></g>
                  <g id="turn-off"></g>
                  <g id="code-block"></g>
                  <g id="user"></g>
                  <g id="coffee-bean"></g>
                  <g id="coffee-beans">
                    <g id="coffee-bean1" serif:id="coffee-bean"></g>
                  </g>
                  <g id="coffee-bean-filled"></g>
                  <g id="coffee-beans-filled">
                    <g id="coffee-bean2" serif:id="coffee-bean"></g>
                  </g>
                  <g id="clipboard"></g>
                  <g id="clipboard-paste"></g>
                  <g id="clipboard-copy"></g>
                  <g id="Layer1"></g>
                </g>
              </g>
            </svg>
          </span>
        </span>
        <!-- mysql -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              width="120"
              height="120"
              viewBox="-18.458 -22.75 191.151 191.151"
              class="-mx-4 -mt-4 transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-18.458 6.58h191.151v132.49H-18.458V6.58z"
                fill="none"
              />
              <path
                d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z"
                fill="#5d87a1"
              />
              <path
                d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534"
                fill="#f8981d"
              />
              <path
                d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86"
                fill="#5d87a1"
              />
              <path
                d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z"
                fill="#f8981d"
              />
            </svg>
          </span>
        </span>
        <!-- postgres -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <path
                fill="#6e78ac"
                d="M83.242,60.482c-6.349,1.924-9.957-0.415-9.957-0.415s-0.006,0-0.007,0l-0.394-0.488	c0.131-0.117,0.264-0.242,0.4-0.381l0.019-0.017l-0.001-0.002c5.639-5.753,15.838-29.562,9.749-37.378	c-8.553-10.979-25.66-5.745-25.66-5.745l0.064,0.183c-4.889-1.666-9.947-1.625-13.851,0.838c-0.661,0.417-1.273,0.873-1.844,1.357	l0.014-0.187c0,0-8.149-3.213-15.851-2.383c-7.954,0.857-12.319,6.83-12.319,15.83s6.17,30.553,10.17,34.553s6,2,7,1	c0.896-0.896,6.588-7.387,7.771-8.738c2.143,1.4,4.575,1.743,5.983,1.748c-0.184,0.991-1.31,4.988-7.562,5.714	c-2.809,0.447-1.915,2.298,0.128,2.872c2.002,0.563,8.415,1.967,12.335-3.509c-0.052,3.397-0.183,9.771,0.304,15.126	c0.574,6.319,3.983,8.376,6.511,8.713c7.878,1.048,10.628-4.308,11.394-6.702c0.702-2.194,1.839-10.809,2.213-16.588l0.503-0.089	l-0.004,0.05c8.106,1.277,12.734-1.66,14.362-3.191C86.338,61.12,85.349,59.844,83.242,60.482z"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M39,58c0,0-6.75,7.562-7.75,8.562s-3,3-7-1	s-10.25-25-10.25-34s4.234-15.518,12.188-16.375C33.89,14.358,42,18,42,18"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M71.213,56.947	c2.681-2.106,2.968-8.713,2.489-12.734c-0.479-4.021,0.331-6.392,0.235-11.275C70.682,19.629,53.612,10.839,43.75,17.062	s-8.854,20.137-8.375,24.062s-2.444,6.539-0.625,12.188s7.644,6.698,10.037,6.698c2.394,0,4.883,0.957,4.883,3.543	s-0.287,10.34,0.287,16.66c0.574,6.319,3.983,8.376,6.511,8.713c7.878,1.048,10.628-4.309,11.394-6.702s2.052-12.439,2.298-18.096	c0.191-4.404,3.351-4.309,3.351-4.309s3.608,2.339,9.957,0.415c2.106-0.638,3.096,0.638,1.468,2.17	c-1.628,1.532-6.017,4.56-14.124,3.283"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M74.085,33.617c0,0-6.523-2.242-8.71,2.195	c-1.893,3.841,3.987,18.294,8.199,23.592"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M34.574,36.617c0,0,7.652-4.612,11.801-1.867	S48.936,48.106,47.149,52c-1.787,3.894-2.362,7.787-2.362,7.787s-0.447,5.106-7.596,5.936c-2.809,0.447-1.915,2.298,0.128,2.872	c2.043,0.574,8.681,2.043,12.574-3.83"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M57.617,15.809	c0,0,17.356-4.174,25.383,5.629c6.553,8.003-4.766,33.882-10.191,38.158"
              ></path>
              <path
                fill="#1f212b"
                d="M69.154,38.037c-1.652,0.168-3.423-1.939-0.096-2.346C72.177,35.31,71.323,37.817,69.154,38.037z"
              ></path>
              <path
                fill="#1f212b"
                d="M43.223,38.848c-1.824-0.23-3.212-2.945,0.481-2.556C47.165,36.657,45.619,39.151,43.223,38.848z"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M39.492,27.447	c-0.236,0.688-0.451,1.425-0.641,2.213"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M47.808,18.479	c-2.789,0.876-5.771,2.939-7.731,7.456"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M55.064,18.298	c0,0-2.11-0.621-4.851-0.319"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M20.148,21.817	c-1.921,2.074-3.369,5.451-3.173,10.945"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M28.319,18.553	c0,0-3.417-0.258-6.503,1.833"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M53.549,82.6	c0.649,1.702,1.858,3.266,4.1,3.613"
              ></path>
              <path
                fill="none"
                stroke="#1f212b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M52.83,77.596	c0,0-0.095,1.358,0.186,3.001"
              ></path>
            </svg>
          </span>
        </span>
        <!-- vscode -->
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#29b6f6"
                d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
              ></path>
              <path
                fill="#0277bd"
                d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
              ></path>
              <path
                fill="#0288d1"
                d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
              ></path>
            </svg>
          </span>
        </span>
        <span
          class="group grid animate-tech backdrop-blur-sm transition duration-700 w-full min-w-[7rem] transform place-items-center rounded-xl border border-blue-gray-50 bg-cyan-800 shadow-lg sm:rounded-3xl sm:hover:border-cyan-400 bg-clip-padding bg-opacity-55 sm:hover:shadow-cyan-400 px-3 py-2 hover:scale-105 sm:border-cyan-50 border-cyan-400 hover:bsm:g-opacity-25"
        >
          <span class="grid w-24 h-24 my-6 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
              ></path>
            </svg>
          </span>
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    setupIntersectionObserver(targetClass) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, options);

      const targets = document.querySelectorAll(targetClass);
      targets.forEach((target) => {
        observer.observe(target);
      });
    },
  },
  mounted() {
    this.setupIntersectionObserver(".animate-tech"),
      this.setupIntersectionObserver(".animate-left-title"),
      this.setupIntersectionObserver(".animate-slideUp-subtitle");
  },
};
</script>
<style>
.animate-tech {
  opacity: 0;
  transition: opacity 2s;
}
.animate-left-title {
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 1s, transform 1s;
}
.animate-slideUp-subtitle {
  opacity: 0;
  transform: translatey(50%);
  transition: opacity 2s, transform 1s;
}
</style>
