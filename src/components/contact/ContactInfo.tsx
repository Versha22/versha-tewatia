
import { contactInfo, availabilityItems } from "@/data/contactData";

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
        <p className="text-slate-300 leading-relaxed mb-8">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology and innovation. Feel free to reach out!
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
          >
            <span className="text-2xl">{contact.icon}</span>
            <div>
              <div className="text-sm text-slate-400">{contact.label}</div>
              <div className="text-white group-hover:text-blue-400 transition-colors">
                {contact.value}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="pt-8">
        <h4 className="text-lg font-semibold text-white mb-4">Available for:</h4>
        <div className="space-y-2">
          {availabilityItems.map((item, index) => (
            <div key={index} className="flex items-center text-slate-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
