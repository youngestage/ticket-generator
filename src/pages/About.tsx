
import { MainLayout } from "@/layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto p-6">
        <div className="glass-card p-8 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">About TechEmber</h1>
            <p className="text-gray-300 leading-relaxed">
              TechEmber is your gateway to the most electrifying tech conference of the year. We bring together innovators, developers, and tech enthusiasts for an unforgettable experience of learning and networking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-teal-400">Event Highlights</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Interactive workshops and hands-on sessions</li>
                <li>• Keynote speeches from industry leaders</li>
                <li>• Networking opportunities</li>
                <li>• Latest tech demonstrations</li>
                <li>• Career development sessions</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-teal-400">Venue Details</h2>
              <div className="text-gray-300">
                <p>📍 TechHub Convention Center</p>
                <p>📅 December 15-17, 2024</p>
                <p>🕒 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-teal-400">Ticket Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Regular Access</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• General sessions access</li>
                  <li>• Basic networking events</li>
                  <li>• Conference materials</li>
                </ul>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">VIP Access</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• All Regular features</li>
                  <li>• VIP lounge access</li>
                  <li>• Priority seating</li>
                  <li>• Exclusive workshops</li>
                </ul>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">VVIP Access</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• All VIP features</li>
                  <li>• Private networking events</li>
                  <li>• 1-on-1 mentoring sessions</li>
                  <li>• Exclusive dinner gala</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-teal-400">Contact Us</h2>
            <div className="text-gray-300">
              <p>For any inquiries, reach out to us at:</p>
              <p>📧 info@techember.com</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
