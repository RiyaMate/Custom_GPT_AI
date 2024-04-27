import Image from "next/image";
import Gallery from "./components/Gallery";
import { pressStart2P, sourceCodePro, instrumentSans } from "./styles/fonts";

export default function Home() {
  return (
    <div className="w-11/12 m-auto flex-col my-6">
      <h1 className={`text-center ${instrumentSans.className}`}>
        The Home of Your AI-JS Toolkit
      </h1>
      <div className="flex flex-row justify-start">
        <div className="flex flex-col items-start justify-center min-h-screen text-gray-800 py-4 px-4 sm:px-6 lg:px-8 w-6/12">
          <h2
            className={`w-full text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-left ${pressStart2P.className}`}
          >
            World Of AI
          </h2>
          <p
            className={`w-full mt-6 max-w-2xl text-center text-lg leading-7 sm:text-2xl sm:leading-9 sm:text-left lg:text-3xl ${instrumentSans.className}`}
          >
            <span className="font-bold">
            Artificial intelligence transforms how we interact with technology, automating complex tasks and providing new insights into data that was previously beyond human reach. By simulating human intelligence processes, AI opens up a world of possibilities, enhancing everything from everyday applications to sophisticated research and development initiatives.
            </span>
          
          </p>
        </div>
        {/* Gallery */}
        <Gallery />
      </div>
      <p
        className={`w-full mt-4 text-center text-10 leading-7 sm:text-2xl sm:leading-9 sm:text-center lg:text-3xl ${sourceCodePro.className}`}
      >
        Remember, this journey is yours. So let's{" "}
        <strong>roll up our sleeves, dive in, and start building</strong>. 🔨
      </p>
    </div>
  );
}
