import HireRemoteLayout from "@components/layout/hireRemoteLayout";
import hireRemoteForm from "@json/hire-remote-form.json";

export default function Hireremotely() {
  return (
    <HireRemoteLayout>
      <div className="card get-started my-3 p-4">
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
            <div className="input" key={index}>
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
      <div className="card job-details my-3">
        <h3>{hireRemoteForm.jobDetails.title}</h3>
        <form>
          {hireRemoteForm.jobDetails.contents.map((content, index) => (
            <div className="input" key={index}>
              <input type="checkbox" />
              <p>{content.title}</p>
              <p>{content?.note}</p>
            </div>
          ))}
        </form>
      </div>
      <div className="card company my-3">
        <h3>{hireRemoteForm.company.title}</h3>
        <form>
          {hireRemoteForm.company.contents.map((content, index) => (
            <div className="input" key={index}>
              <input type="checkbox" />
              <p>{content.title}</p>
              <p>{content?.note}</p>
            </div>
          ))}
        </form>
      </div>
      <div className="card feedback my-3">
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
    </HireRemoteLayout>
  );
}
