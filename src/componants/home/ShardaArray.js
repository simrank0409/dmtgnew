import Typewriter from "typewriter-effect";
export const ShardaData = [
  {
    id: 0,
    icon: "tabler:ribbon-health",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["Health", "हैल्थ"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      "We aspire to help the underprivileged people with less, inappropriate or no vision by organizing time to time camps and providing basic medical facilities.",
    buttonText: "Read More...",
  },

  {
    id: 1,
    icon: "mdi:education-outline",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["Education", "एडुकेशन"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      "In this program our main motive is to complete basic educational requirements of the underprivileged students/ children for their better education and future.",
    buttonText: "Read More...",
  },

  {
    id: 2,
    icon: "streamline:natrue-ecology-recycle-1-sign-environment-protect-save-arrows",
    typeWriterOption: (
      <Typewriter
        options={{
          strings: ["Environment", "एंवीरोंमेंट"],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    ),
    description:
      "We are focused on the most important part of the environment i.e. the plants and hence spread awareness and provide samplings for the tree plantation.",
    buttonText: "Read More...",
  },


];
