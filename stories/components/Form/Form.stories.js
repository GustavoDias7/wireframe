import form from "./form";
import initInput from "./initInput";

export default {
  title: "Components/Form",
};
export const Field = {
  render: (args) => {
    const optionsField = { ...args }
    if (args.variant === "default") {
      delete optionsField.variant;
      delete optionsField.active;
    }
    const formElement = form({ fields: [ optionsField ] });
    formElement.classList.add("form");
    return formElement;
  },
  argTypes: { 
    variant: { control: 'select', options: ["default", "filled", "outline"] },
    type: { control: 'select', options: ["text", "checkbox"] } 
  },
  args: { 
    name: "name", 
    id: "name", 
    label: "Field", 
    variant: "outline",
    type: "text", 
    disabled: false, 
    active: false,
    valid: false,
    errorMessage: "" 
  },
  play: async ({ canvasElement }) => {
    initInput({ selector: ".form .input" });
  }
};

export const BasicForm = {
  render: (args) => {
    const formElement = form({
      fields: [
        { name: "name", id: "name", label: "Default", type: "text" },
        { name: "name", id: "name", variant: "filled", label: "Filled", type: "text" },
        { name: "name", id: "name", variant: "outline", label: "Outline", type: "text" }
      ]
    });
    formElement.classList.add("form");
    return formElement;
  },
  args: {},
  play: async ({ canvasElement }) => {
    initInput({ selector: ".form .input" });
  }
};
export const ErrorForm = {
  render: (args) => {
    const formElement = form({
      fields: [
        { name: "name", id: "name", label: "Default", type: "text", errorMessage: "Error message" },
        { name: "name", id: "name", variant: "filled", label: "Filled", type: "text", errorMessage: "Error message" },
        { name: "name", id: "name", variant: "outline", label: "Outline", type: "text", errorMessage: "Error message" }
      ]
    });
    formElement.classList.add("form");
    return formElement;
  },
  args: {},
  play: async ({ canvasElement }) => {
    initInput({ selector: ".form .input" });
  }
};
export const ValidForm = {
  render: (args) => {
    const formElement = form({
      fields: [
        { name: "name", id: "name", label: "Default", type: "text", valid: true },
        { name: "name", id: "name", variant: "filled", label: "Filled", type: "text", valid: true },
        { name: "name", id: "name", variant: "outline", label: "Outline", type: "text", valid: true }
      ]
    });
    formElement.classList.add("form");
    return formElement;
  },
  args: {},
  play: async ({ canvasElement }) => {
    initInput({ selector: ".form .input" });
  }
};
export const DisabledForm = {
  render: (args) => {
    const formElement = form({
      fields: [
        { name: "name", id: "name", label: "Default", type: "text", disabled: true },
        { name: "name", id: "name", variant: "filled", label: "Filled", type: "text", disabled: true },
        { name: "name", id: "name", variant: "outline", label: "Outline", type: "text", disabled: true }
      ]
    });
    formElement.classList.add("form");
    return formElement;
  },
  args: {},
  play: async ({ canvasElement }) => {
    initInput({ selector: ".form .input" });
  }
};
export const Checkbox = {
  render: (args) => {
    const formElement = form({
      fields: [ 
        { name: "check", label: "Checkbox", type: "checkbox" },
        { name: "disabled-check", label: "Disabled", type: "checkbox", disabled: true }
       ]
    });
    formElement.classList.add("form");
    return formElement;
  },
  args: {},
  play: async ({ canvasElement }) => {
    initInput({ selector: ".form .input" });
  }
};
export const Radio = {
  render: (args) => {
    const formElement = form({
      fields: [ 
        { type: "radio", name: "options", id: "male", for: "male", label: "Male", value: "Male" }, 
        { type: "radio", name: "options", id: "female", for: "female", label: "Female", value: "Female" }
      ]
    });
    formElement.classList.add("form");
    return formElement;
  },
  args: {},
  play: async ({ canvasElement }) => {
    initInput({ selector: ".form .input" });
  }
};
export const Textarea = {
  render: (args) => {
    const formElement = form({
      fields: [
        { name: "name", id: "name", label: "Default", tag: "textarea" },
        { name: "name", id: "name", variant: "filled", label: "Filled", tag: "textarea" },
        { name: "name", id: "name", variant: "outline", label: "Outline", tag: "textarea" }
      ]
    });
    formElement.classList.add("form");
    return formElement;
  },
  args: {},
  play: async ({ canvasElement }) => {
    initInput({ selector: ".form .input" });
  }
};