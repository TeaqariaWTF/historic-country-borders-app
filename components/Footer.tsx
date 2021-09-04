interface FooterProps {
  dataUrl?: string;
}

const Footer = ({
  dataUrl = 'https://github.com/nrgapple/historicborders-timeline-example',
}: FooterProps) => (
  <div className="footer">
    <div>
      🗺 This map uses data from <a href={dataUrl}>here</a>.
      {/* Create your own data{' '}
      <a href="https://github.com/nrgapple/historicborders-timeline-example">
        here
      </a>{' '} */}
    </div>
    <div>
      <a href="https://github.com/nrgapple/historic-country-borders-app">
        ⭐️ Star this on Github!
      </a>
    </div>
  </div>
);

export default Footer;
