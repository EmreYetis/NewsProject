import React from "react";

function Iletisim() {
  return (
    <div className="container mx-auto p-8  text-center">
      <h1 className="text-3xl font-bold mb-4  ">İletişim Bilgileri</h1>
      <address className="text-gray-700">
        <p>
          BATEM News
          <br />
          Ostim Teknokent No:3/1
          <br />
          Yenimahalle
          <br />
          Ankara, Türkiye
        </p>
        <p className="mt-4">
          Telefon: (123) 456-7890
          <br />
          Email: <a href="mailto:info@firmaadi.com">info@firmaadi.com</a>
        </p>
      </address>
    </div>
  );
}

export default Iletisim;
