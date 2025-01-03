import { AIChatComponent } from './AIChatComponent';

export const Hero = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Chat Interface
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ask questions and get intelligent responses with source attribution.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AIChatComponent 
            maxMessages={50}
            className="shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}; 