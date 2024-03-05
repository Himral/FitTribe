const Card = {
  baseStyle: {
    p: "22px",
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(120px)",
    width: "100%",
    borderRadius: "20px",
    bg:
      "radial-gradient(circle, rgba(6, 11, 40, 0.94) 0%, rgba(10, 14, 35, 0.49) 100%, #007bff)",
    backgroundClip: "border-box",
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};
