/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import useTheme from "@hooks/useTheme";
import FormElement from "@components/Forms/formElements";
import { PostJobAction } from "@stores/postJobAction";
import axios from "axios";
import FormCard from "./FormCard";
import PreviewPost from "@components/Post/PreviewPost";
import hireRemoteForm from "@json/hire-remote-form.json";
import hireFormSchema from "./hireFormSchema";
import colors from "@utils/colors";
import Loading from "@components/Lazyload/loading";
import "react-toastify/dist/ReactToastify.css";

export default function HireForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { dark } = useTheme();
  const cardStyle = dark ? "dark" : "light";

  function submitForm(handleSubmit) {
    handleSubmit();
  }

  return (
    <>
      <ToastContainer position="top-left" closeOnClick draggable pauseOnHover />
      <Formik
        initialValues={{
          company: "",
          position: "",
          primaryTag: "",
          tags: [],
          location: "",
          showLogo: true,
          sendEmail: true,
          matchApplicant: true,
          highlightPost: false,
          stickPost: "",
          annualSalary: "",
          description: "",
          howToApply: "",
          apply_url: "",
          companyEmail: "",
          feedback: "",
        }}
        validationSchema={hireFormSchema}
        onSubmit={async (values) => {
          console.log("form submitted", values);
          setLoading(true);
          await axios
            .post("/api/job", values)
            .then((response) => {
              console.log("response", response);
              setLoading(false);
              toast.success(
                `job posted successfull, check the home page to view your job listing`
              );
              router.push("/");
            })
            .catch((error) => {
              console.error("error", error);
              setLoading(false);
            });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          dispatch(PostJobAction(values));
          return (
            <>
              {loading && <Loading />}
              {console.log("values", values)}
              <div className="hire-remotely-form">
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
                    {hireRemoteForm.designJobPost.contents.map(
                      (content, index) => (
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
                      )
                    )}
                    <p className="note">{hireRemoteForm.designJobPost.note}</p>
                  </FormCard>
                  <FormCard title={hireRemoteForm.jobDetails.title}>
                    {hireRemoteForm.jobDetails.contents.map(
                      (content, index) => (
                        <FormElement
                          key={index}
                          content={content}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          values={values}
                          errors={errors}
                          touched={touched}
                        />
                      )
                    )}
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
                <div className="preview-post">
                  <FormCard title={hireRemoteForm.preview.title}>
                    <PreviewPost />
                  </FormCard>
                </div>
              </div>
              <aside className={`aside ${cardStyle}`}>
                <h3>
                  This is a demo project inspired by{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://remoteok.io"
                  >
                    Remote OK{" "}
                  </a>
                  , Thank you <b>Remote OK</b> for making your api opensource.
                  You guys are <b>awesome</b>
                </h3>
                <b className="vistLink">
                  If you want to post a job, visit,{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://remoteok.io"
                  >
                    Remote OK{" "}
                  </a>
                </b>
                <h3>
                  Remote OK is{" "}
                  <b>the most popular remote jobs board in the world</b> trusted
                  by millions of remote workers and leading remote companies.
                </h3>
                <div className="reach-me">
                  <h6>Reach me via:</h6>
                  <div className="links">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://olubisi-david.vercel.app"
                    >
                      🌍 <b>Porfolio</b>
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/BisiDavi"
                    >
                      <img src="/github.svg" alt="github" />
                      <b>Github</b>
                    </a>
                  </div>
                </div>
                <div className="post-job">
                  <button
                    type="submit"
                    onClick={() => submitForm(handleSubmit)}
                  >
                    Post your demo job - Free
                  </button>
                  <p>Any posted job, shows only on this platform.</p>
                </div>
              </aside>
            </>
          );
        }}
      </Formik>
      <style jsx>
        {`
          .hire-remotely-form {
            width: 72%;
          }
          .checkbox-group {
            display: flex;
            align-items: center;
          }
          .preview-post {
            margin-bottom: 10%;
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

          .aside {
            display: flex;
            flex-direction: column;
            border-left: 1px solid #ddd;
            position: fixed;
            right: 0;
            top: 60px;
            width: 28%;
            height: 100%;
            padding: 10px 20px;
            background-color: white;
            z-index: 1;
          }
          .aside.light {
            background-color: ${colors.white};
            color: ${colors.black};
          }
          .aside.dark {
            color: ${colors.white};
            background-color: ${colors.brownish};
          }
          .reach-me {
            display: flex;
            align-items: center;
          }
          .reach-me h6 {
            font-size: 20px;
            font-family: "Nunito";
            margin: 0px;
          }
          .aside h3 {
            font-size: 20px;
            font-family: "Nunito";
            letter-spacing: 1px;
            line-height: 25px;
          }
          .aside h3 a {
            font-weight: bold;
          }
          .yellow.content {
            background-color: #fff9c9;
          }
          .post-job button {
            width: 100%;
            background-color: #ff4742;
            border: none;
            color: white;
            height: 60px;
            font-size: 24px;
            font-weight: bold;
            border-radius: 5px;
            margin: 20px 0px;
            cursor: pointer;
          }

          .links {
            display: flex;
            align-items: center;
          }
          .links a {
            margin: 0px 10px;
            display: flex;
            align-items: center;
          }
          .links a b {
            margin: 0px 5px;
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
    </>
  );
}
