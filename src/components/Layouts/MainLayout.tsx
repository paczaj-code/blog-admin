import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex gap-7 pt-5">
      <aside className="w-64">
        <Sidebar />
      </aside>
      <main className='flex-1'>
        {children}</main>
    </div>
  );
};

export default MainLayout;
