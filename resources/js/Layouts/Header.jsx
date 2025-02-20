import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
function Header() {
    const handleLogout = (event) => {
        event.preventDefault();
        Inertia.post('/logout');
    };
    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
            </ul>
            <form onSubmit={handleLogout} className="navbar-nav ml-auto">
                <button type="submit" className="nav-link" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Logout</button>
            </form>
        </nav>
        </>

    );
}

export default Header;
