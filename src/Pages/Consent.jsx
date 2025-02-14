import React, { useState } from "react";

function Consent() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [signature, setSignature] = useState("");

  const handleSignatureChange = (e) => {
    setSignature(e.target.value);
  };

  const handleConsentSubmit = () => {
    if (signature) {
      setConsentGiven(true);
      alert("Consent successfully given and document signed!");
    } else {
      alert("Please provide your signature before submitting.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Consent to Physical Contact Agreement
        </h1>
        <p className="text-gray-700 text-lg mb-12">
          This Agreement is entered into voluntarily and acknowledges mutual
          consent to engage in physical contact without emotional attachment.
          Both parties affirm they understand and agree to the terms outlined
          below:
        </p>

        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Purpose
            </h3>
            <p className="text-gray-700 text-lg">
              The purpose of this Agreement is to establish mutual understanding
              and consent regarding physical contact.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Consent to Physical Contact
            </h3>
            <p className="text-gray-700 text-lg">
              Both parties consent to physical contact without intimate,
              romantic, or inappropriate interaction.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              3. No Emotional Attachment
            </h3>
            <p className="text-gray-700 text-lg">
              The physical contact is purely non-romantic and without any
              emotional attachment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Mutual Understanding
            </h3>
            <p className="text-gray-700 text-lg">
              The parties agree to respect each other's boundaries and
              communicate openly.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Release of Liability
            </h3>
            <p className="text-gray-700 text-lg">
              Both parties release each other from claims that may arise from
              the physical contact.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Signature
          </h3>
          <label className="block text-lg text-gray-700">
            Enter your name to sign:
            <input
              type="text"
              value={signature}
              onChange={handleSignatureChange}
              placeholder="Your Name"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </label>
        </div>

        <button
          onClick={handleConsentSubmit}
          disabled={!signature}
          className={`w-full py-3 mt-4 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            signature
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Consent
        </button>

        {consentGiven && (
          <div className="mt-6 text-center bg-green-100 text-green-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">
              Consent has been successfully submitted!
            </h3>
            <p>Thank you for signing the agreement.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Consent;
