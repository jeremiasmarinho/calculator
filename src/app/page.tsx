import FormState from "./components/FormState";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-green-500">
      <div className="max-w-2xl w-full border p-6 rounded-md bg-white shadow-lg shadow-green-800">
        <FormState />
      </div>
    </div>
  );
}
