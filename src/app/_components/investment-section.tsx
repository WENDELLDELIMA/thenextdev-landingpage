import { Check } from "lucide-react";
import Enrollment from "./enrollment";
import PreEnrollment from "./pre-enrollment";

function InvestmentSection() {
  return (
    <section
      id="investment"
      className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24 "
    >
      <div className="max-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl ">Investimento</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Paga logo cara!
        </p>
      </div>
      <div className="grid w-full  border rounded-lg items-start gap-10 p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-cl font-bold sm:text-2xl">
            O que está incluido?
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Loucura Loucura loucura!
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Loucura Loucura loucura!
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Loucura Loucura loucura!
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Loucura Loucura loucura!
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Loucura Loucura loucura!
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Loucura Loucura loucura!
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div className="space-y-2">
            <h4 className="text-bold">
              12x
              <br />
              R$<span className="text-6xl font-bold text-primary">97,80</span>
            </h4>
            <h4 className="font-bold text-xl"> ou R$ 500, 00 à vista</h4>
          </div>
          <Enrollment />
          <PreEnrollment />
        </div>
      </div>
    </section>
  );
}

export default InvestmentSection;
