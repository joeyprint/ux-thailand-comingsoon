import './Homepage.css';

const Homepage = () => {
  return (
    <div id={'homepage'}>
      <div className={'title-section'}>
        <div className={'ux-thailand-conf'}>UX Thailand</div>
        <div className={'ux-thailand-conf'}>Conference 2024</div>
        <div className={'coming-soon'}>Coming Soon !</div>

        {/* dot point */}
        <img
          className={'point-dot point-dot-green'}
          src={'/assets/images/point-dot/green.svg'}
        />
        <img
          className={'point-dot point-dot-blue'}
          src={'/assets/images/point-dot/blue.svg'}
        />
        <img
          className={'point-dot point-dot-magenta'}
          src={'/assets/images/point-dot/magenta.svg'}
        />
      </div>
    </div>
  );
};

export default Homepage;
