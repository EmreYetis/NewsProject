import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto w-2/3">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/4">
            <h1 className="text-2xl font-semibold">BATEM News</h1>
            <p className="mt-2">Ostim Teknokent No:3/1 Yenimahalle</p>
            <p>Ankara, Türkiye</p>
            <p className="mt-2">Telefon: (123) 456-7890</p>
            <p>Email: info@firmaadi.com</p>
          </div>
          <div className="md:w-1/4 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold">Hızlı Bağlantılar</h2>
            <ul className="mt-2">
              <li className="p-0.5">
                <a href="/">Anasayfa</a>
              </li>
              <li className="p-0.5">
                <a href="#">Hakkımızda</a>
              </li>
              <li className="p-0.5">
                <a href="#">Hizmetler</a>
              </li>
              <li className="p-0.5">
                <a href="#">İletişim</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-4 border-gray-600" />
        <p className="text-center mt-4">© 2023 BATEM. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
