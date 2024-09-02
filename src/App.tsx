import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>General Information</AccordionTrigger>
        <AccordionContent>
          <Input />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default App;
