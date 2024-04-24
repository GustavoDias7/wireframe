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
    const $f_search = document.createElement("div");
    const $f_search_button = document.createElement("button");
    const $g_item = document.createElement("div");
    const $rightElement = document.createElement("div");
    const $inputContainer = document.createElement("div");

    $f_row.classList.add("f-row");
    $f_search.classList.add("f-search");
    $f_search_button.classList.add("f-search-btn");
    $g_item.classList.add("g-item-12");

    $field.setAttribute("id", field?.id || field.name);
    $field.setAttribute("name", field.name);
    if (field.disabled) $field.setAttribute("disabled", "");

    $f_label.setAttribute("for", field?.for || field.name);
    $f_search_button.setAttribute("type", "submit");

    if (field.type === "file") {
      $field.setAttribute("type", field?.type);

      $f_label.classList.add("f-file", "gn-button", "pm-button");
      $f_label.innerText = field?.label;

      $f_label.appendChild($field);
      $f_row.appendChild($f_label);
      $g_item.appendChild($f_row);
      $g_row.appendChild($g_item);
    } else if (field.type === "checkbox" || field.type === "radio") {
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

        case "search":
          if (field?.placeholder) {
            $field.placeholder = field.placeholder;
          }
          $f_search.appendChild($field);
          $f_search_button.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0667 12L6.86667 7.8C6.53333 8.06667 6.15 8.27778 5.71667 8.43333C5.28333 8.58889 4.82222 8.66667 4.33333 8.66667C3.12222 8.66667 2.09733 8.24711 1.25867 7.408C0.42 6.56889 0.000444797 5.544 3.52734e-07 4.33333C-0.000444092 3.12267 0.419111 2.09778 1.25867 1.25867C2.09822 0.419556 3.12311 0 4.33333 0C5.54356 0 6.56867 0.419556 7.40867 1.25867C8.24867 2.09778 8.668 3.12267 8.66667 4.33333C8.66667 4.82222 8.58889 5.28333 8.43333 5.71667C8.27778 6.15 8.06667 6.53333 7.8 6.86667L12 11.0667L11.0667 12ZM4.33333 7.33333C5.16667 7.33333 5.87511 7.04178 6.45867 6.45867C7.04222 5.87556 7.33378 5.16711 7.33333 4.33333C7.33289 3.49956 7.04133 2.79133 6.45867 2.20867C5.876 1.626 5.16756 1.33422 4.33333 1.33333C3.49911 1.33244 2.79089 1.62422 2.20867 2.20867C1.62644 2.79311 1.33467 3.50133 1.33333 4.33333C1.332 5.16533 1.62378 5.87378 2.20867 6.45867C2.79356 7.04356 3.50178 7.33511 4.33333 7.33333Z" fill="white"/></svg>`;
          $f_search.appendChild($f_search_button);
          $f_row.appendChild($f_search);
          $g_item.appendChild($f_row);

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
