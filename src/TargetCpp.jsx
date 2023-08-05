import { SiCplusplus } from "react-icons/si";
export function TargetCpp() {
  return (
    <div>
      <div className="text-white bg-black rounded-lg p-5 m-5 float-none justify-center text-center border-solid border-2 border-sky-500 shadow-lg shadow-cyan-500/50">
        <div className="float-none mx-32 m-5">
          <SiCplusplus size={100} />
        </div>
        <p>
          C++ was developed by Bjarne Stroustrup at Bell Laboratories over a
          period starting in 1979. Since C++ is an attempt to add
          object-oriented features (plus other improvements) to C, earlier it
          was called as “C with Objects”. As the language developed, Stroustrup
          named it as C++ in 1983.
        </p>
      </div>
    </div>
  );
}
