import { useState } from 'react'
import '../../assets/css/settings/tab.css'
export const Tab = ({Active,currentActiveState})=>{

//    console.log('currentActiveState',currentActiveState)
    
    return(
        <div className="tabSettings">
            <div  onClick={()=>Active('Account-Settings')} className={currentActiveState === "Account-Settings" ? ' tabDiv activeTab':'tabDiv' }>
                Account Settings
            </div>
            {/* <div onClick={()=>Active('Notification-Settings')} className={currentActiveState === "Notification-Settings" ? 'tabDiv activeTab' :'tabDiv' }>
                Notification Settings
            </div> */}
            <div  onClick={()=>Active('Security-Settings')}  className={currentActiveState === "Security-Settings" ? 'tabDiv activeTab':'tabDiv' } >
                Security Settings
            </div>
        </div>
    )
}