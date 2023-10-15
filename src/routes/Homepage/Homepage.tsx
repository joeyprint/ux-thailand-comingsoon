import './Homepage.css';

const Homepage = () => {
  return (
    <div id={'homepage'}>
      {/* background image */}
      <img
        className={'wind-wheel-icon'}
        src={'/assets/images/thai-signature-icon/wind-wheel.svg'}
      />
      <img
        className={'elephant-icon'}
        src={'/assets/images/thai-signature-icon/elephant.svg'}
      />

      <div className={'title-section'}>
        {/* dot point */}
        <div className={'dot-box'}>
          <img
            className={'point-dot point-dot-green'}
            src={'/assets/images/point-dot/green.svg'}
          />
          <img
            className={'point-dot point-dot-magenta'}
            src={'/assets/images/point-dot/magenta.svg'}
          />
          <img
            className={'point-dot point-dot-blue'}
            src={'/assets/images/point-dot/blue.svg'}
          />
        </div>

        <div className={'ux-thailand-conf'}>UX Thailand</div>
        <div className={'ux-thailand-conf'}>Conference 2024</div>
        <div className={'coming-soon'}>Coming Soon !</div>
      </div>
    </div>
  );
};

export default Homepage;
