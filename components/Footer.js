function Footer() {
  return (
    <div className="font-mono w-[100%]">
      <hr className="w-[369px] md:w-[100%] border-gray-800" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-10  py-14 md:py-14 md:px-32 bg-gray-100 dark:bg-gray-800  text-gray-600">
        <div className="space-y-4 text-s text-gray-800 dark:text-white">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-s text-gray-800 dark:text-white">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Acessibility</p>
          <p>This is ❌ official site</p>
          <p>This is clone</p>
          <p>Support us</p>
          <p>Walker Join</p>
        </div>
        <div className="space-y-4 text-s text-gray-800 dark:text-white">
          <h5 className="font-bold">HOST</h5>
          <p>Host your home</p>
          <p>Host an Online Experience</p>
          <p>Host an Experience</p>
          <p>Responsible hosting</p>
          <p>Resource Centre</p>
        </div>
        <div className="space-y-4 text-s text-gray-800 dark:text-white">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Our COVID-19 Response</p>
          <p>Help Centre</p>
          <p>Cancellation options</p>
          <p>Neighbourhood Support</p>
          <p>Trust & Safety</p>
        </div>
      </div>
      <div className="px-32 py-4 bg-gray-100 text-gray-600 dark:text-white dark:bg-gray-800">
        <hr className="w-full md:w-[1000px] lg:w-[100%] border-gray-300" />
        <div className="text-center ">
          Made with ❤️ by{" "}
          <a className="font-bold" href="http://arshwalker.netlify.app/">
            Arshdeep.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
