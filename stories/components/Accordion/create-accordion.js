/*
<button class="accordion" data-accordion>
  <div class="label">
    <h3>Accordion</h3>
    <span class="arrow"></span>
  </div>
  <div class="content">
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Fugit corrupti ut dignissimos magni delectus! Cupiditate
        ratione quo minima incidunt voluptas? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Aut, doloremque dolorum
        voluptatibus non molestias minima. Eos, consectetur dolorem
        deleniti illo impedit reiciendis doloribus nisi! Debitis non
        adipisci sed ea autem?
      </p>
    </div>
  </div>
</button>
*/

function createAccordion(options = [
    {label: "Label", contents: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit."]}
  ]
) {
  const $wrapper = document.createElement("div");

  options.forEach(option => {
    const $button = document.createElement("button");
    $button.classList.add("accordion");
    $button.setAttribute("data-accordion", "");
  
    const $label = document.createElement("div");
    $label.classList.add("label");
  
    const $h3 = document.createElement("h3");
    $h3.innerText = option.label;

    const $arrow = document.createElement("span");
    $arrow.classList.add("arrow");

    $label.appendChild($h3);
    $label.appendChild($arrow);
    $button.appendChild($label);

    const $content = document.createElement("div");
    $content.classList.add("content");
    const $contentDiv = document.createElement("div");
    option.contents.forEach(content => {
      const $content = document.createElement("p");
      $content.innerText = content;
      $contentDiv.appendChild($content);
    })
    $content.appendChild($contentDiv);
    $button.appendChild($content);

    $wrapper.appendChild($button);
  })

  return $wrapper;
}

export default createAccordion;