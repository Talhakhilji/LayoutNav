'use client'
import React, { useState } from 'react'
import Sidebar from '@/app/components/Sidebar'
import Header from '@/app/components/Header'

export default function DefaultLayout({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	return (
    <>
      <div>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex h-[calc(100vh-80px)]">

            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />

            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
    </>
  );
}
