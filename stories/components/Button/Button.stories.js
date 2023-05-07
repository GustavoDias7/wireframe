export default {
  title: "Components/Button",
  argTypes: { variant: { control: 'select', options: ["default", "pm-button", "sc-button"] } },
  render: (args) => {
    const btn = document.createElement('button');
    btn.innerText = args.label;
    btn.classList.add("gn-button");
    if (args.variant !== "default") btn.classList.add(args.variant);
    return btn;
  }
};


export const Default = {
  args: {
    variant: "default",
    label: 'Generic Button',
  },
};

export const Primary = {
  args: {
    variant: "pm-button",
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: "sc-button",
    label: 'Secondary Button',
  },
};