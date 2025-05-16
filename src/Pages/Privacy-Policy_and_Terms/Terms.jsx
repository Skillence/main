import React from "react";

const Terms = () => {
  const termsPoints = [
    {
      title: "Acceptance of Terms",
      description:
        "By using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the platform.",
    },
    {
      title: "Services Offered",
      description:
        "We provide internship opportunities, mock interviews, and hackathons to help students gain real-world tech experience. Availability may vary based on selection criteria.",
    },
    {
      title: "User Responsibilities",
      description:
        "You agree to provide accurate information, maintain the confidentiality of your account, and not misuse the platform. Plagiarism, spam, or abuse may lead to termination.",
    },
    {
      title: "Payment & Refunds",
      description:
        "Certain services may require payment (e.g., one-on-one interviews). Prices may vary. Refunds are issued only under specific conditions, subject to review.",
    },
    {
      title: "Intellectual Property",
      description:
        "All content, code, and branding on the platform are owned by us. You may not reproduce or distribute any content without written permission.",
    },
    {
      title: "Termination",
      description:
        "We reserve the right to suspend or terminate access to the platform at any time, especially in cases of violations or misconduct.",
    },
    {
      title: "Changes to Terms",
      description:
        "These terms may be updated from time to time. You will be notified of major changes through email or on the website.",
    },
  ];
  return (
    <div className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          Terms of Service
        </h1>
        <p className="text-center text-slate-600 text-lg mb-12">
          Please read these terms carefully before using our platform.
        </p>

        {termsPoints.map((terms,index)=>(<section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">{index + 1}{'. '}{terms.title}</h2>
          <p className="text-slate-600 leading-relaxed">
            {terms.description}
          </p>
        </section>))}

       
        <div className="border-t pt-6 mt-12 text-sm text-center text-slate-500">
          For questions regarding these terms, contact us at <span className="text-pink-600 font-medium">skillence.team@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Terms;
