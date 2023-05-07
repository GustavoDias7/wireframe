function form({ fields = [] }) {
  const $form = document.createElement("form");

  fields.forEach((field) => {
    const $field = document.createElement(field.tag === "textarea" ? "textarea" : "input");
    const $label = document.createElement("label");
    const $row = document.createElement("div");
    const $rightElement = document.createElement("div");
    const $inputContainer = document.createElement("div");

    $row.classList.add("row");

    $field.setAttribute("id", field?.id || field.name);
    $field.setAttribute("name", field.name);
    $field.setAttribute("type", field?.type || "text");
    if (field.disabled) $field.setAttribute("disabled", field.disabled);

    $label.setAttribute("for", field?.for || field.name);

    if (field.type === "checkbox" || field.type === "radio") {
      $label.classList.add("check");
      if (field.type === "radio") $label.classList.add("radio")

      const $marker = document.createElement("span");
      $marker.classList.add("marker");

      const $text = document.createElement("span");
      $text.classList.add("text");
      $text.innerText = field.label;

      if ($field?.value) $field.value === field.value;

      $label.appendChild($field);
      $label.appendChild($marker);
      $label.appendChild($text);
      $row.appendChild($label);
    } else {
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

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $inputContainer.appendChild($label);
            $inputContainer.appendChild($rightElement);
            $row.appendChild($inputContainer);
          } else {
            $row.appendChild($field);
            $row.appendChild($label);
          }
          break;
        case "outline":
          $field.classList.add(field.variant);

          const $span = document.createElement("span");
          $span.innerText = field.label;

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $label.appendChild($span);
            $inputContainer.appendChild($label);
            $inputContainer.appendChild($rightElement);
            $row.appendChild($inputContainer);
          } else {
            $row.appendChild($field);
            $label.appendChild($span);
            $row.appendChild($label);
          }
          break;

        default:
          $label.innerText = field.label;

          $row.appendChild($label);

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $inputContainer.appendChild($rightElement);
            $row.appendChild($inputContainer);
          } else {
            $row.appendChild($field);
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
    }
    else if (field?.valid) $field.classList.add("success")

    $form.appendChild($row);
  });

  return $form;
}
export default form