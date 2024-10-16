import React from 'react';
import { Shield, Clipboard, BarChart2, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enhanced Safety Protocols',
    description: 'Implement and track safety measures across your organization with QR-enabled checkpoints.'
  },
  {
    icon: Clipboard,
    title: 'Asset Tracking',
    description: 'Efficiently manage and track your assets using QR codes for quick access to asset information and history.'
  },
  {
    icon: BarChart2,
    title: 'Real-time Reporting',
    description: 'Generate instant reports on safety compliance and asset utilization with our advanced analytics.'
  },
  {
    icon: Users,
    title: 'Employee Training',
    description: 'Streamline safety training processes with QR-coded materials and progress tracking.'
  }
];

const AssetSafetyManagement: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-16"> {/* Increased top padding */}
        <h1 className="text-4xl font-bold text-center mb-8">Asset and Safety Management</h1>
        
        <section className="mb-12">
          <p className="text-lg text-center mb-8">
            Enhance your organization's asset management and safety protocols with our QR-based solutions. 
            Streamline processes, improve compliance, and boost overall efficiency.
            
            Create  unique QR codes whch can be placed on or near your assests which will generate a link to any information you find relevant, ie risk assessments, manuals, pre-use checks or anythign you require easily and effeciently.

            These pages can be updated remotely and intantly at the click of a button to ensure they are relevant and up to date.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
               
          <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Asset and Safety Management?</h2>
          <p className="mb-6">
            Our QR-based solutions can help you create a safer, more efficient workplace. 
            Get started today and see the difference our technology can make.
          </p>
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-100 transition duration-300">
            Request a Demo
          </button>
        </section>
      </main>
    </div>
  );
};

export default AssetSafetyManagement;