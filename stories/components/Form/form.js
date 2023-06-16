function form({ fields = [] }) {
  const $form = document.createElement("form");

  fields.forEach((field) => {
    let $field;
    if (field.tag === "textarea") {
      $field = document.createElement("textarea")
    } else if (field.tag === "select") {
      $field = document.createElement("select")
    } else {
      $field = document.createElement("input")
    }
    const $label = document.createElement("label");
    const $row = document.createElement("div");
    const $rightElement = document.createElement("div");
    const $inputContainer = document.createElement("div");

    $row.classList.add("row");

    $field.setAttribute("id", field?.id || field.name);
    $field.setAttribute("name", field.name);
    if (field.disabled) $field.setAttribute("disabled", field.disabled);

    $label.setAttribute("for", field?.for || field.name);

    if (field.type === "checkbox" || field.type === "radio") {
      $field.setAttribute("type", field?.type);
      $label.classList.add("check");
      if (field.type === "radio") $label.classList.add("radio")

      const $marker = document.createElement("span");
      $marker.classList.add("marker");

      const $text = document.createElement("span");
      $text.classList.add("text");
      $text.innerText = field.label;

      if ($field?.value) $field.value === field.value;

      formatHTML($form, 1)
      formatHTML($row, 2)
      formatHTML($label, 3)
      $label.appendChild($field);
      formatHTML($label, 3)
      $label.appendChild($marker);
      formatHTML($label, 3)
      $label.appendChild($text);
      formatHTML($label, 2)
      $row.appendChild($label);
      formatHTML($row, 1)
    } else if (field.tag === "select") {
      $field.classList.add("select");
      
      formatHTML($form, 1)
      formatHTML($row, 2)
      const $option = document.createElement("option");
      $option.innerText = field.label;
      formatHTML($field, 3)
      $field.appendChild($option);

      field.options.forEach(option => {
        const $option = document.createElement("option");
        $option.value = option.value;
        $option.innerText = option.text;
        formatHTML($field, 3)
        $field.appendChild($option);
      })
      formatHTML($field, 2)

      $row.appendChild($field);
      formatHTML($row, 1)
      $form.appendChild($row);
    } else {
      if (field.tag !== "textarea") {
        $field.setAttribute("type", field?.type || "text");
      }
      $label.classList.add("label");
      $field.classList.add("input");
      $rightElement.classList.add("right-element");
      $inputContainer.classList.add("input-container");
      if (field.active) $field.classList.add("active");

      if (field?.defaultValue?.length) $field.value = field.defaultValue;

      const $rightText = document.createElement("p");
      $rightText.innerText = "Right";
      $rightElement.appendChild($rightText);

      switch (field.variant || "") {
        case "filled":
          $field.classList.add(field.variant);
          $label.innerText = field.label;

          formatHTML($form, 1)
          if (field?.rightElement) {
            formatHTML($row, 2)
            formatHTML($inputContainer, 3)
            $inputContainer.appendChild($field);
            formatHTML($inputContainer, 3)
            $inputContainer.appendChild($label);
            formatHTML($inputContainer, 3)
            $inputContainer.appendChild($rightElement);
            formatHTML($inputContainer, 2)
            $row.appendChild($inputContainer);
            formatHTML($row, 1)
          } else {
            formatHTML($row, 2)
            $row.appendChild($field);
            formatHTML($row, 2)
            $row.appendChild($label);
            formatHTML($row, 1)
          }
          break;
        case "outline":
          $field.classList.add(field.variant);

          const $span = document.createElement("span");
          $span.innerText = field.label;

          formatHTML($form, 1)
          if (field?.rightElement) {
            formatHTML($row, 2)
            formatHTML($inputContainer, 3)
            $inputContainer.appendChild($field);
            $label.appendChild($span);
            formatHTML($inputContainer, 3)
            $inputContainer.appendChild($label);
            formatHTML($inputContainer, 3)
            $inputContainer.appendChild($rightElement);
            formatHTML($inputContainer, 2)
            $row.appendChild($inputContainer);
            formatHTML($row, 1)
          } else {
            formatHTML($row, 2)
            $row.appendChild($field);
            $label.appendChild($span);
            formatHTML($row, 2)
            $row.appendChild($label);
            formatHTML($row, 1)
          }
          break;

        default:
          $label.innerText = field.label;

          formatHTML($form, 1)
          if (!field?.placeholder) {
            formatHTML($row, 2)
            $row.appendChild($label);
          }

          if (field?.rightElement) {
            formatHTML($row, 2)
            formatHTML($inputContainer, 3)
            $inputContainer.appendChild($field);
            formatHTML($inputContainer, 3)
            $inputContainer.appendChild($rightElement);
            formatHTML($inputContainer, 2)
            $row.appendChild($inputContainer);
            formatHTML($row, 1)
          } else {
            formatHTML($row, 2)
            
            if (field?.placeholder) {
              $field.placeholder = field.placeholder
            }
            $row.appendChild($field);
            formatHTML($row, 1)
          }

          break;
      }
    }

    if (field.errorMessage) {
      $field.classList.add("error");
      // create error element
      const $error = document.createElement("p");
      $error.classList.add("helper-text", "error");
      $error.innerText = field.errorMessage;

      // where to create the error element
      if ($field.parentElement.classList.contains("input-container")) {
        $field.parentElement.after($error);
      } else if ($field.type === "checkbox") {
        $field.parentElement.after($error);
      } else {
        $field.after($error);
      }
      $error.before("\n");
      $error.before("    ".repeat(2));
    }
    else if (field?.valid) $field.classList.add("success")

    $form.appendChild($row);
    formatHTML($form)
  });

  return $form;
}
export default form

function formatHTML($node, spaces = 0) {
  $node.append("\n");
  if (spaces !== 0) $node.append("    ".repeat(spaces));
}