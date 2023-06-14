export default {
  title: "Components/PlusSign",
};

export const PlusSign = {
  render: (args) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const pre = document.createElement("pre");
    const style = document.createElement("style");
    const templateStyle = `
.plus {
  position: relative;
  display: block;
  width: ${args.width}px;
  height: ${args.width}px;
}
.plus::before {
  content: "";
  position: absolute;
  display: block;
  background-color: ${args.backgroundColor};
  width: ${args.width}px;
  height: ${args.height}px;
  margin: auto;
  top: 0px;
  bottom: 0px;
}
.plus::after {
  content: "";
  position: absolute;
  display: block;
  background-color: ${args.backgroundColor};
  width: ${args.height}px;
  height: ${args.width}px;
  margin: auto;
  left: 0px;
  right: 0px;
}`
    style.innerHTML = templateStyle
    span.classList.add("plus")
    div.append(style)
    div.append(span)
    div.append(pre);
    return div;
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
