import { useDispatch } from "react-redux";
import { Formik } from "formik";
import hireRemoteForm from "@json/hire-remote-form.json";
import FormElement from "@components/Forms/formElements";
import { PostJobAction } from "@stores/postJobAction";

export default function HireRemotelyForm() {
  const dispatch = useDispatch();

  return (
    <div className="hire-remotely-form">
      <Formik
        initialValues={{
          companyName: "",
          position: "",
          primaryTag: "",
          tags: "",
          location: "",
          showLogo: true,
          sendEmail: true,
          matchApplicant: true,
          highlistPost: false,
          stickPost: "",
          companyLogo: false,
          annualSalary: "",
          jobDescription: "",
          applyURL: "",
          companyTwitter: "",
          companyEmail: "",
          invoiceAddress: "",
          invoiceNotes: "",
          feedbackBox: "",
        }}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => {
          dispatch(PostJobAction(values));
          return (
            <form>
              <div className="card">
                <h3> {hireRemoteForm.start.title}</h3>
                {hireRemoteForm.start.contents.map((content, index) => (
                  <div key={index} className="input">
                    {
                      <FormElement
                        content={content}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}
                      />
                    }
                    <p className="note">{content.note}</p>
                  </div>
                ))}
              </div>
              <div className="card">
                <h3>{hireRemoteForm.designJobPost.title}</h3>
                {hireRemoteForm.designJobPost.contents.map((content, index) => (
                  <div className="checkbox-group" key={index}>
                    <FormElement
                      content={content}
                      values={values}
                      errors={errors}
                      handleChange={handleChange}
                      touched={touched}
                    />
                    {content?.tag.map((tag, index) => (
                      <div className={`tag tag-${index}`} key={index}>
                        {tag}
                      </div>
                    ))}
                  </div>
                ))}
                <p className="note">{hireRemoteForm.designJobPost.note}</p>
              </div>
              <div className="card">
                <h3>{hireRemoteForm.jobDetails.title}</h3>
                <div role="group" id="radio-group" className="radio-group d-flex flex-column">
                  {hireRemoteForm.jobDetails.contents.map((content, index) => (
                    <div className="checkbox-group" key={index}>
                      <FormElement
                        content={content}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}
                      />
                      <p>{content?.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3>{hireRemoteForm.company.title}</h3>
                {hireRemoteForm.company.contents.map((content, index) => (
                  <div className="input checkbox-group" key={index}>
                    <input type="checkbox" />
                    <h5>{content.title}</h5>
                    <p className="note">{content?.note}</p>
                  </div>
                ))}
              </div>
              <div className="card">
                <h3>{hireRemoteForm.feedback.title}</h3>

                {hireRemoteForm.feedback.contents.map((content, index) => (
                  <div className="input" key={index}>
                    <h5>{content.title}</h5>
                    <input placeholder={content.placeholder} />
                  </div>
                ))}
              </div>
            </form>
          );
        }}
      </Formik>
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
          .checkbox-group .tag-0 {
            border: 1px solid red;
            color: red;
          }
          .checkbox-group .tag-1 {
            background-color: red;
            color: white;
          }
          .checkbox-group p {
            margin: 0px 10px;
          }
          .card p.note {
            font-size: 12px;
            color: #888;
          }
          .card .label,
          .card h5 {
            font-size: 14px;
            font-weight: 800;
            font-family: "Nunito";
          }
        `}
      </style>
    </div>
  );
}
