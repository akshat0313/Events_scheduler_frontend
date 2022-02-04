import React, { useState } from 'react';
import face from '../images/XL.png'
import Reminders from '../../layout/components/Card/Reminders';

import Notify from './notifications/notify';







function Home(props) {
    
    const [Notific, setNotific] = useState(false);

    const Notification = e => {
        e.preventDefault();

    setNotific(Notific => !Notific);
    }

    return (
        <div className='mt-4'>
            <div className=''>
            <hr />
            <div className='flex flex-row justify-between'>
                <div>
                    <h1>Good Morning,</h1>
                    <p>John Snow</p>
                </div>
                <div className='ml-96 flex flex-row'>
                   <button onClick={Notification}>notify</button>
                   <img src={face} alt="" />
                </div>

            </div>
            <hr />
            </div>

            {!Notific && (
                <div className='flex flex-col'>
                <div>
                    <h1>Reminders</h1>
                </div>
                <div className='py-4'>
                    <div className='flex flex-row rounded-md bg-gray-300 mb-2 ml-2'>
                        <div className='rounded-full bg-blue-700 h-8 mr-2 mt-2 ml-2 w-4 p-1'>
                            <h1>A</h1>
                        </div>
                        <div>
                            <h1>Header</h1>
                            <p>This is a Placeholder</p>
                        </div>
                    </div>
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                </div>
                
           </div>
            )}
            {console.log(Notific)}
            {Notific && (
                <div>
                <Notify ></Notify>
            </div>
            ) }

            

        </div>

    );
}

export default Home;