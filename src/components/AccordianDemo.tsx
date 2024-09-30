import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordianDemo({
  faq,
}: {
  faq: {
    [x: string]: any;
    question: string;
    answer: string;
  };
}) {
  return (
    <>
      <h3>Frequently Asked Questions (FAQs)</h3>
      {faq &&
        faq.map((item: any) => (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </>
  );
}
