import { FallBackImage } from "@components/Cards";
import Logo from "@components/Logo";

export default function PreviewCard({ data }) {
  const highlightPost = data?.highlightPost ? "yellow" : "";

  return (
    <>
      <div
        className={`${highlightPost} content row align-items-center mx-3 py-2`}
      >
        <div className="col-2">
          {data?.company ? (
            <div className="letter-logo">{FallBackImage(data?.company)}</div>
          ) : (
            <Logo color="black" />
          )}
        </div>
        <div className="company col-8 d-flex align-items-center justify-content-between">
          <div className="col-4">
            <h3>{data?.company.length > 0 ? data?.company : "Company"}</h3>
            <h3 className="font-weight-bold">
              {data?.position.length > 0 ? data?.position : "Position"}
            </h3>
            <h4 className="location">
              <span>
                {" "}
                {data?.location.length > 0 ? data?.location : "Location"}
              </span>
            </h4>
          </div>
          <div className="col-8 d-flex">
            {data?.primaryTag && (
              <div className="role-tag">{data?.primaryTag}</div>
            )}
            {data?.tags &&
              data?.tags
                .split(",")
                .slice(0, 3)
                .map((item, index) => (
                  <div key={index} className="role-tag">
                    {item}
                  </div>
                ))}
          </div>
        </div>
        {data?.stickPost && <div className="col-2">📌 {data?.stickPost}</div>}
      </div>
      <style jsx>{`
        .yellow.content {
          background-color: #fff9c9;
        }
        footer .content {
          border-radius: 10px;
        }
        .role-tag {
          border: 2px solid #0f1115;
          color: #0f1115;
          margin: 0px 5px;
          padding: 0.33em;
          border-radius: 6px;
        }
        .company h3 {
          font-size: 20px;
        }
        .company h4 {
          font-size: 20px;
        }
        .company .location span {
          background-color: #ddd;
          border-radius: 5px;
          color: white;
          padding: 5px;
          font-size: 16px;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .content {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
