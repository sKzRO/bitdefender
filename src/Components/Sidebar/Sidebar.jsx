import React from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';


const Sidebar = () => {

    return (

    <aside className={styles.sidenav}>
        <div className={styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21.903" height="25.48" viewBox="0 0 21.903 25.48">
                <path id="Subtraction_2" data-name="Subtraction 2" d="M12.26,29.912H3.078V8.606c0-1.161-.223-1.419-1.772-2.682L0,4.812v-.38H13.01a9.451,9.451,0,0,1,5.342,1.461,5.67,5.67,0,0,1,2.459,4.944,5.659,5.659,0,0,1-4.424,5.574v.07l.01.005a6.07,6.07,0,0,1,5.5,6.155,6.294,6.294,0,0,1-3.016,5.714A12.965,12.965,0,0,1,12.26,29.912ZM7.606,18.684V26.02h4.266a8.468,8.468,0,0,0,3.569-.612,3.19,3.19,0,0,0,1.913-3.127c0-2.555-1.563-3.6-5.394-3.6Zm0-10.369v6.476H11.74c1.806,0,2.866-.31,3.658-1.071a2.856,2.856,0,0,0,.876-2.127,2.9,2.9,0,0,0-.851-2.2c-.768-.732-1.574-1.081-4.078-1.081Z" transform="translate(0 -4.432)" fill="#fff"/>
            </svg>
        </div>

        <div>
            <SidebarItem icon="dashboard" info="Dashboard" onClick={() => alert("Dashboard")}/>
            <SidebarItem icon="incidents" info="Incidents" onClick={() => alert("Incidents")}/>
            <SidebarItem icon="network" info="Network" onClick={() => alert("Network")}/>
            <SidebarItem icon="risk" info="Risk Management" onClick={() => alert("Risk")}/>
            <SidebarItem icon="policies" info="Policies" onClick={() => alert("Policies")}/>
            <SidebarItem icon="reports" info="Reports" onClick={() => alert("Reports")}/>
            <SidebarItem icon="quarantine" info="Quarantine" onClick={() => alert("Quarantine")}/>
            <SidebarItem icon="companies" info="Companies" onClick={() => alert("Companies")}/>
            <SidebarItem icon="accounts" info="Accounts" onClick={() => alert("Accounts")}/>
            <SidebarItem icon="sandbox" info="Sandbox Analyzer" onClick={() => alert("Analyzer")}/>
        </div>

    </aside>

    );
    
}

export default Sidebar;

