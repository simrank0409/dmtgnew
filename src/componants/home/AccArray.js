import Typewriter from "typewriter-effect";
export const AccData = [
  {
    id: 0,
    icon: "tabler:receipt-tax",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["GST and Income Tax", "जीएसटी और इनकम टैक्स"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      "Discover effective tax planning strategies and techniques designed to minimize your tax liabilities and maximize your savings.We offer valuable insights and resources on tax optimization, ensuring you make informed decisions to optimize your financial situation.",

  },

  {
    id: 1,
    icon: "map:accounting",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["Accounting", "लेखांकन"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      " Take advantage of our expert accounting services provided by certified professionals with extensive industry knowledge.Our team can assist you with bookkeeping, financial statements, audits, and other accounting-related services.",
   
  },

  {
    id: 2,
    icon: "material-symbols:app-registration",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["MCA Registration & Certificates", "एमसीए पंजीकरण और प्रमाण पत्र"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      "The Ministry of Corporate Affairs (MCA) is vested with the powers of regulating the corporate affairs in India through the Companies Act of 1956, Companies Act, 2013, and other allied Acts. This article looks at the various functions of the regulatory body. ",
    
  },


];
