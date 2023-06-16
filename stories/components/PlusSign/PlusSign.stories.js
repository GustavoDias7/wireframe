export default {
  title: "Components/Plus Sign",
};

export const PlusSign = {
  render: (args) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const style = document.createElement("style");
    const templateStyle = `
  .${args.className || "plus"} {
    position: relative;
    display: block;
    width: ${args.width}px;
    height: ${args.width}px;
  }
  .${args.className || "plus"}::before,
  .${args.className || "plus"}::after {
    content: "";
    display: block;
    position: absolute;
    margin: auto;
    background-color: ${args.backgroundColor};
  }
  .${args.className || "plus"}::before {
    width: ${args.width}px;
    height: ${args.height}px;
    top: 0px;
    bottom: 0px;
  }
  .${args.className || "plus"}::after {
    width: ${args.height}px;
    height: ${args.width}px;
    left: 0px;
    right: 0px;
  }\n`
    style.innerHTML = templateStyle
    span.classList.add(args.className || "plus")
    div.append(style)
    div.append("\n")
    div.append(span)
    return div.innerHTML;
  },
  argTypes: { 
    width: { control: { type: 'number', min:1, step: 1 }},
    height: { control: { type: 'number', min:1, step: 1 }},
    backgroundColor: { control: { type: 'color', presetColors: ['#ffffff']} }
  },
  args: {
    className: "plus",
    width: 20, 
    height: 2, 
    backgroundColor: "#000000"
  },
}
