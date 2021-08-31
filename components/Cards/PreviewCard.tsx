import colors from "@utils/colors";
import { FallBackImage } from "@imports/.";
import Logo from "@components/Logo";

export default function PreviewCard({ dark, data }) {
  const highlightPost = data?.highlightPost ? "highlight" : "";
  console.log("data", data);

  const themeState = dark ? "#fff" : "black";

  const tagStyle = dark ? "dark" : "light";

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
        <div className="company col-lg-8 col-12 flex  justify-content-between">
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
          <div className="col-lg-8 col-12 flex tag-group">
            {data?.primaryTag && (
              <div className={`role-tag ${tagStyle}`}>{data?.primaryTag}</div>
            )}
            {data?.tags &&
              data?.tags
                .split(",")
                .slice(0, 3)
                .map((item, index) => (
                  <div key={index} className={`role-tag ${tagStyle}`}>
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
          .role-tag {
            border: 2px solid #0f1115;
            color: #0f1115;
            margin: 0px 5px;
            padding: 0.33em;
            border-radius: 6px;
          }
          .light: {
            color: ${colors.black};
            border: 2px solid ${colors.black};
          }
          .dark: {
            color: ${colors.white};
            border: 2px solid ${colors.white};
          }

        .highlight.content {
          background-color: #c13a3a;
        }
        .content {
          border-radius: 10px;
          align-items-center 
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
            margin: auto;
            align-items: center;
          }
         .logoContainer{
            height: 60px;
            margin-bottom: 20px;
            margin-top: -15px;
         }
         .text{
           height:60px;
         }
         .tag-group {
            flex-flow: inherit;
            margin-top: 0px;
          }
          .role-tag {
            justify-content: center;
            margin: 5px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
