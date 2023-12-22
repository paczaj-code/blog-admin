import MainLayout from '../Layouts/MainLayout';
import PageHeading from '../ui/PageHeading/PageHeading';
import Table from '../ui/Table/Table';

const HomePage = () => {
  return (
    <MainLayout>
      <PageHeading title='Home' />
      <Table />
    </MainLayout>
  );
};

export default HomePage;
