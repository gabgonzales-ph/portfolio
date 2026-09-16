"use client";

import { motion } from "framer-motion";
import Section from "@/components/section";

export default function Hero() {
  return (

      <Section
        label={
          <>
            <p className="text-xl font-medium text-foreground normal-case tracking-tighter">
              gabriel gonzales
            </p>
            <p className="text-lg text-subheading normal-case font-light tracking-tighter">
              programmer | technician
            </p>
          </>
        }
      >
        <p className="text-md tracking-tight min-w-full font-normal">
hi, i’m gabriel gonzales, you can call me <i>gab</i>. i am a graduate of bachelor of science in computer engineering, mainly pursuing web development while expanding my knowledge in tech. 
<br></br>
<br> 
</br>
i enjoy building projects that can solve the problems of my clients in the most efficient and effective way possible. i can be the IT guy you need for any maintenance or troubleshoots needed.<br></br><br></br>
          <span
  className="text-accent font-medium bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_1.5px] bg-[position:0_100%] transition-[background-size] duration-300 ease-out hover:bg-[length:100%_1.5px]"
>
  i currently work at San Pablo City LGU - MIS Office as a junior programmer.
</span>
        </p>
      </Section>

  );
}