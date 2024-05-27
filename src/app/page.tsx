import Image from "next/image";
import FormState from "./components/FormState";
import fundo from "../app/components/background/fundo.jpg";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-[#0eae85]">
      <div className="flex">
        <Image
          src={fundo}
          width={500}
          height={500}
          alt="Imagem de fundo"
          className="relative min-h-max bg-cover bg-no-repeat bg-center shadow-lg shadow-green-800 rounded-md "
        />
        <div className="max-w-2xl w-full border p-6 rounded-md bg-white shadow-lg shadow-green-800">
          <FormState />
        </div>
      </div>
    </div>
  );
}
