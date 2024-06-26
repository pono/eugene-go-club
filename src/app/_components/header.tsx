import Link from "next/link";

const Header = () => {
  return (
    <section
      className=" flex fixed  bg-[#ffffff40] justify-around h-24  w-[90%] max-w-[1000px] my-0 mx-auto"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <h1 className="text-5xl  font-bold tracking-tighter leading-tight flex items-center">
        <Link
          href="/"
          className="hover:underline rounded-md hover:bg-slate-200 px-4 py-2 underline decoration-yellow-300"
        >
          Eugene Go Club
        </Link>
      </h1>
      <ul className="flex space-x-4 px-8 items-center text-xl">
        {/* <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
        <Link href="/contact">Contact</Link>
      </li> */}
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          <Link href="https://discord.gg/qVCqJYyVUX" target="_blank">
            Discord
          </Link>
        </li>
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          <Link
            href="https://www.meetup.com/eugene-go-players/"
            target="_blank"
          >
            Meetup
          </Link>
        </li>
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          <Link href="/faqs">FAQs</Link>
        </li>
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </section>
    // <section className=" flex  justify-around h-24 bg-slate-200 w-full">
    //   {" "}
    //   <h1 className="text-5xl  font-bold tracking-tighter leading-tight flex items-center">
    //     <Link
    //       href="/"
    //       className="hover:underline rounded-md hover:bg-slate-200 px-4 py-2 "
    //     >
    //       Blog
    //     </Link>
    //   </h1>
    //   <ul className="flex space-x-4 px-8 items-center text-xl">
    //     <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
    //       Mailing List
    //     </li>
    //     <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
    //       Discord
    //     </li>
    //     <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
    //       Meetup
    //     </li>
    //     <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
    //       FAQs
    //     </li>
    //     <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
    //       Events
    //     </li>
    //   </ul>
    // </section>
  );
};

export default Header;
