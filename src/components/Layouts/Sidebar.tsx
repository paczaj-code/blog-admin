// import { UserButton } from '@clerk/clerk-react';
import { Listbox, ListboxItem, cn } from '@nextui-org/react';
import {
  IconFilePencil,
  IconHome,
  IconListCheck,
  IconListDetails,
  IconTags,
  IconVocabulary,
} from '@tabler/icons-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface mainRouteTypes {
  name: string;
  path: string;
  icon?: React.ReactNode | string;
}

const iconSize = 27;
const mainRoutes: mainRouteTypes[] = [
  {
    name: 'Home',
    path: '/home',
    icon: <IconHome size={iconSize} stroke={1} className="text-orange-400" />,
  },
  {
    name: 'Artykuły',
    path: 'posts',
    icon: (
      <IconFilePencil size={iconSize} stroke={1} className="text-orange-400 " />
    ),
  },
  {
    name: 'Zadania',
    path: 'exersices',
    icon: (
      <IconListDetails size={iconSize} stroke={1} className="text-orange-400" />
    ),
  },
  {
    name: 'Terminologia',
    path: 'terms',
    icon: (
      <IconVocabulary
        size={iconSize}
        stroke={1}
        className="text-orange-400/90"
      />
    ),
  },
  {
    name: 'Tagi',
    path: 'tags',
    icon: <IconTags size={iconSize} stroke={1} className="text-orange-400" />,
  },
  {
    name: 'Kategorie',
    path: 'categories',
    icon: (
      <IconListCheck size={iconSize} stroke={1} className="text-orange-400" />
    ),
  },
];

interface IconWrapperProps {
  children: React.ReactNode;
  className: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, className }) => (
  <div
    className={cn(
      className,
      `flex items-center rounded-[8px] justify-center w-23 h-23  p-1  
      bg-gray-200/10 border-1  border-gray-500/30 shadow-[0_0px_19px__-4px_rgba(40,40,40,0.5)_inset,0_2px_4px_rgba(0,0,0,0.58)] bg-gradient-to-t from-gray-800/40 to-gray-700/70`
    )}
  >
    {children}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <Listbox
        aria-label="sidebar navigation"
        selectionMode="none"
        classNames={{ base: 'py-8 ' }}
        className={`p-0 gap-3 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content2 max-w-[300px] overflow-visible shadow-[0_0px_4px_black,0_0_0px_5px_rgba(100,100,138,0.3)] rounded-medium`}
      >
        {mainRoutes.map((route) => (
          <ListboxItem
            key={route.name}
            onClick={() =>
              navigate(`../${route.path}`, { relative: 'route', replace: true })
            }
            data-active={new RegExp(route.path, 'gi').test(pathname)}
            classNames={{
              base: `px-3 min-h-[55px] border-t-1 border-[rgba(100,100,138,0.45)]   first:rounded-t-medium last:rounded-b-medium rounded-none gap-2  h-12 data-[hover=true]:bg-default-200/40 
            data-[active=true]:bg-default-200/40 `,
              title: 'text-lg',
            }}
            className="first-of-type:border-0 "
            startContent={
              <IconWrapper className=" text-stone-300 bg-blue-400/20">
                {route.icon}
              </IconWrapper>
            }
          >
            {route.name}
          </ListboxItem>
        ))}
      </Listbox>
      {/* <UserButton signInUrl="/" afterSignOutUrl="/" /> */}
    </>
  );
};

export default Sidebar;
