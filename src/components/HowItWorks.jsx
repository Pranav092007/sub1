import React from 'react';
import { Search, UserPlus, MessageSquare, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover Skills',
      description: 'Browse through hundreds of skills or search for exactly what you want to learn.',
      step: '01'
    },
    {
      icon: UserPlus,
      title: 'Connect with Teachers',
      description: 'Find verified teachers who match your learning style and schedule preferences.',
      step: '02'
    },
    {
      icon: MessageSquare,
      title: 'Start Learning',
      description: 'Book sessions, join video calls, and begin your personalized learning journey.',
      step: '03'
    },
    {
      icon: Star,
      title: 'Share & Grow',
      description: 'Rate your experience, earn achievements, and start teaching your own skills.',
      step: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How SkillSwap
            <span className="gradient-text block">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin your skill-sharing journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 z-0" />
              )}
              
              <div className="card-hover bg-white p-8 rounded-2xl shadow-sm relative z-10">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Rodriguez',
                skill: 'Learned Python',
                quote: 'From zero to building my first web app in just 3 months!',
                avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
              },
              {
                name: 'Emma Thompson',
                skill: 'Teaching Photography',
                quote: 'I\'ve helped over 50 students discover their passion for photography.',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
              },
              {
                name: 'David Kim',
                skill: 'Learned Guitar',
                quote: 'Finally playing my favorite songs after years of wanting to learn!',
                avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.avatar} 
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.skill}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.quote}"</p>
                <div className="flex items-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;