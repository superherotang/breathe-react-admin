import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';
import './index.css';

const Layout = () => {
  return (
    <div className='flex h-screen bg-green-300'>
      <div className='flex flex-1 flex-col overflow-hidden'>
        <Header />
        <div className='flex h-full'>
          <Nav />
          <Content />
        </div>
      </div>
    </div>
  );
};
export default Layout;
