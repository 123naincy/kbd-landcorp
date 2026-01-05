
const TermsAndConditions = () => {
  return (
    <>

      <main className="pt-22 pb-16 px-4 bg-slate-50 min-h-screen">
      {/* Outer container to center the content */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 leading-relaxed">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1F265A] mb-2">
          Terms &amp; Conditions – KBD Land Corp
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          <strong>Last Updated:</strong> 26-11-2025
        </p>

        <p className="mb-4 text-gray-700">
          Welcome to <strong>KBD Land Corp</strong>. By accessing or using our
          website <strong>kbdlandcorp.in</strong>, you agree to comply with
          these Terms &amp; Conditions. If you do not agree, please discontinue
          using the website.
        </p>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F265A] mb-2">
            1. Use of Website
          </h2>
          <p className="mb-2 text-gray-700">
            This website is intended for general informational purposes regarding
            our real estate projects, services, and offerings.
          </p>

          <p className="mb-2 text-gray-700">You agree NOT to engage in:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Unlawful activities</li>
            <li>Hacking or attempting unauthorized access</li>
            <li>Data scraping or extraction</li>
            <li>Any misuse that may harm the website or its content</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F265A] mb-2">
            2. Project Information &amp; Representations
          </h2>
          <p className="mb-2 text-gray-700">
            All project details, brochures, images, layouts, and visuals shown on
            the website are for <strong>illustrative purposes only</strong>.
          </p>

          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
            <li>Actual features, amenities, and specifications may vary</li>
            <li>
              Changes may occur due to approvals, regulations, or construction
              progress
            </li>
          </ul>

          <p className="text-gray-700">
            No information on this website constitutes a{" "}
            <strong>legal offer, guarantee, or contract</strong>.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F265A] mb-2">
            3. Pricing &amp; Availability
          </h2>
          <p className="mb-2 text-gray-700">
            All pricing, availability, and offers mentioned on the website are{" "}
            <strong>indicative and subject to change</strong> without prior
            notice.
          </p>
          <p className="text-gray-700">
            Final pricing and availability will be confirmed only by{" "}
            <strong>authorized sales representatives</strong>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F265A] mb-2">
            4. Intellectual Property
          </h2>
          <p className="mb-2 text-gray-700">
            All content on this website—including text, images, graphics, logos,
            videos, and designs—is the exclusive property of{" "}
            <strong>KBD Land Corp</strong>.
          </p>
          <p className="text-gray-700">
            Unauthorized use, copying, reproduction, or distribution of any
            content is strictly prohibited.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F265A] mb-2">
            5. Third-Party Links
          </h2>
          <p className="mb-2 text-gray-700">
            Our website may contain links to external websites for additional
            information.
          </p>
          <p className="text-gray-700">
            We are not responsible for the{" "}
            <strong>content, accuracy, policies, or practices</strong> of any
            third-party websites.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F265A] mb-2">
            6. Limitation of Liability
          </h2>
          <p className="mb-2 text-gray-700">
            KBD Land Corp is not liable for any loss, damage, or inconvenience
            arising from:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
            <li>Use of the website</li>
            <li>Reliance on project information</li>
            <li>Temporary website unavailability</li>
            <li>Technical issues or errors</li>
          </ul>
          <p className="text-gray-700">
            Use of this website is entirely at your own risk.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F265A] mb-2">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to update or modify these Terms &amp; Conditions
            at any time. Any changes will be posted on this page with a revised{" "}
            <strong>“Last Updated”</strong> date.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-2">
          <h2 className="text-xl font-semibold text-[#1F265A] mb-2">
            8. Contact Information
          </h2>
          <p className="mb-2 text-gray-700">
            For any concerns related to these Terms &amp; Conditions, reach us
            at:
          </p>
          <p className="text-gray-700">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:enquiry@kbdlandcorp.in"
              className="text-[#1F265A] underline"
            >
              enquiry@kbdlandcorp.in
            </a>
            <br />
            📍 <strong>Office Address:</strong> Chandigarh–Manali Highway,
            Mohali, Punjab
            <br />
            📞 <strong>Phone:</strong>{" "}
            <a
              href="tel:+918448220334"
              className="text-[#1F265A] underline"
            >
              8448220334
            </a>
          </p>
        </section>
      </section>
    </main>
      </>
    
  );
};

export default TermsAndConditions;
