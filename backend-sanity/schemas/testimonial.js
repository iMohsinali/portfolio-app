export default {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Title",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "imgurl",
      title: "Imgurl",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "string",
    },
  ],
};
