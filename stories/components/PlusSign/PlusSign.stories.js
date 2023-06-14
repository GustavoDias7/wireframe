export default {
  title: "Components/PlusSign",
};

export const PlusSign = {
  render: (args) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const style = document.createElement("style");
    const templateStyle = `
  .plus {
    position: relative;
    display: block;
    width: ${args.width}px;
    height: ${args.width}px;
  }
  .plus::before,
  .plus::after {
    content: "";
    position: absolute;
    margin: auto;
    background-color: ${args.backgroundColor};
  }
  .plus::before {
    width: ${args.width}px;
    height: ${args.height}px;
    top: 0px;
    bottom: 0px;
  }
  .plus::after {
    width: ${args.height}px;
    height: ${args.width}px;
    left: 0px;
    right: 0px;
  }\n`
    style.innerHTML = templateStyle
    span.classList.add("plus")
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
    width: 20, 
    height: 2, 
    backgroundColor: "#000000"
  },
}
