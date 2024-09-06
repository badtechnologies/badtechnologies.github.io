import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-96 bg-black text-white">
        <div className="flex items-center justify-between container mx-auto max-w-7xl px-5">
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-5xl">BadBook Pro</h2>
              <p>Powerful, efficient, BadBook.</p>
            </div>
            <div className="flex gap-2">
              <Button color="primary" radius="full" className="w-28">
                Buy now
              </Button>
              <Button
                color="primary"
                radius="full"
                className="w-28"
                variant="bordered"
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="h-96 overflow-hidden">
            <div className="h-[512px] w-[512px] relative">
              <Image
                src="/images/badbook-pro_cover3.png"
                alt="Showcase of the new BadBook Pro."
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center items-center mx-auto container max-w-7xl space-y-8 py-8">
        <h2 className="font-semibold text-3xl">Explore popular categories.</h2>
        <div className="flex items-center gap-24">
          <Link href="#" className="flex flex-col items-center gap-4">
            <div className="bg-default-100 w-40 h-40"></div>
            <p className="text-primary font-medium">Check back later</p>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-4">
            <div className="bg-default-100 w-40 h-40"></div>
            <p className="text-primary font-medium">Check back later</p>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-4">
            <div className="bg-default-100 w-40 h-40"></div>
            <p className="text-primary font-medium">Check back later</p>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-4">
            <div className="bg-default-100 w-40 h-40"></div>
            <p className="text-primary font-medium">Check back later</p>
          </Link>
        </div>
      </section>
    </>
  );
}
