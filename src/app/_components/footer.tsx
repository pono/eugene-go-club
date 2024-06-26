import Container from "@/app/_components/container";
import Image from "next/image";
import Link from "next/link";
// import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="select-none bg-gradient-to-tr from-sky-500 to-teal-400 max-w-screen mx-0">
      {/* <Container> */}
      <div className="py-28 flex flex-col items-start text-white px-16 ">
        <h3 className="font-playfair text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 ">
          Eugene Go Club
        </h3>
        <h1 className="font-montserrat">
          Eugene Go Club is a free weekly club for go enthusiasts.
        </h1>
        <div className="socials flex pt-4 space-x-4">
          <Link
            href="/https://www.facebook.com/groups/EugeneGoClub"
            target="_blank"
          >
            <Image
              src="/icons/facebook.png"
              alt="facebook icon"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="https://discord.com/channels/1164649557687275703/1174766988787208345"
            target="_blank"
          >
            <Image
              src="/icons/discord.png"
              alt="facebook icon"
              width={25}
              height={25}
            />
          </Link>{" "}
          <Link
            href="/https://www.meetup.com/eugene-go-players/"
            target="_blank"
          >
            <Image
              src="/icons/meetup.png"
              alt="facebook icon"
              width={25}
              height={25}
            />
          </Link>{" "}
          <Link href="/https://online-go.com/group/6435" target="_blank">
            <Image
              className="rounded-full"
              src="/icons/ogs-icon.png"
              alt="facebook icon"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
      {/* </Container> */}
    </footer>
  );
}

export default Footer;
