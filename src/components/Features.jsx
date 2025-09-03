import React from 'react';
import { Users, MessageCircle, Award, Shield, Clock, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Skill Matching',
      description: 'Our smart algorithm connects you with the perfect learning partners based on your skills and interests.',
      color: 'indigo'
    },
    {
      icon: MessageCircle,
      title: 'Real-time Chat',
      description: 'Communicate seamlessly with built-in video calls, messaging, and screen sharing capabilities.',
      color: 'purple'
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Earn badges, track progress, and celebrate milestones as you learn and teach new skills.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified profiles, secure payments, and community moderation ensure a safe learning environment.',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your schedule with our intelligent calendar integration system.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners and teachers from around the world, breaking down geographical barriers.',
      color: 'red'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'bg-indigo-100 text-indigo-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="gradient-text block">Learn & Teach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover powerful features designed to make skill sharing effortless, engaging, and effective for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-hover bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className={`inline-flex p-3 rounded-xl ${getColorClasses(feature.color)} mb-6`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join thousands of learners and teachers who are already transforming their skills through our platform.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Join SkillSwap Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;