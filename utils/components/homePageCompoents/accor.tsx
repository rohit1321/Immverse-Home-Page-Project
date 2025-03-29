import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    
    const accordionData = [
        {
            title: "What is AI?",
            content: "AI (Artificial Intelligence) refers to the simulation of human intelligence in machines. It enables computers to perform tasks such as learning, reasoning, problem-solving, and decision-making. AI includes fields like machine learning, deep learning, and natural language processing."
        },
        {
            title: "What is LLM?",
            content: "LLM (Large Language Model) is a type of AI model trained on massive datasets to understand and generate human-like text. These models, such as GPT-4, are used for tasks like text generation, translation, summarization, and answering questions."
        },
        {
            title: "How can students in India start learning about AI?",
            content: "Students in India can start learning AI by taking online courses from platforms like Coursera, Udemy, and edX. They can also explore AI-related degree programs, participate in hackathons, and practice coding with Python and AI libraries like TensorFlow and PyTorch."
        },
        {
            title: "Can AI help in preserving Indian languages?",
            content: "Yes, AI can play a crucial role in preserving Indian languages by enabling automatic translation, speech recognition, and text-to-speech conversion for regional languages. AI-powered tools can help document endangered languages and make them more accessible through digital platforms."
        },
        {
            title: "What is the future of AI in India?",
            content: "The future of AI in India looks promising, with increasing investments in AI research, government initiatives like 'AI for All,' and growing applications in healthcare, education, agriculture, and finance. AI is expected to drive automation, improve efficiency, and create new job opportunities."
        },
        {
            title: "Which programming languages are needed to learn AI?",
            content: "Python is the most widely used programming language for AI due to its extensive libraries like TensorFlow, PyTorch, and scikit-learn. Other useful languages include R (for data science), Java (for AI applications), and Julia (for high-performance computing)."
        },
        {
            title: "What are the future trends of AI in education?",
            content: "Future trends of AI in education include personalized learning, AI-driven tutoring systems, automated grading, and the use of chatbots for student support. AI will also enhance adaptive learning platforms and improve accessibility for students with disabilities."
        }
    ];
    

    return (
        <div className="accordion" id="accordionExample" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
            {accordionData.map((item, index) => (
                <div className="accordion-item" key={index} style={{ border: 'none' }}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <div
                            className=" btn accordion-button"
                            onClick={() => toggleAccordion(index)}
                            style={{
                                backgroundColor: ' #121212',
                                color: '#fff',
                                borderBottom: '1px solid #333',
                                // display: 'flex',
                                // justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1rem',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                width: '100%',
                            }}
                        >
                            <span className='flex-grow-1'>{item.title}</span>
                            <img
                                src={activeIndex === index ? '/icons-footer/up-arrow.svg' : '/icons-footer/arrow-right.svg'}
                                alt={activeIndex === index ? 'Up Arrow' : 'Right Arrow'}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    transition: 'transform 0.3s',
                                    transform: activeIndex === index ? 'rotate(-25 deg)' : 'rotate(0deg)',
                                }}
                            />
                        </div>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={{ backgroundColor: '#121212', color: '#fff', padding: '1rem' }}>
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;