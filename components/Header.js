import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  XIcon,
  UsersIcon,
} from "@heroicons/react/solid";
// import { signOut, useSession } from "next-auth/client"
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import { useRouter } from "next/dist/client/router";
import ColorTheme from "./ColorTheme";

const Header = ({ placeholder, page }) => {
  // const [session] = useSession();
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });

    setSearchInput("");
  };

  const [searchStatus, setSearchStatus] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 ">
      <div
        className={
          !searchStatus
            ? `grid grid-cols-2 sm:grid-cols-3 md:px-10 transition duration-300 ease-in-out bg-white dark:bg-gray-900 shadow-md ${
                !scroll &&
                `${
                  page == "Home"
                    ? "bg-transparent shadow-none dark:bg-transparent"
                    : "bg-white dark:bg-gray-900"
                }`
              } p-5 ${searchInput && "-mb-90 "}`
            : `flex transition duration-300 ease-in-out bg-white dark:bg-gray-900  ${
                searchInput && "flex-col -mb-90 "
              } shadow-md ${
                !scroll &&
                `${
                  page == "Home"
                    ? "bg-transparent shadow-none dark:bg-transparent "
                    : "bg-white dark:bg-gray-900 "
                }`
              } p-5`
        }
      >
        {/* Left - Airbnb Logo */}
        <div
          onClick={() => router.push("/")}
          className={
            !searchStatus
              ? "flex relative items-center h-10 cursor-pointer my-auto"
              : "hidden"
          }
        >
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        {/* Middle - Search */}
        <div
          className={
            !searchStatus
              ? "bg-white hidden sm:flex items-center md:border-2 rounded-full py-2 md:shadow-sm"
              : "bg-white  flex items-center border-2 rounded-full py-2 shadow-sm flex-grow"
          }
        >
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="ml-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={placeholder || "Start your search"}
          />
          <SearchIcon
            className={
              !searchStatus
                ? "hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
                : "inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"
            }
          />
        </div>

        {/* Right - Icons */}
        <div
          className={`flex items-center justify-end space-x-4 transition duration-200 ease-in-out ${
            !scroll && `${page == "Home" ? "text-white" : "text-gray-600"}`
          }`}
        >
          {searchStatus ? (
            <XIcon
              onClick={() => setSearchStatus(false)}
              className={`h-7 ml-5 cursor-pointer ${searchInput && "hidden"}`}
            />
          ) : (
            <>
              <p className="hidden md:inline cursor-pointer">Become a host</p>
              <SearchIcon
                onClick={() => setSearchStatus(true)}
                className="sm:hidden h-6 cursor-pointer"
              />

              <GlobeAltIcon className="h-6 cursor-pointer" />
              <div className="hidden md:inline">
                <ColorTheme />
              </div>

              <div className="flex items-center space-x-2 border-2 p-2 rounded-full bg-white text-gray-600">
                <MenuIcon className="h-6" />
                <UserCircleIcon className="h-6 cursor-pointer" />
              </div>
            </>
          )}
        </div>

        {searchInput && (
          <div className="flex flex-col col-span-3 md:mx-auto mt-5 bg-white dark:text-black dark:bg-gray-900  p-5 rounded-xl -ml-2 ">
            <div className="text-xl md:text-2xl flex-grow font-semibold mb-4 dark:text-white">
              📅 Pick Check-in and Check-out dates
            </div>
            <div className="hidden sm:inline-flex dark:bg-gray-900">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#fd5b61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="inline-flex sm:hidden dark:bg-black -ml-2">
              <DateRange
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#fd5b61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="flex items-center border-b pb-2 pt-2 mb-4">
              <h2 className="text-2xl flex-grow font-semibold dark:text-white">
                Number of Guests
              </h2>
              <UsersIcon className="h-5 dark:text-white" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                min={1}
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400 dark:bg-gray-900"
              />
            </div>
            <div className="flex">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button onClick={search} className="flex-grow text-red-400 ">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// import Image from "next/image";
// //next.js image component
// import {
//   GlobeAltIcon,
//   MenuIcon,
//   SearchIcon,
//   UserCircleIcon,
//   XIcon,
//   UsersIcon,
// } from "@heroicons/react/solid";
// import { useState, useEffect } from "react";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// import { useRouter } from "next/dist/client/router";

// function Header({ placeholder, page }) {
//   // search functionality
//   const [searchInput, setSearchInput] = useState("");
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [noOfGuests, setNoOfGuests] = useState(1);
//   const router = useRouter();

//   // for start and end date
//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };

//   // for receiving the values user is selecting for start date and end dateRangePicker

//   const handleSelect = (ranges) => {
//     setStartDate(ranges.selection.startDate);
//     setEndDate(ranges.selection.endDate);
//   };

//   const resetInput = () => {
//     setSearchInput("");
//   };

//   const search = () => {
//     router.push({
//       pathname: "search",
//       query: {
//         location: searchInput,
//         startDate: startDate.toISOString(),
//         endDate: endDate.toISOString(),
//         noOfGuests,
//       },
//     });
//   };

//   const [searchStatus, setSearchStatus] = useState(false);
//   const [scroll, setScroll] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 20) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50">
//       <div
//         className={
//           !searchStatus
//             ? `grid grid-cols-2 sm:grid-cols-3 md:px-10 transition duration-300 ease-in-out bg-white shadow-md ${
//                 !scroll &&
//                 `${page == "Home" ? "bg-transparent shadow-none" : "bg-white"}`
//               } p-5 ${searchInput && "-mb-90"}`
//             : `flex transition duration-300 ease-in-out bg-white ${
//                 searchInput && "flex-col -mb-90"
//               } shadow-md ${
//                 !scroll &&
//                 `${page == "Home" ? "bg-transparent shadow-none" : "bg-white"}`
//               } p-5`
//         }
//       >
//         {/* Left - Airbnb Logo */}
//         <div
//           onClick={() => router.push("/")}
//           className={
//             !searchStatus
//               ? "flex relative items-center h-10 cursor-pointer my-auto"
//               : "hidden"
//           }
//         >
//           <Image
//             src="https://links.papareact.com/qd3"
//             layout="fill"
//             objectFit="contain"
//             objectPosition="left"
//           />
//         </div>

//         {/* Middle - Search */}
//         <div
//           className={
//             !searchStatus
//               ? "bg-white hidden sm:flex items-center md:border-2 rounded-full py-2 md:shadow-sm"
//               : "bg-white flex items-center border-2 rounded-full py-2 shadow-sm flex-grow"
//           }
//         >
//           <input
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             className="ml-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
//             type="text"
//             placeholder={placeholder || "Start your search"}
//           />
//           <SearchIcon
//             className={
//               !searchStatus
//                 ? "hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
//                 : "inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"
//             }
//           />
//         </div>

//         {/* Right - Icons */}
//         <div
//           className={`flex items-center justify-end space-x-4 transition duration-200 ease-in-out ${
//             !scroll && `${page == "Home" ? "text-white" : "text-gray-600"}`
//           }`}
//         >
//           {searchStatus ? (
//             <XIcon
//               onClick={() => setSearchStatus(false)}
//               className={`h-7 ml-5 cursor-pointer ${searchInput && "hidden"}`}
//             />
//           ) : (
//             <>
//               <p className="hidden md:inline cursor-pointer">Become a host</p>
//               <SearchIcon
//                 onClick={() => setSearchStatus(true)}
//                 className="sm:hidden h-6 cursor-pointer"
//               />
//               <GlobeAltIcon className="h-6 cursor-pointer" />
//               <div className="flex items-center space-x-2 border-2 p-2 rounded-full bg-white text-gray-600">
//                 <MenuIcon className={`h-6 cursor-pointer `} />
//               </div>
//             </>
//           )}
//         </div>

//         {searchInput && (
//           <div className="flex flex-col col-span-3 mx-auto mt-5 bg-white p-5 rounded-xl">
//             <div className="hidden sm:inline-flex">
//               <DateRangePicker
//                 ranges={[selectionRange]}
//                 minDate={new Date()}
//                 rangeColors={["#fd5b61"]}
//                 onChange={handleSelect}
//               />
//             </div>
//             <div className="inline-flex sm:hidden">
//               {/* <DateRange
//                 ranges={[selectionRange]}
//                 minDate={new Date()}
//                 rangeColors={["#fd5b61"]}
//                 onChange={handleSelect}
//               /> */}
//             </div>
//             <div className="flex items-center border-b mb-4">
//               <h2 className="text-2xl flex-grow font-semibold">
//                 Number of Guests
//               </h2>
//               <UsersIcon className="h-5" />
//               <input
//                 value={noOfGuests}
//                 onChange={(e) => setNoOfGuests(e.target.value)}
//                 min={1}
//                 type="number"
//                 className="w-12 pl-2 text-lg outline-none text-red-400"
//               />
//             </div>
//             <div className="flex">
//               <button onClick={resetInput} className="flex-grow text-gray-500">
//                 Cancel
//               </button>
//               <button onClick={search} className="flex-grow text-red-400">
//                 Search
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//     // <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 md:px-10">
//     //   {/* div for left */}
//     //   <div
//     //     onClick={() => router.push("/")}
//     //     className="relative flex items-center h-10 cursor-pointer my-auto "
//     //   >
//     //     <Image
//     //       src="https://links.papareact.com/qd3"
//     //       layout="fill"
//     //       objectFit="contain"
//     //       objectPosition="left"
//     //     />
//     //   </div>
//     //   {/* div for middle */}
//     //   <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
//     //     <input
//     //       value={searchInput}
//     //       onChange={(e) => setSearchInput(e.target.value)}
//     //       className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
//     //       type="text"
//     //       placeholder="Begin your search"
//     //     />
//     //     <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
//     //   </div>
//     //   {/* div for right */}
//     //   <div className="flex items-center space-x-4 justify-end text-gray-500">
//     //     <p className="hidden md:inline cursor-pointer">Become a host</p>
//     //     <GlobeAltIcon className="h-6 cursor-pointer" />

//     //     <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
//     //       <MenuIcon className="h-6" />
//     //       {/* curson-pointer */}
//     //       <UserCircleIcon className="h-6" />
//     //     </div>
//     //   </div>
//     //   {searchInput && (
//     //     <div className="flex flex-col col-span-3 mx-auto">
//     //       <DateRangePicker
//     //         ranges={[selectionRange]}
//     //         minDate={new Date()}
//     //         rangeColors={["#FD5B61"]}
//     //         onChange={handleSelect}
//     //       />
//     //       <div className="flex items-center border-b mb-4">
//     //         <h2 className="text-2xl flex-grow font-semibold">
//     //           Number of Guests
//     //         </h2>

//     //         <UsersIcon className="h-5" />
//     //         <input
//     //           value={noOfGuests}
//     //           onChange={(e) => setNoOfGuests(e.target.value)}
//     //           type="number"
//     //           min={1}
//     //           className="w-12 pl-2 text-lg outline-none text-red-400"
//     //         />
//     //       </div>
//     //       <div className="flex ">
//     //         <button onClick={resetInput} className="flex-grow text-gray-500">
//     //           Cancel
//     //         </button>
//     //         <button onClick={search} className="flex-grow text-red-400">
//     //           Search
//     //         </button>
//     //       </div>
//     //     </div>
//     //   )}
//     // </header>
//   );
// }

// export default Header;
