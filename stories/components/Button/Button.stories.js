export default {
  argTypes: { variant: { control: 'select', options: ["default", "pm-button", "sc-button"] } },
  title: "Components/Button",
};

const render = (args) => {
  const btn = document.createElement('button');
  btn.innerText = args.label;
  btn.classList.add("gn-button");
  if (args.variant !== "default") btn.classList.add(args.variant);

  return btn;
}

export const Default = {
  render,
  args: {
    variant: "default",
    label: 'Generic Button',
  },
};

export const Primary = {
  render,
  args: {
    variant: "pm-button",
    label: 'Primary Button',
  },
};

export const Secondary = {
  render,
  args: {
    variant: "sc-button",
    label: 'Secondary Button',
  },
};