import Typewriter from "typewriter-effect";
import { WebRoutes } from "../../routes";
export const ProminentData = [
  {
    id: 0,
    icon: "simple-line-icons:plane",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["TRAVEL SERVICES", "ट्रेवल सर्विस"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      "DMT is determined to discover new ways to create bu opportunities in real time from online and mobile platform. Start your business with us today & serve your customers with all the Travel based services.",
    buttonText: "Read More...",
    path: WebRoutes.TRAVEL
  },

  {
    id: 1,
    icon: "ant-design:bank-outlined",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["DIGITAL BANKING", "डिजिटल बैंकिंग"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      " DMT is offering business opportunity to become Bank’s CSP and maximize the earning by fulfilling your customers day to day banking needs. Sign up today with us to become CSP with ease of doing business.",
    buttonText: "Read More...",
    path: WebRoutes.BANKING
  },

  {
    id: 2,
    icon: "clarity:mobile-line",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["UTILITY PAYMENT SERVICES", "यूटिलिटी पेमेंट सर्विस"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      "DMT is offering Prepaid recharge and utility bill payments services to our associate partners across Pan India to pay instantly & hassle-free customer’s utility bills for Electricity, Gas, Water and much more.",
    buttonText: "Read More...",
    path: WebRoutes.UTILITY
  },

  {
    id: 3,
    icon: "ic-baseline-card-travel",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["CASH MANAGEMENT SYSYTEM", "कैश मैनेजमेंट सिस्टम"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      " DMT is offering Cash drop services to authorized partners across India. The customer can go to our outlet and make the payment for repayments of Loan, Insurance Premium hassle-free etc.",
    buttonText: "Read More...",
    path: WebRoutes.CASHDROP
  },

  {
    id: 4,
    icon: "bi:umbrella",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["COMPOSITE INSURANCE", "कम्पोजिट इन्शुरन्स"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      " DMT is a corporate agent approved by IRDAI and has been authorized to do insurance business across India. DMT invites you to become the associate partner and full fill your customer’s need of Insurance ...",
    buttonText: "Read More...",
    path: WebRoutes.INSURANCE
  },

  {
    id: 5,
    icon: "fluent:building-bank-link-20-regular",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["GRAHAK SEVA KENDRA", "ग्राहक सेवा केंद्र "],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      "DMT is a Corporate BC and we have been appointing the Banking Outlets (Kiosk banking) as per the mandates given by the bank. We invite you to join hands with the bank to fulfill all the banking ...",
    buttonText: "Read More...",
    path: WebRoutes.CSP
  },
];
