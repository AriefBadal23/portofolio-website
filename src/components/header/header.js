import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {header} from '../portofolio'

function Header() {
    const {homepage, title} = header
    return ( 
        <div>
        <p>{title}</p>
        <Button variant='outlined'>Test</Button>
        </div>
     );
}

export default Header;