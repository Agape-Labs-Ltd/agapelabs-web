import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full pt-12 pb-20 lg:pt-20 lg:pb-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-start md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl text-left font-bold leading-tight">
                Spreading <span className="text-gradient-stripe">God&apos;s Love</span> Through Technology
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                We create innovative solutions inspired by faith. Our mission is to build technology that makes a meaningful difference in people&apos;s lives, combining technical excellence with compassionate service.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                View Our Work <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 min-h-[500px]">
            <div className="rounded-md row-span-2 overflow-hidden h-full">
              <Image
                src="/images/bento_left_large.jpg"
                alt="AgapeLabs project showcase"
                width={400}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-md overflow-hidden h-full">
              <Image
                src="/images/bento_top_right.jpg"
                alt="AgapeLabs technology solutions"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-md overflow-hidden h-full">
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
