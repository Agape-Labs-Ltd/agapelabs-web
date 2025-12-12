import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full pt-4 pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center md:grid-cols-2">
          <div className="flex gap-6 flex-col">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-yellow-500/20 border border-black/10 backdrop-blur">
                <span className="text-sm text-gray-700">👋 We&apos;re live!</span>
              </div>
            </div>
            <div className="flex gap-6 flex-col">
              <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-xl text-left font-bold leading-[1.1]">
                Spreading <span className="text-gradient-prismatic">God&apos;s Love</span> Through Tech
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg text-left">
                 We&apos;re on a mission to build the next generation of digital tools to help believers all around the world grow in their relationship with Christ.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-yellow-500 rounded-2xl opacity-75 group-hover:opacity-100 blur group-hover:blur-xl transition-all duration-500 animate-gradient-x" />
                <a href="/apps" className="relative bg-black text-white border border-black/20 px-8 py-4 rounded-2xl flex items-center gap-2 font-medium hover:bg-black/90 transition-colors">
                  See our Apps
                  <MoveRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-12 lg:mt-16 h-[350px] sm:h-[400px] md:h-[450px]">
            <div className="rounded-2xl row-span-2 overflow-hidden">
              <Image
                src="/images/bento_left_large.jpg"
                alt="AgapeLabs project showcase"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/bento_top_right.jpg"
                alt="AgapeLabs technology solutions"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/bento_bottom_right.jpg"
                alt="AgapeLabs innovative work"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
