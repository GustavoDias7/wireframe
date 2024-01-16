function form({ fields = [] }) {
  const $g_root = document.createElement("div");
  const $g_row = document.createElement("div");
  $g_root.classList.add("g-root");
  $g_root.classList.add("g-gap-4");
  $g_row.classList.add("g-row");

  fields.forEach((field) => {
    let $field;
    if (field.tag === "textarea") {
      $field = document.createElement("textarea");
    } else if (field.tag === "select") {
      $field = document.createElement("select");
    } else {
      $field = document.createElement("input");
    }
    const $f_label = document.createElement("label");
    const $f_row = document.createElement("div");
    const $g_item = document.createElement("div");
    const $rightElement = document.createElement("div");
    const $inputContainer = document.createElement("div");

    $f_row.classList.add("f-row");
    $g_item.classList.add("g-item-12");

    $field.setAttribute("id", field?.id || field.name);
    $field.setAttribute("name", field.name);
    if (field.disabled) $field.setAttribute("disabled", field.disabled);

    $f_label.setAttribute("for", field?.for || field.name);

    if (field.type === "checkbox" || field.type === "radio") {
      $field.setAttribute("type", field?.type);
      $f_label.classList.add("check");
      if (field.type === "radio") $f_label.classList.add("radio");

      const $marker = document.createElement("span");
      $marker.classList.add("marker");

      const $text = document.createElement("span");
      $text.classList.add("text");
      $text.innerText = field.label;

      if ($field?.value) $field.value === field.value;

      $f_label.appendChild($field);
      $f_label.appendChild($marker);
      $f_label.appendChild($text);
      $f_row.appendChild($f_label);
      $g_item.appendChild($f_row);
      $g_row.appendChild($g_item);
    } else if (field.tag === "select") {
      $field.classList.add("f-select");

      const $option = document.createElement("option");
      $option.innerText = field.label;
      $field.appendChild($option);

      field.options.forEach((option) => {
        const $option = document.createElement("option");
        $option.value = option.value;
        $option.innerText = option.text;
        $field.appendChild($option);
      });

      $f_row.appendChild($field);
      $g_item.appendChild($f_row);
      $g_row.appendChild($g_item);
    } else {
      if (field.tag !== "textarea") {
        $field.setAttribute("type", field?.type || "text");
      }
      $f_label.classList.add("f-label");
      $field.classList.add("f-input");
      $rightElement.classList.add("f-right");
      $inputContainer.classList.add("f-container");
      if (field.active) $field.classList.add("active");

      if (field?.defaultValue?.length) $field.value = field.defaultValue;

      const $rightText = document.createElement("p");
      $rightText.innerText = "Right";
      $rightElement.appendChild($rightText);

      switch (field.variant || "") {
        case "filled":
          $field.classList.add(field.variant);
          $f_label.innerText = field.label;

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $inputContainer.appendChild($f_label);
            $inputContainer.appendChild($rightElement);
            $f_row.appendChild($inputContainer);
          } else {
            $f_row.appendChild($field);
            $f_row.appendChild($f_label);
            $g_item.appendChild($f_row);
          }
          break;
        case "outline":
          $field.classList.add(field.variant);

          const $span = document.createElement("span");
          $span.innerText = field.label;

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $f_label.appendChild($span);
            $inputContainer.appendChild($f_label);
            $inputContainer.appendChild($rightElement);
            $f_row.appendChild($inputContainer);
            $g_item.appendChild($f_row);
          } else {
            $f_row.appendChild($field);
            $f_label.appendChild($span);
            $f_row.appendChild($f_label);
            $g_item.appendChild($f_row);
          }
          break;

        default:
          $f_label.innerText = field.label;

          if (!field?.placeholder) {
            $f_row.appendChild($f_label);
          }

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $inputContainer.appendChild($rightElement);
            $f_row.appendChild($inputContainer);
            $g_item.appendChild($f_row);
          } else {
            if (field?.placeholder) {
              $field.placeholder = field.placeholder;
            }
            $f_row.appendChild($field);
            $g_item.appendChild($f_row);
          }

          break;
      }
      $g_row.appendChild($g_item);
    }

    if (field.errorMessage) {
      $field.classList.add("error");
      // create error element
      const $error = document.createElement("p");
      $error.classList.add("f-helper", "error");
      $error.innerText = field.errorMessage;

      // where to create the error element
      if ($field.parentElement.classList.contains("f-container")) {
        $field.parentElement.after($error);
      } else if ($field.type === "checkbox") {
        $field.parentElement.after($error);
      } else {
        $field.after($error);
      }
    } else if (field?.valid) $field.classList.add("success");

    $g_root.appendChild($g_row);
  });

  return $g_root;
}
export default form;
