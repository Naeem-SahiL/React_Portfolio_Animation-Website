import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

function Layout() {
    return (
        <div className='container'>
            <Sidebar />
            <div className="page">
                <span className="tags top-tags top-tag-html">&lt;html&gt;</span>
                <br />
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet />
                <br />
                <span className='tags bottom-tags'>&lt;/body&gt;</span>
                <br />
                <span className='tags bottom-tags bottom-tag-html'>&lt;/html&gt;</span>
                
            </div>
        </div>
    )
}

export default Layout