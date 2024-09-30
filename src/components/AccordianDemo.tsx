import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  question: string;
  answer: string;
}

interface MainFaq {
  faq: Faq[];
}
export default function AccordianDemo({ faq }: MainFaq) {
  return (
    <>
      <h3>Frequently Asked Questions (FAQs)</h3>
      {faq &&
        faq.map((item: Faq) => (
          <Accordion type="single" collapsible key={item.question}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </>
  );
}
