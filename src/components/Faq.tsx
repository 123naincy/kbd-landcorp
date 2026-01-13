// FAQ.tsx
import React, { useState } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { FAQItem } from "../data/Faq";
import Reveal from "./animations/Reveal";

interface FAQProps {
  data: FAQItem[];
  title?: string;
  subtitle?: string;
}

const FAQ: React.FC<FAQProps> = ({
  data,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to the most common questions"
}) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <Container className="my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#293066] mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </Reveal>
      </div>

      <Accordion activeKey={activeKey}>
        {data.map((item: FAQItem, index: number) => {
          const key = index.toString();
          const isOpen = activeKey === key;

          return (
            <Card key={item.id} className="mb-3 shadow-sm border-0">
              <Accordion.Item eventKey={key}>
                <Accordion.Header
                  onClick={() => setActiveKey(isOpen ? null : key)}
                >
                  <span className="fw-semibold flex-grow-1">
                    {item.question}
                  </span>
                  <span className="ms-2 fs-5">
                    {isOpen ? "−" : "+"}
                  </span>
                </Accordion.Header>

                <Accordion.Body className="text-muted">
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default FAQ;
