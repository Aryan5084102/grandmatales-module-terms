import faqs from '../data/faqs.json';

type FAQ = { question: string; answer: string };

const FAQ = () => {
  return (
    <div className="max-w-2xl p-6 ">
      <h1 className="font-serif text-3xl mb-4">FAQs</h1>
      {faqs.map((faq: FAQ, idx: number) => (
        <details key={idx} className="mb-3">
          <summary className="cursor-pointer font-semibold">{faq.question}</summary>
          <p className="ml-4 mt-2">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQ;
