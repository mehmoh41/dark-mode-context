import React from "react";

export default function Hero() {
  return (
    <>
      <main>
        <h2>
          Get the <span className="right-job">right job</span> you deserve
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          quod?
        </p>
      </main>

      <form action="">
        <div className="main-container">
          <div className="container input1">
            <svg
              version="1.1"
              id="Capa_1"
              width="16px"
              height="16px"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 487.95 487.95"
            >
              <g>
                <g>
                  <path
                    d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
              c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
              c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
                  />
                </g>
              </g>
            </svg>
            <input type="text" placeholder="job title or keyword" />
          </div>
          <div className="border"></div>
          <div className="container input2">
            <svg
              version="1.1"
              id="Capa_1"
              width="16px"
              height="16px"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 264.018 264.018"
            >
              <g>
                <path
                  d="M132.009,0c-42.66,0-77.366,34.706-77.366,77.366c0,11.634,2.52,22.815,7.488,33.24c0.1,0.223,0.205,0.442,0.317,0.661
          l58.454,113.179c2.146,4.154,6.431,6.764,11.106,6.764c4.676,0,8.961-2.609,11.106-6.764l58.438-113.148
          c0.101-0.195,0.195-0.392,0.285-0.591c5.001-10.455,7.536-21.67,7.536-33.341C209.375,34.706,174.669,0,132.009,0z
           M132.009,117.861c-22.329,0-40.495-18.166-40.495-40.495c0-22.328,18.166-40.494,40.495-40.494s40.495,18.166,40.495,40.494
          C172.504,99.695,154.338,117.861,132.009,117.861z"
                />
                <path
                  d="M161.81,249.018h-59.602c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h59.602c4.143,0,7.5-3.357,7.5-7.5
          C169.31,252.375,165.952,249.018,161.81,249.018z"
                />
              </g>
            </svg>
            <input type="text" placeholder="New York, USA" />
          </div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
