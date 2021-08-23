import HireRemoteLayout from "@components/layout/hireRemoteLayout";
import hireRemoteForm from "@json/hire-remote-form.json";

export default function Hireremotely() {
  return (
    <HireRemoteLayout>
      <div className="card get-started my-3 p-4">
        <h3> {hireRemoteForm.start.title}</h3>
        <form>
          {hireRemoteForm.start.content.map((input, index) => (
            <div key={index} className="input">
              <div className="label">{input.label}</div>
              <input className="w-100" placeholder={input.placeholder} />
              <p>{input.note}</p>
            </div>
          ))}
        </form>
      </div>
    </HireRemoteLayout>
  );
}
