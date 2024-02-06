import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
function IntroSection() {
  return (
    <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.5"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#b3550e" />
          </radialGradient>
        </defs>
      </svg>
      <div className="container flex max-w[64rem] flex-col items-center text-center gap-4">
        <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
          🗓️ Um dia esse curso estará a venda, prepare-se!
          <ModeToggle />
        </span>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">
          The Next Dev
          <br />
          Full-stack <span className="text-primary">Next.js 14</span>
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Seja o proximo garoto de programa da sua familia, ganhe dinheiro se
          f#dendo do jeito não literal da coisa!
        </p>
        <div className="space-x-4">
          <a
            href="#investiment"
            className="bg-primary py-2 px-4 text-sm text-white rounded shadow-lg font-bold"
          >
            Quero Entrar na turma
          </a>
          <a
            href="#features"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Quero não
          </a>
        </div>
      </div>
    </section>
  );
}
export default IntroSection;
