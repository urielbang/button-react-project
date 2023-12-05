import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "123",
      label: "Can i use React on a Project?",
      content:
        "You can use React on any project you want. You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "358",
      label: "Can i use JavaScript on a Project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "369",
      label: "Can i use css on a Project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}
export default AccordionPage;
