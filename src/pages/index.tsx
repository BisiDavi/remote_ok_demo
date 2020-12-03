import { Layout, NavMenu, HireInfoCard, WorldwideJobForm } from "../imports";

export default function Home(): JSX.Element {
  return (
    <Layout pageTitle="Remote Jobs in Programming, Design, Sales and More">
      <NavMenu />
      <>
        <div className="hire-remote mt-2 mb-3">
          <HireInfoCard />
        </div>

        <div className="justify-content-between d-flex mx-5">
          <h4>Today's remote jobs</h4>
          <WorldwideJobForm />
        </div>
      </>
    </Layout>
  );
}
