export default function Spinner() {
  return (
    <>
      <div className="spinner">
        <div className="loadingio-eclipse">
          <div className="ldio-rpinwye8j0b">
            <div></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .spinner {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            margin: auto;
            background-color: #52434357;
            top: 0;
            left: 0;
            position: fixed;
          }
          @keyframes ldio-rpinwye8j0b {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(180deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .ldio-rpinwye8j0b div {
            position: absolute;
            animation: ldio-rpinwye8j0b 1s linear infinite;
            width: 160px;
            height: 160px;
            top: 20px;
            left: 20px;
            border-radius: 50%;
            box-shadow: 0 4px 0 0 #e15b64;
            transform-origin: 80px 82px;
          }
          .loadingio-eclipse {
            width: 200px;
            height: 200px;
            display: inline-block;
            overflow: hidden;
          }
          .ldio-rpinwye8j0b {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(1);
            backface-visibility: hidden;
            transform-origin: 0 0; /* see note above */
          }
          .ldio-rpinwye8j0b div {
            box-sizing: content-box;
          }
        `}
      </style>
    </>
  );
}
