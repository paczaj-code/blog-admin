import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';

const DarkModeToggler = () => {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    isDarkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [isDarkMode]);
  return (
    <div>
      {/* <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p> */}
      {/* <button onClick={toggle}>Toggle</button>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button> */}
    </div>
  );
};

export default DarkModeToggler;
