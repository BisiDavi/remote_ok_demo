import colors from "@utils/colors";
import { FallBackImage } from "@imports/.";
import Logo from "@components/Logo";

export default function PreviewCard({ dark, data }) {
  const highlightPost = data?.highlightPost ? "highlight" : "";
  const themeState = dark ? "#fff" : "black";
  const tagStyle = dark ? "dark" : "light";

  return (
    <>
      <div className={`${highlightPost} content`}>
        <div className="logoContainer">
          {data?.company ? (
            <div className="letter-logo">
              <FallBackImage
                themeStyle={tagStyle}
                companyName={data?.company}
              />
            </div>
          ) : (
            <Logo color={themeState} />
          )}
        </div>
        <div className="company">
          <div className="text">
            <h2>{data?.company.length > 0 ? data?.company : "Company"}</h2>
            <h3 className="position">
              {data?.position.length > 0 ? data?.position : "Position"}
            </h3>
            <h4 className="location">
              <span>
                {" "}
                {data?.location.length > 0 ? data?.location : "Location"}
              </span>
            </h4>
          </div>
          <div className="tag-group">
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
          <div className="stickyPost">📌 {data?.stickPost}</div>
        )}
      </div>
      <style jsx>{`
        .role-tag {
          color: #0f1115;
          margin: 0px 5px;
          padding: 0.33em;
          border-radius: 6px;
        }
        .light {
          color: ${colors.black};
          border: 2px solid ${colors.black};
        }
        .dark {
          color: ${colors.white};
          border: 2px solid ${colors.white};
        }
        .company {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 60%;
          margin-left: 30px;
        }        
        .tag-group {
          display: flex;
          align-items: center;
        }

        .highlight.content {
          background-color: #c13a3a;
        }

        .content {
          display: flex;
          align-items: center;
          padding: 0px 40px;
          border-radius: 0px;
          align-items-center;
        }
        
        .company {
          align-items: center;
        }
         .company h2 {
          font-size: 25px;
        }
      
        .company h4 ,.company h3{
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

        @media (max-width: 1024px) {         
          .company h3 {
              font-size: 14px;
          }
          .company h2 {
              font-size: 16px;
          }

          .role-tag {
              font-size: 12px;
          } 
        }
        @media (max-width: 768px) {
          .company {
              width: 65%;
          }

          .highlight.content {
              width: 100%;
              padding: 0px 10px;
          }
        }
        @media (max-width: 500px) {
          .company {
            flex-direction: column;
            margin-bottom: 10px;
            padding: 0px;
            width: 100%;
            margin: 0px;
            display: flex;
            align-items: flex-start;
          }
          .content {
            flex-direction: column;
            padding: 0px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            margin: 0px;
            padding:15px;
          }

         .logoContainer{
            height: fit-content;
            margin-bottom: 0px;
            margin-top: 10px;
         }        
         .tag-group {
            display: flex;
            flex-direction: row;
            margin: 5px 0px;
            padding: 0px;
          }
          .text {
            width: 100%;
            height:unset;
          }
          .company h4, 
          .company h3 {
            margin: 10px 0px;
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
