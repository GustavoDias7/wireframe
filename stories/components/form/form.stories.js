import { formatHTML } from "../../../utils/string";
import form from "./form";
import initInput from "./initInput";

const breakpoints = ["null", "xs", "sm", "md", "lg", "xl"];

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

    if (args.size !== "default") {
      if (args.responsive_size !== "null") {
        optionsField.size = `${args.responsive_size}:${args.size}`;
      } else {
        optionsField.size = args.size;
      }
    }

    const formElement = form({ fields: [optionsField] });
    return formatHTML(formElement.outerHTML);
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "outline"],
    },
    type: {
      control: "select",
      options: ["text", "tel", "checkbox", "radio", "file", "search"],
    },
    tag: { control: "select", options: ["input", "textarea"] },
    size: {
      control: "select",
      options: ["default", "small", "regular", "large"],
    },
    responsive_size: {
      control: "select",
      options: [...breakpoints],
    },
  },
  args: {
    name: "name",
    id: "name",
    label: "Field",
    placeholder: "",
    variant: "filled",
    type: "text",
    errorMessage: "",
    valid: false,
    disabled: false,
    active: false,
    rightElement: false,
    size: "default",
    responsive_size: "null",
  },
  play: async () => {
    initInput({ selector: ".form .input" });
  },
};

export const BasicFields = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "name",
          id: "name",
          label: "Default",
          type: "text",
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          size: "default",
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
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          errorMessage: "Error message",
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          errorMessage: "Error message",
          size: "default",
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
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          valid: true,
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          valid: true,
          size: "default",
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
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          disabled: true,
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          disabled: true,
          size: "default",
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
          size: "default",
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
        {
          name: "name",
          id: "name",
          label: "Default",
          tag: "textarea",
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          tag: "textarea",
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          tag: "textarea",
          size: "default",
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
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          tag: "textarea",
          errorMessage: "Error message",
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          tag: "textarea",
          errorMessage: "Error message",
          size: "default",
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
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          tag: "textarea",
          valid: true,
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          tag: "textarea",
          valid: true,
          size: "default",
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
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          tag: "textarea",
          disabled: true,
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          tag: "textarea",
          disabled: true,
          size: "default",
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
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          rightElement: true,
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          rightElement: true,
          size: "default",
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
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "filled",
          label: "Filled",
          type: "text",
          rightElement: true,
          errorMessage: "Error message",
          size: "default",
        },
        {
          name: "name",
          id: "name",
          variant: "outline",
          label: "Outline",
          type: "text",
          rightElement: true,
          errorMessage: "Error message",
          size: "default",
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
          size: "default",
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
          size: "default",
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
          size: "default",
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
          size: "default",
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
          name: "search",
          id: "search",
          type: "search",
          placeholder: "Search",
          size: "default",
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
export const File = {
  render: (args) => {
    const formElement = form({
      fields: [
        {
          name: "myfile",
          id: "myfile",
          type: "file",
          label: "Select file",
          size: "default",
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
