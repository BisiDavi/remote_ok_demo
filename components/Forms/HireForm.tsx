import { useDispatch } from "react-redux";
import { Formik } from "formik";
import hireRemoteForm from "@json/hire-remote-form.json";
import FormElement from "@components/Forms/formElements";
import { PostJobAction } from "@stores/postJobAction";
import FormCard from "./FormCard";
import PreviewPost from "@components/post/PreviewPost";

export default function HireRemotelyForm() {
  const dispatch = useDispatch();

  return (
    <div className="hire-remotely-form">
      <Formik
        initialValues={{
          company: "",
          position: "",
          primaryTag: "",
          tags: "",
          location: "",
          showLogo: true,
          sendEmail: true,
          matchApplicant: true,
          highlistPost: false,
          stickPost: "",
          annualSalary: "",
          description: "",
          howToApply: "",
          apply_url: "",
          companyTwitter: "",
          companyEmail: "",
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
            <form className="remote-form">
              <FormCard title={hireRemoteForm.start.title}>
                {hireRemoteForm.start.contents.map((content, index) => (
                  <FormElement
                    key={index}
                    content={content}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                ))}
              </FormCard>
              <FormCard title={hireRemoteForm.designJobPost.title}>
                {hireRemoteForm.designJobPost.contents.map((content, index) => (
                  <div className="checkbox-group" key={index}>
                    <FormElement
                      content={content}
                      values={values}
                      errors={errors}
                      handleChange={handleChange}
                      touched={touched}
                    />
                    <div className="tags">
                      {content?.tag.map((tag, index) => (
                        <div className={`tag tag-${index}`} key={index}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <p className="note">{hireRemoteForm.designJobPost.note}</p>
              </FormCard>
              <FormCard title={hireRemoteForm.jobDetails.title}>
                {hireRemoteForm.jobDetails.contents.map((content, index) => (
                  <FormElement
                    key={index}
                    content={content}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                ))}
              </FormCard>
              <FormCard title={hireRemoteForm.company.title}>
                {hireRemoteForm.company.contents.map((content, index) => (
                  <FormElement
                    key={index}
                    content={content}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                ))}
              </FormCard>
              <FormCard title={hireRemoteForm.feedback.title}>
                {hireRemoteForm.feedback.contents.map((content, index) => (
                  <FormElement
                    key={index}
                    content={content}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                ))}
              </FormCard>
            </form>
          );
        }}
      </Formik>

      <FormCard title={hireRemoteForm?.preview.title}>
        <PreviewPost />
      </FormCard>

      <style jsx>
        {`
          .checkbox-group {
            display: flex;
            align-items: center;
          }
          form.remote-form {
            margin-bottom: 140px;
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
          .note {
            font-size: 12px;
            color: #888;
          }
          .tags {
            display: flex;
            align-items: center;
          }

          @media (max-width: 768px) {
            .companyLogos {
              width: 100%;
              grid-gap: 5px;
              margin: auto;
            }
            .companyLogos img {
              max-height: 50px;
              width: 80px;
            }
            .checkbox-group .tag {
              font-size: 9px;
            }
            .checkbox-group {
              flex-direction: column;
              align-items: flex-start;
              margin: 5px 0;
            }
          }

          @media (max-width: 768px) and (min-width: 480px) {
            .checkbox-group .tag {
              font-size: 11px;
            }
            .checkbox-group {
              flex-direction: row;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
}
