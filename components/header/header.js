import './header.css';
import { header } from '../portofolio';
function Header() {
  const {title } = header;
  return (
    <h1 className='header-title'>{title}</h1 >
  );
}
; 
export default Header;