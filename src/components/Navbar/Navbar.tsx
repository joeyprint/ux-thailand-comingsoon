import './Narbar.css';

const Navbar = () => {
  return (
    <div id={'navbar-section'}>
      <div className={'container'}>
        <img
          className={'uxth-logo'}
          src={'/assets/images/uxth-conference-logo.svg'}
        />
      </div>
    </div>
  );
};

export default Navbar;
