import useEditorStore from "../../utils/editorStore"
import { HexColorPicker } from "react-colorful";
import { useState } from "react";

const Options = () => {

  const { selectedLayer, textOptions, setTextOptions } = useEditorStore();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  return (
    <div className="options">
      {selectedLayer === "text" ? (
        <div className="">
          <div className="editingOption">
            <span>Font Size</span>
            <input 
              type="number" 
              value={textOptions.fontSize} 
              onChange={(e) => 
                setTextOptions({...textOptions, fontSize: e.target.value})
              }
            />
          </div>
          <div className="editingOption">
            <span>Color</span>
            <div className="textColor">
              <div 
                className="colorPreview" 
                style={{ backgroundColor: textOptions.color }}
                onClick={() => setIsColorPickerOpen((prev) => !prev)}
              /> 
            </div>
            {isColorPickerOpen && (
              <div className="colorPicker">
                <HexColorPicker 
                  color={textOptions.color} 
                  onChange={(color) => setTextOptions({...textOptions, color})
                  }
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="">

        </div>
      )} 
    </div>
  );
};

export default Options;