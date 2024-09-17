import Phone from "@/components/utils/Phone";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-10 flex min-h-screen w-full flex-col items-start justify-start gap-5 lg:mt-10 lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-10 lg:w-[80%]">
        <h1 className="text-balance text-center text-5xl font-semibold !leading-tight tracking-tighter text-white md:text-6xl lg:text-left lg:text-6xl">
          Your Image on a{" "}
          <span className="ml-2 rounded-sm bg-primary px-2">Custom</span> Phone
          Case
        </h1>

        <p className="text-center text-muted lg:text-left lg:text-lg">
          Make a custom case for your iPhone with our easy to use design tool,
          CaseCraze allows you to protect your memories, not just your phone
          case.
        </p>

        <ul className="mt-6 flex flex-col items-center justify-center px-2 font-semibold lg:mt-0">
          <li className="flex w-full items-start justify-start gap-3 text-white">
            <Check className="size-5 text-primary" />
            <span>High Quality, Durable Material</span>
          </li>
          <li className="flex w-full items-start justify-start gap-3 text-white">
            <Check className="size-5 text-primary" />
            <span>5 year print guarantee</span>
          </li>

          <li className="flex w-full items-start justify-start gap-3 text-white">
            <Check className="size-5 text-primary" />
            <span>Modern iPhone models supported</span>
          </li>
        </ul>

        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start lg:mt-1">
          <div className="flex -space-x-4">
            <img
              className="inline-block size-10 rounded-full ring-2 ring-slate-100"
              src="/users/user-1.png"
              alt="user image"
            />
            <img
              className="inline-block size-10 rounded-full ring-2 ring-slate-100"
              src="/users/user-2.png"
              alt="user image"
            />
            <img
              className="inline-block size-10 rounded-full ring-2 ring-slate-100"
              src="/users/user-3.png"
              alt="user image"
            />
            <img
              className="inline-block size-10 rounded-full ring-2 ring-slate-100"
              src="/users/user-4.png"
              alt="user image"
            />
            <img
              className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
              src="/users/user-5.png"
              alt="user image"
            />
          </div>

          <div className="mt-2 flex flex-col items-center justify-between sm:items-start">
            <div className="flex gap-0.5">
              <Star className="size-4 fill-primary text-primary" />
              <Star className="size-4 fill-primary text-primary" />
              <Star className="size-4 fill-primary text-primary" />
              <Star className="size-4 fill-primary text-primary" />
              <Star className="size-4 fill-primary text-primary" />
            </div>

            <p>
              <span className="font-semibold">1.250</span> happy customers
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-full mt-32 flex h-full w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-0 lg:w-[40%]">
        <div className="relative md:max-w-xl">
          <img
            src="/line.png"
            className="absolute -bottom-6 -left-6 w-20 select-none"
          />
          <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
        </div>
      </div>
    </div>
  );
}
