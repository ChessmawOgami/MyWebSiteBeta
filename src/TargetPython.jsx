import { FaPython } from "react-icons/fa";
export function TargetPython() {
  return (
    <div className="hover:">
      <div className="text-white bg-black rounded-lg p-5 m-8 float-none justify-center text-center border-solid border-2 border-yellow-500 shadow-lg shadow-yellow-500/50">
        <div className="float-none mx-32 m-5">
          <FaPython size={100} />
        </div>
        <p>
          Python is a widely-used general-purpose, high-level programming
          language. It was initially designed by Guido van Rossum in 1991 and
          developed by Python Software Foundation. It was mainly developed for
          emphasis on code readability, and its syntax allows programmers to
          express concepts in fewer lines of code.
        </p>
      </div>
    </div>
  );
}
