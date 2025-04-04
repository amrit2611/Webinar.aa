import { useEffect, useState } from 'react'
import './App.css'
import { Banner } from './components/answers/Banner'
import { Card } from './components/answers/Card'
import { Options } from './components/answers/Options'
import { SidebarComponent } from './components/answers/Sidebar'
import { Table } from './components/answers/Table'

const usemediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = usemediaQuery("(min-width: 768px)");

  console.log(isDesktop);

  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isDesktop])

  return (
    <div className='flex'>
      <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent sidebarOpen={sidebarOpen} />
    </div>
  )
}


function MainContent() {
  return <div className='w-screen '>
    <Banner />
    <div className='md:grid md:grid-cols-12 gap-8 p-8'>
      <Card />
      <Table />
      <Options />
    </div>
  </div>
}

export default App
