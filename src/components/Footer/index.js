import './style.css';
import Logo from '../../assets/logo.svg';

function Footer() {
  return (
    <footer>

      <div className="footer-left">
        <img src={Logo} alt="logo" />
        <p>
          Minim deserunt aliqua eiusmod laboris commodo nulla.
          Ullamco sit cillum quis adipisicing deserunt esse id.
          Tempor aliqua reprehenderit ea dolore. Elit pariatur cupidatat
          culpa ad ex eu amet laborum nulla duis cupidatat eiusmod.
        </p>
      </div>
      <div className="footer-right">
        Pariatur eiusmod occaecat sit ex anim adipisicing ullamco. Cupidatat veniam adipisicing labore excepteur velit sint dolor aliquip do id eu. Magna eiusmod et sunt fugiat consequat Lorem sunt reprehenderit fugiat quis nisi velit ad.
        Pariatur eiusmod occaecat sit ex anim adipisicing ullamco. Cupidatat veniam adipisicing labore excepteur velit sint dolor aliquip do id eu. Magna eiusmod et sunt fugiat consequat Lorem sunt reprehenderit fugiat quis nisi velit ad.
        Pariatur eiusmod occaecat sit ex anim adipisicing ullamco. Cupidatat veniam adipisicing labore excepteur velit sint dolor aliquip do id eu. Magna eiusmod et sunt fugiat consequat Lorem sunt reprehenderit fugiat quis nisi velit ad.
      </div>
    </footer>
  );
}

export default Footer;