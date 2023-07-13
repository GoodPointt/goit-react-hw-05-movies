import Header from 'components/Header/Header';
import { MainContainer } from 'components/Styled';
import { MutatingDots } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ isLoading }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="#087795"
          secondaryColor="#c0c0c0"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1200,
          }}
          wrapperClass=""
          visible={true}
        />
      )}
    </>
  );
};

export default Layout;
