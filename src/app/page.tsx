import Link from "next/link"

export default function Home() {
  return (
   <div className="bg-black bg-home-img bg-cover bg-center">

  <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">

    <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
      <h1 className="text-white font-bold">Ahmed&apos;s Computer <br/> Repair Shop</h1>
      <address className="not-italic mb-4">
        Rua Padre Francisco Alvares 22 <br/>
        Lisboa Portugal, 1500-478
      </address>
      <p className="mb-4">
        Open Daily: 9am to 5pm
      </p>
      <Link href="tel:+351931393064" className="hover:underline">
        +351 931 393 064
      </Link>
    </div>
  </main>
</div>
  );
}
