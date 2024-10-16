import React from 'react';
import { QrCode, Palette, Monitor, BarChart } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    title: 'Create',
    description: 'Manage your own QR codes and generate unique codes for your products from your own user dashboard.'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Allow sub users within your group and allow them to create custom codes and campaigns incorporating your own logo and style to stand out from the competition.'
  },
  {
    icon: Monitor,
    title: 'Showcase',
    description: 'Display your codes and let customers access data directly from their device to take home with ease free from exposure to the business.'
  },
  {
    icon: BarChart,
    title: 'Analyse & Update',
    description: 'Instantly update the QR code with the most relevant and up-to-date information to your website with little fuss. You can update these whenever you like and as often as you would like.'
  }
];

const HowItWorks: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
        <div className="flex flex-wrap justify-between items-start">
          {steps.map((step, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center text-center mb-6 md:mb-0 px-2">
              <div className="relative mb-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute top-0 right-0 -mr-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;