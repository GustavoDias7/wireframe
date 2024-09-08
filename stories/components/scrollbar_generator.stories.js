export default {
  title: "Components/ScrollbarGenerator",
};

export const ScrollbarGenerator = {
  render: (args) => {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const templateStyle = `
  /* Firefox */
  * {
    scrollbar-width: ${args.scrollbarWidth};
    scrollbar-color: ${args.thumb} ${args.track};
  }
  
  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: ${args.width}px;
  }
  *::-webkit-scrollbar-track {${args.trackBorderRadius ? `\n    border-radius: ${args.trackBorderRadius}px;` : ""}
    background-color: ${args.track};
  }
  
  *::-webkit-scrollbar-track:hover {
    background-color: ${args.trackHover};
  }
  
  *::-webkit-scrollbar-track:active {
    background-color: ${args.trackActive};
  }
  
  *::-webkit-scrollbar-thumb {${args.thumbBorderRadius ? `\n    border-radius: ${args.thumbBorderRadius}px;` : ""}
    background-color: ${args.thumb};
  }
  
  *::-webkit-scrollbar-thumb:hover {
    background-color: ${args.thumbHover};
  }
  
  *::-webkit-scrollbar-thumb:active {
    background-color: ${args.thumbActive};
  }\n`;
  
    style.innerHTML = templateStyle
    div.append(style)
    div.append("\n")
    return div.innerHTML;
  },
  argTypes: { 
    width: { control: { type: 'number', min:1, step: 1 }, description: "Chrome, Edge and Safari", name: "Width"},
    scrollbarWidth: { control: 'select', options: ["auto", "thin"], description: "Firefox", name: "Scrollbar Width" },
    thumbBorderRadius: { control: { type: 'number', min:0, step: 1 }, description: "Chrome, Edge and Safari", name: "Thumb Border Radius"},
    trackBorderRadius: { control: { type: 'number', min:0, step: 1 }, description: "Chrome, Edge and Safari", name: "Track Border Radius"},
    thumb: { control: { type: 'color', presetColors: ['']}, description: "All" , name: "Thumb Color"},
    thumbHover: { control: { type: 'color', presetColors: ['']}, description: "Chrome, Edge and Safari" , name: "Thumb Hover Color"},
    thumbActive: { control: { type: 'color', presetColors: ['']}, description: "Chrome, Edge and Safari" , name: "Thumb Active Color"},
    track: { control: { type: 'color', presetColors: ['']}, description: "All" , name: "Track Color"},
    trackHover: { control: { type: 'color', presetColors: ['']}, description: "Chrome, Edge and Safari" , name: "Track Hover Color"},
    trackActive: { control: { type: 'color', presetColors: ['']}, description: "Chrome, Edge and Safari" , name: "Track Active Color"},
  },
  args: {
    width: 10, 
    scrollbarWidth: "thin",
    thumbBorderRadius: 0,
    trackBorderRadius: 0,
    thumb: "#397524",
    thumbHover: "#62A34B",
    thumbActive: "#62A34B",
    track: "#DFE9EB",
    trackHover: "#B8C0C2",
    trackActive: "#B8C0C2",
  },
}
