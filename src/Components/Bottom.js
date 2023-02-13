import React from 'react';
import "../Components/Bottom.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const Bottom = () => {
  return (
    <div className='container-fluid bgg'>
        <div className='col-sm-12 bottom'>
            <div className='row'>
                <div className='col-sm-6 p-sm-5'>
                    <div className='row'>
                        <div className='col-sm-12 bistrob'>
                            Bistro
                        </div>
                        <div className='col-sm-12'>
                            If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
                        </div>
                    </div>
                </div>
                
                <div className='col-sm-6 p-sm-5 pt-4 d-flex align-items-center justify-content-center'>
                    <div className='row '>
                        <div className='col-sm-12 find' >
                            How to find us?
                        </div>
                        <div className='col-sm-12 '>
                            <ul type="none" className='p-4'>
                            <li><LocationOnIcon></LocationOnIcon> Avenue Marina 357642 NY-B152</li>
                            <li><CallIcon></CallIcon> +1029 4356 73</li>
                            <li><MailIcon> </MailIcon> bistroresto@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bottom