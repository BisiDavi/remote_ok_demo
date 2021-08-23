import { Formik } from "formik";
import hireRemoteForm from "@json/hire-remote-form.json";

export default function HireRemotelyForm() {
  return (
    <div className="hire-remotely-form">
      <div className="card">
        <h3> {hireRemoteForm.start.title}</h3>
        <form>
          {hireRemoteForm.start.contents.map((content, index) => (
            <div key={index} className="input">
              <div className="label">{content.label}</div>
              <input className="w-100" placeholder={content.placeholder} />
              <p>{content.note}</p>
            </div>
          ))}
        </form>
      </div>
      <div className="card design-job">
        <h3>{hireRemoteForm.designJobPost.title}</h3>
        <form>
          {hireRemoteForm.designJobPost.contents.map((content, index) => (
            <div className="input checkbox-group" key={index}>
              <input type="checkbox" />
              <p>{content.text}</p>
              {content?.tag.map((tag, index) => (
                <div className="tag" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          ))}
        </form>
        <p>{hireRemoteForm.designJobPost.note}</p>
      </div>
      <div className="card job-details">
        <h3>{hireRemoteForm.jobDetails.title}</h3>
        <form>
          {hireRemoteForm.jobDetails.contents.map((content, index) => (
            <div className="input checkbox-group" key={index}>
              <input type="checkbox" />
              <p>{content.title}</p>
              <p>{content?.note}</p>
            </div>
          ))}
        </form>
      </div>
      <div className="card company">
        <h3>{hireRemoteForm.company.title}</h3>
        <form>
          {hireRemoteForm.company.contents.map((content, index) => (
            <div className="input checkbox-group" key={index}>
              <input type="checkbox" />
              <p>{content.title}</p>
              <p>{content?.note}</p>
            </div>
          ))}
        </form>
      </div>
      <div className="card feedback">
        <h3>{hireRemoteForm.feedback.title}</h3>
        <form>
          {hireRemoteForm.feedback.contents.map((content, index) => (
            <div className="input" key={index}>
              <p>{content.title}</p>
              <input placeholder={content.placeholder} />
            </div>
          ))}
        </form>
      </div>
      <style jsx>
        {`
          .card {
            margin: 30px 20px;
            padding: 20px;
            box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%),
              0 1px 1.5px 0 rgb(0 0 0 / 5%);
          }
          .card h3 {
            text-align: center;
            font-size: 12px;
            margin-top: px;
            width: fit-content;
            justify-content: center;
            display: flex;
            padding: 10px;
            margin: auto;
            background: #fff;
            margin-top: -30px;
            text-transform: uppercase;
            font-size: 14px;
            color: #444;
            font-weight: 800;
            padding-left: 7px;
            border-top: 1px solid #ddd;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            border-top-right-radius: 6px;
            border-top-left-radius: 6px;
          }
          .card input {
            appearance: none;
            padding: 14px;
            border: 1px solid #ddd;
            border-radius: 6px;
            margin: 10px 0px;
            font-size: 16px;
            background: #fbfbfb;
            border: none;
            box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%),
              0 1px 1.5px 0 rgb(0 0 0 / 5%);
          }
          .card .checkbox-group {
            display: flex;
            align-items: center;
          }
          .checkbox-group .tag {
            margin: 0px 10px;
            border: 1px solid red;
            padding: 5px 7px;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 800;
            color: red;
            font-family: "Nunito";
          }
          .checkbox-group .tag:first-child {
            border: 1px solid red;
            color: red;
          }
          .checkbox-group .tag:last-child {
            background-color: red;
            color: white;
          }
          .checkbox-group p {
            margin: 0px 10px;
          }
        `}
      </style>
    </div>
  );
}
