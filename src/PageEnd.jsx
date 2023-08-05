import {BsGithub} from 'react-icons/bs'
export function PageEnd() {
  return (
    <div className="" >
      <div className="bg-black text-white font-Montserrat font-bold m-5 p-5 flex border-solid border-2 border-white shadow-lg shadow-slate-500/50 rounded-lg">
        <div className='flex'>
        <BsGithub className='m-5 p-1' size={50} />
        </div>
        <ul>
          <li><a className='m-5  p-5 hover:text-orange-500' target="_blank" href="https://github.com/Chessmaw">Chessmaw</a></li>
          <li><a className='m-5  p-5 hover:text-teal-500' target="_blank" href="https://github.com/ChessmawOgami">ChessmawOgami</a></li>
          <li><a className='m-5  p-5 hover:text-orange-500' target="_blank" href="#">@By Creator Alejandro</a></li>
        </ul>
      </div>
    </div>
  );
}
