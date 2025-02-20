import React from "react";

const Sidebar = (props) => {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <span className="logo-sidebar"></span>
            <span className="text-bold text-white ml-2">
            RSIA Puri Bunda
            </span>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false">
                        <li className="nav-item">
                            <a href="/dashboard" className={props.active === 'dashboard' ? "nav-link active" : 'nav-link'} >
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/unit" className={props.active === 'unit' ? "nav-link active" : 'nav-link'} >
                                <i className="nav-icon fas fa-building"></i>
                                <p>Unit</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/jabatan" className={props.active === 'jabatan' ? "nav-link active" : 'nav-link'} >
                                <i className="nav-icon fas fa-briefcase"></i>
                                <p>Jabatan</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/karyawan" className={props.active === 'karyawan' ? "nav-link active" : 'nav-link'} >
                                <i className="nav-icon fas fa-users"></i>
                                <p>Karyawan</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
