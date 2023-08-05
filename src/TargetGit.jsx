import { BsGit } from "react-icons/bs";
export function TargetGit() {
  return (
    <div className="font-Montserrat">
      <div className="text-white bg-black rounded-lg p-5 m-5 float-none justify-center text-center border-solid border-2 border-orange-500 shadow-lg shadow-orange-500/50">
        <div className="float-none mx-32 m-5">
          <BsGit size={100} />
        </div>
        <p>
          Git was originally authored by Linus Torvalds in 2005 for development
          of the Linux kernel, with other kernel developers contributing to its
          initial development. Since 2005, Junio Hamano has been the core
          maintainer.
        </p>
      </div>
    </div>
  );
}

