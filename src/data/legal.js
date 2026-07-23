import { BUSINESS } from "./business";

const contactLine = `Questions or requests can be sent to ${BUSINESS.name} at ${BUSINESS.phone.display} or ${BUSINESS.email.service}.`;

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Legal",
    path: "/privacy-policy",
    effectiveDate: "July 2026",
    description:
      "Privacy Policy for JC Trailmaster, including what information is collected, how it is used, cookies, third-party services, and customer privacy rights.",
    intro:
      "At JC Trailmaster, we respect your privacy and are committed to protecting the information you share with us. This policy explains what we collect, how we use it, and how you can contact us about your information.",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you contact us through our website, phone, email, contact form, quote request, or other service channel, we may collect information needed to respond and provide service.",
        items: [
          "Name, phone number, email address, and company name if applicable",
          "Vehicle, trailer, container, chassis, fleet, or equipment information",
          "Service requests, quote details, photos, messages, and scheduling preferences",
          "Website usage information, such as pages visited, approximate location, device type, browser type, and referring website",
          "Any other information you voluntarily provide",
        ],
      },
      {
        heading: "How We Use Your Information",
        body: "We use the information we collect for everyday business purposes related to our repair services and website.",
        items: [
          "Respond to inquiries, quote requests, and service questions",
          "Schedule repairs, inspections, mobile service, and follow-up communications",
          "Provide estimates, invoices, updates, and customer support",
          "Improve our website, customer experience, advertising, and service operations",
          "Protect our business, customers, website, and legal rights",
          "Comply with applicable laws, records requirements, and legal obligations",
        ],
      },
      {
        heading: "Selling Personal Information",
        body: "We do not sell personal information. We may share information only as needed to operate our business, deliver requested services, comply with the law, or work with trusted service providers.",
      },
      {
        heading: "Cookies and Analytics",
        body: "Our website may use cookies, analytics tools, pixels, and similar technologies to improve website functionality, remember preferences, analyze traffic, understand visitor activity, and measure marketing performance. You can disable cookies through your browser settings, but some website features may not work as expected.",
      },
      {
        heading: "Third-Party Services",
        body: "We may use trusted third-party providers to operate the website, receive inquiries, show maps, measure traffic, host content, and manage business listings. These providers may process information according to their own privacy policies.",
        items: [
          "Google Analytics, Google Maps, and Google Business Profile",
          "Website hosting and security providers",
          "Contact form, email, phone, scheduling, and customer communication providers",
          "Advertising or measurement platforms, if used",
        ],
      },
      {
        heading: "Data Security and Retention",
        body: "We take reasonable measures to protect information from unauthorized access, misuse, disclosure, loss, or alteration. No website, email, or online system can be guaranteed completely secure. We keep information only as long as reasonably needed for service, records, legal, operational, or legitimate business purposes.",
      },
      {
        heading: "Your Rights and Choices",
        body: "Depending on where you live, you may have rights to request access to your information, correction of inaccurate information, deletion where legally permitted, or limits on certain uses. You may also unsubscribe from marketing messages where applicable.",
        items: [contactLine],
      },
      {
        heading: "Children's Privacy",
        body: "Our website and services are intended for business and adult customers. We do not knowingly collect personal information from children under 13.",
      },
      {
        heading: "Policy Updates",
        body: "We may update this Privacy Policy from time to time. The effective date above will reflect the latest version posted on this website.",
      },
      {
        heading: "Contact",
        body: `${BUSINESS.name} can be reached by phone at ${BUSINESS.phone.display}, by email at ${BUSINESS.email.service}, or by mail at ${BUSINESS.address.full}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    eyebrow: "Legal",
    path: "/terms-of-service",
    effectiveDate: "July 2026",
    description:
      "Terms of Service for JC Trailmaster, including estimates, repairs, customer responsibilities, payments, warranty, website content, and liability terms.",
    intro:
      "Welcome to JC Trailmaster. By using this website, contacting us, requesting a quote, scheduling service, or using our repair services, you agree to these Terms of Service.",
    sections: [
      {
        heading: "Use of This Website",
        body: "You agree to use this website only for lawful purposes and not to interfere with the website, attempt unauthorized access, submit false information, or misuse any contact form or communication channel.",
      },
      {
        heading: "Estimates and Quotes",
        body: "Quotes and estimates are provided based on information available at the time. Final pricing may change after inspection, diagnosis, parts review, or discovery of additional damage or needed repairs. Additional repairs, parts, or labor may require customer approval before work continues.",
      },
      {
        heading: "Repairs and Scheduling",
        body: "Repair completion times are estimates only and may vary depending on parts availability, labor requirements, weather, supplier delays, workload, access to the equipment, and other unforeseen circumstances. We will make reasonable efforts to communicate material changes.",
      },
      {
        heading: "Customer Responsibilities",
        body: "Customers are responsible for providing accurate information about their trailer, container, chassis, vehicle, fleet, equipment, damage, prior repairs, location, access limitations, and requested services. Customers are also responsible for ensuring they have authority to authorize work on the equipment.",
      },
      {
        heading: "Payments",
        body: "Payment is due according to the agreed service terms, estimate, invoice, or written agreement. Late payments, returned payments, storage, collection costs, or other fees may apply where permitted by law and by the applicable invoice or agreement.",
      },
      {
        heading: "Parts and Materials",
        body: "Parts availability, pricing, freight, and substitutions may affect estimates and timelines. Replacement parts may be new, aftermarket, rebuilt, or equivalent parts unless otherwise agreed in writing.",
      },
      {
        heading: "Warranty",
        body: "Any warranty offered applies only to the specific repair or workmanship described on the invoice or written agreement. Normal wear, misuse, accidents, improper loading, neglect, unauthorized modifications, outside repairs, and unrelated failures are not covered unless required by law or specifically stated in writing.",
      },
      {
        heading: "Website Content and Intellectual Property",
        body: "All website content, including text, logos, graphics, images, layout, and other materials, is the property of JC Trailmaster or its licensors unless otherwise stated. Content may not be copied, reproduced, republished, or used for commercial purposes without permission.",
      },
      {
        heading: "Third-Party Links and Services",
        body: "This website may link to third-party websites, maps, business profiles, social platforms, or service providers. We are not responsible for third-party content, availability, policies, or practices.",
      },
      {
        heading: "Limitation of Liability",
        body: "To the fullest extent permitted by law, JC Trailmaster shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of this website or our services. Nothing in these terms limits rights or remedies that cannot be limited under applicable law.",
      },
      {
        heading: "No Professional Legal Advice",
        body: "Website content is provided for general business information and does not create any warranty, guarantee, or legal obligation beyond the terms of an applicable signed agreement, estimate, invoice, or written service document.",
      },
      {
        heading: "Changes to These Terms",
        body: "These Terms of Service may be updated periodically without prior notice. Continued use of the website or services after updated terms are posted constitutes acceptance of the updated terms.",
      },
      {
        heading: "Contact",
        body: `${BUSINESS.name} can be reached by phone at ${BUSINESS.phone.display}, by email at ${BUSINESS.email.service}, or by mail at ${BUSINESS.address.full}.`,
      },
    ],
  },
};
