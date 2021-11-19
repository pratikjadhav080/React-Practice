import '../styles/activeusers.css'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {List} from "./UsersList"
import {Div} from "../custom/UserDiv"
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 5,
    '& .MuiSwitch-track': {
        borderRadius: 100 / 5,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));

export const ActiveUsers = () => {

    const {isDarkMode,toggleTheme} = useContext(ThemeContext)


    return <Div m={isDarkMode}>

        <div>
            <p id="dashboard" style={{color:isDarkMode?"#FFFFFF":"#31394D"}}>My Dashboard</p>
            <p id="mode" style={{color:isDarkMode?"#FFFFFF":"#31394D"}}>{isDarkMode?"Dark":"Light"} Mode</p>
            
            <FormGroup id="switchbtn" >
                <FormControlLabel
                label=""
                control={<Android12Switch onChange={(e)=>toggleTheme(e.target.checked)}/>}
                />
            </FormGroup>
        </div>

        <div id="usersDiv" style={{backgroundColor:isDarkMode?"#292E33":"#FFFFFF",boxShadow: isDarkMode?"":"0px 1px 4px #E5E9F2",  color:isDarkMode?"#FFFFFF":"#31394D"}}>
            <div id="headDiv">
                <p>Active Users</p>
                <p>for <span>August 2020</span> <span><img src="SelectDropdown.svg" alt=""/></span> </p>
            </div>
            <List/>
        </div>

    </Div>
}