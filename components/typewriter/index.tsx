import Typewriter from "typewriter-effect";

const FormTypewriterEffect = (): any => {
  return (
    <div className="input-placeholder">
      <Typewriter
        options={{
          strings: [
            "android",
            "react native",
            "sass",
            "api",
            "wordpress",
            "finance",
            "typescript",
            "node",
            "ecommerce",
            "machine learning",
            "ruby on rails",
            "serverless",
            "vue",
            "angular",
            "redux",
            "go",
            "dba",
            "scala",
            "consulting",
            "back end",
            "developer",
            "laravel",
            "recruit",
            "mysql",
            "orm",
            "graphql",
            "algorithms",
            "figma",
            "phpunit",
            "django",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default FormTypewriterEffect;
