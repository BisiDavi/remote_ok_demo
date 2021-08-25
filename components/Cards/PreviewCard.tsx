import { FallBackImage } from "@imports/.";
import Logo from "@components/Logo";
import theme from "@styles/theme";

export default function PreviewCard({ dark, data }) {
  const highlightPost = data?.highlightPost ? "#c13a3a" : "";

  const themeState = dark ? "#fff" : "black";

  const tagStyle = dark ? theme.tags.dark : theme.tags.light;

  return (
    <>
      <div className={`${highlightPost} content row mx-3 py-2`}>
        <div className="col-2 logoContainer">
          {data?.company ? (
            <div className="letter-logo">
              <FallBackImage companyName={data?.company} />
            </div>
          ) : (
            <Logo color={themeState} />
          )}
        </div>
        <div className="company col-lg-8 col-12 d-flex  justify-content-between">
          <div className="col-lg-4 col-12 text">
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
          <div className="col-lg-8 col-12 d-flex">
            {data?.primaryTag && (
              <div className="role-tag">{data?.primaryTag}</div>
            )}
            {data?.tags &&
              data?.tags
                .split(",")
                .slice(0, 3)
                .map((item, index) => (
                  <div key={index} style={tagStyle} className="role-tag">
                    {item}
                  </div>
                ))}
          </div>
        </div>
        {data?.stickPost && (
          <div className="col-lg-2 col-12">📌 {data?.stickPost}</div>
        )}
      </div>
      <style jsx>{`
        .${highlightPost}.content {
          background-color: ${highlightPost};
        }
        .content {
          border-radius: 10px;
          align-items-center 
        }
        .role-tag {
          border: 2px solid #0f1115;
          color: #0f1115;
          margin: 0px 5px;
          padding: 0.33em;
          border-radius: 6px;
        }
        .company {
          align-items: center;
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

        @media (max-width: 500px) {
          .company {
            flex-direction: column;
            margin-bottom: 10px;
            align-items: flex-start;
          }
         .logoContainer{
           height:60px;
           margin-bottom:20px;
         }
         .text{
           height:60px;
         }
        }
      `}</style>
    </>
  );
}
