import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
const contacts = [
  {
    id: 1,
    icon: <FiMapPin />,
    value: "723, Sundanerippati, Varappur(post), Pudukkottai, Tamilnadu, India",
  },
  {
    id: 2,
    icon: <FiPhone />,
    value: "+91 7806828463",
  },
  {
    id: 3,
    icon: <FiMail />,
    value: "sriram03it@gmail.com",
  },
];
function ContactDetails() {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">Contact details</h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li  className="flex gap-2" key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400">{contact.icon}</i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">{contact.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactDetails;
