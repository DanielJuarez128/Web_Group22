import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";

export const Footer = () => {
  return (
    <footer className="bg-purple-950 text-center text-white lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 lg:block">
          <span className="text-lg place-content-start"> Follow us: </span>
          <button className="p-2 px-5">
            <SlSocialFacebook size={30} />
          </button>

          <button className="p-2 px-5">
            <SlSocialInstagram size={30} />
          </button>

          <button className="p-2 px-5">
            <SlSocialTwitter size={30} />
          </button>
        </div>

        <div className="lg:flex lg:items-center">
          <ul className="lg:flex lg:items-center">
            <li className="lg:ml-6 mt-4 lg:mt-0">
              <a href="/pages/home" className="text-lg">
                Inicio
              </a>
            </li>
            <li className="lg:ml-6 mt-4 lg:mt-0">
              <a href="/pages/viewProduct" className="text-lg">
                Artículos
              </a>
            </li>
            <li className="lg:ml-6 mt-4 lg:mt-0">
              <a href="/pages/peFeed" className="text-lg">
                Emprendimientos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
