import { formatHTML } from "../../../utils/string";
import form from "./form";
import initInput from "./initInput";

export default {
  title: "Components/Form",
};
export const Field = {
  render: (args) => {
    const optionsField = { ...args };
    if (args.variant === "default") {
      delete optionsField.variant;
      delete optionsField.active;
    }
    const formElement = form({ fields: [optionsField] });
    return formatHTML(formElement.outerHTML);
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "outline", "search"],
    },
    type: { control: "select", options: ["text", "tel", "checkbox", "radio"] },
    tag: { control: "select", options: ["input", "textarea"] },
  },
  args: {
    name: "name",
    id: "name",
    label: "Field",
    placeholder: "",
    variant: "outline",
    type: "text",
    errorMessage: "",
    valid: false,
    disabled: false,
    active: false,
    rightElement: false,
  },
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};

export const BasicFields = {
  render: (args) => {
    const formElement = form({
      fields: [
        { name: "name", id: "name", label: "Default", type: "text" },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const ErrorFields = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          type: "text",
          errorMessage: "Error message",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          errorMessage: "Error message",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          errorMessage: "Error message",
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const ValidFields = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          type: "text",
          valid: true,
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          valid: true,
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          valid: true,
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const DisabledFields = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          type: "text",
          disabled: true,
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          disabled: true,
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          disabled: true,
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const Checkbox = {
  render: (args) => {
    const formElement = form({
      fields: [
        { name: "check", label: "Checkbox", type: "checkbox" },
        {
          name: "disabled-check",
          label: "Disabled",
          type: "checkbox",
          disabled: true,
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const Radio = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          type: "radio",
          name: "options",
          id: "male",
          for: "male",
          label: "Male",
          value: "Male",
        },
        {
          type: "radio",
          name: "options",
          id: "female",
          for: "female",
          label: "Female",
          value: "Female",
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const Textarea = {
  render: (args) => {
    const formElement = form({
      fields: [
        { name: "name", id: "name", label: "Default", tag: "textarea" },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          tag: "textarea",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          tag: "textarea",
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const ErrorTextarea = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          tag: "textarea",
          errorMessage: "Error message",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          tag: "textarea",
          errorMessage: "Error message",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          tag: "textarea",
          errorMessage: "Error message",
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const ValidTextarea = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          tag: "textarea",
          valid: true,
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          tag: "textarea",
          valid: true,
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          tag: "textarea",
          valid: true,
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const DisabledTextarea = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          tag: "textarea",
          disabled: true,
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          tag: "textarea",
          disabled: true,
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          tag: "textarea",
          disabled: true,
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const RightElement = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          type: "text",
          rightElement: true,
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          rightElement: true,
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          rightElement: true,
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const ErrorRightElement = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          type: "text",
          rightElement: true,
          errorMessage: "Error message",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          rightElement: true,
          errorMessage: "Error message",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          rightElement: true,
          errorMessage: "Error message",
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const Select = {
  title: "Components/Form/Select",
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Select an option",
          type: "text",
          tag: "select",
          options: [
            { value: "option_1", text: "Option 1" },
            { value: "option_2", text: "Option 2" },
            { value: "option_3", text: "Option 3" },
          ],
        },
        {
          name: "name",
          id: "name",
          label: "Select an option",
          type: "text",
          tag: "select",
          errorMessage: "Error select",
          options: [
            { value: "option_1", text: "Option 1" },
            { value: "option_2", text: "Option 2" },
            { value: "option_3", text: "Option 3" },
          ],
        },
        {
          name: "name",
          id: "name",
          label: "Select an option",
          type: "text",
          tag: "select",
          valid: true,
          options: [
            { value: "option_1", text: "Option 1" },
            { value: "option_2", text: "Option 2" },
            { value: "option_3", text: "Option 3" },
          ],
        },
        {
          name: "name",
          id: "name",
          label: "Select an option",
          type: "text",
          tag: "select",
          disabled: true,
          options: [
            { value: "option_1", text: "Option 1" },
            { value: "option_2", text: "Option 2" },
            { value: "option_3", text: "Option 3" },
          ],
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
export const SearchFields = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          type: "text",
          variant: "search",
          placeholder: "Search",
        },
      ],
    });
    return formatHTML(formElement.outerHTML);
  },
  args: {},
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};
