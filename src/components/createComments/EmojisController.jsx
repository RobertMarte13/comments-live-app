import Emojis from "./subComponents/Emojis";
import { onEmojis, offEmojis } from  './styles/styles.js'

const EmojisController = ({ emojis }) => {
  return (
    <div
      className="content-emojis"
      style={ emojis ? onEmojis : offEmojis} 
    >
      <Emojis />
    </div>
  );
};

export default EmojisController;
