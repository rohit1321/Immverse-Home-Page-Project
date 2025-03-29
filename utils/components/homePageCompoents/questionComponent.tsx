"use client"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CustomAccordion from "./accor";

export default function Question() {
  return (
    <section className="impact">
      <div className="text-center pt-4 gradient-color text-uppercase">
        Frequently Asked Questions
      </div>
      <div className="fre-ask-question-heading py-3 mx-1">
        Answers to our frequently asked questions
      </div>
      <div className="container">

      <CustomAccordion/>
      </div>
      
    </section>
  );
}
