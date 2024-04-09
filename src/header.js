// import './header.css';
import { header } from './portofolio';
function Header() {
  const { title } = header;
  return (
    <h1 className='text-[#2978b5] ml-[190px] mt-[20px] text-2xl hover:underline font-bold'>{title}</h1 >
  );
}
;
export default Header;